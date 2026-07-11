import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzip } from 'node:zlib';
import { promisify } from 'node:util';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const siteOrigin = 'https://qaydalaqar.com';
const gzipAsync = promisify(gzip);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(entryPath) : entryPath;
    }),
  );

  return files.flat();
}

function routeFromHtmlFile(filePath) {
  const relativePath = path.relative(distDir, filePath).split(path.sep).join('/');
  if (relativePath === 'index.html') return '/';
  return `/${relativePath.replace(/\/index\.html$/, '')}/`;
}

function normalizeRoute(value, baseRoute = '/') {
  const url = new URL(value, `${siteOrigin}${baseRoute}`);
  if (url.origin !== siteOrigin) return null;

  let route = url.pathname;
  if (route !== '/' && !path.posix.extname(route) && !route.endsWith('/')) {
    route = `${route}/`;
  }
  return route;
}

async function outputExists(route) {
  const relativePath = route.replace(/^\//, '');
  const candidates = path.posix.extname(route)
    ? [path.join(distDir, relativePath)]
    : [path.join(distDir, relativePath, 'index.html')];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return true;
    } catch {
      // Try the next valid static-output shape.
    }
  }

  return false;
}

const files = await walk(distDir);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
assert.equal(htmlFiles.length, 47, 'The public HTML route inventory changed unexpectedly');

const javascriptFiles = files.filter((file) => file.endsWith('.js'));
const javascriptBuffers = await Promise.all(javascriptFiles.map((file) => readFile(file)));
const rawJavaScriptBytes = javascriptBuffers.reduce((total, buffer) => total + buffer.length, 0);
const gzipJavaScriptBytes = (
  await Promise.all(javascriptBuffers.map((buffer) => gzipAsync(buffer)))
).reduce((total, buffer) => total + buffer.length, 0);
assert.ok(rawJavaScriptBytes <= 155_000, `JavaScript budget exceeded: ${rawJavaScriptBytes} bytes`);
assert.ok(gzipJavaScriptBytes <= 52_000, `Gzipped JavaScript budget exceeded: ${gzipJavaScriptBytes} bytes`);

const routeSet = new Set(htmlFiles.map(routeFromHtmlFile));
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();
const brokenReferences = [];

for (const file of htmlFiles) {
  const route = routeFromHtmlFile(file);
  const html = await readFile(file, 'utf8');

  assert.match(html, /<html[^>]*lang="ar"[^>]*dir="rtl"/, `${route} must remain Arabic RTL`);
  assert.match(html, /<meta name="viewport"/, `${route} is missing the viewport meta tag`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route} must contain exactly one h1`);

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];

  assert.ok(title, `${route} is missing a title`);
  assert.ok(description, `${route} is missing a description`);
  assert.ok(canonical, `${route} is missing a canonical URL`);

  for (const [value, index, label] of [
    [title, titles, 'title'],
    [description, descriptions, 'description'],
    [canonical, canonicals, 'canonical URL'],
  ]) {
    assert.ok(!index.has(value), `${route} duplicates the ${label} from ${index.get(value)}`);
    index.set(value, route);
  }

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const [, jsonLd] of jsonLdBlocks) {
    assert.doesNotThrow(() => JSON.parse(jsonLd), `${route} contains invalid JSON-LD`);
  }

  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:mailto:|tel:|data:|javascript:|#)/.test(reference)) continue;
    const targetRoute = normalizeRoute(reference, route);
    if (!targetRoute) continue;
    if (!(await outputExists(targetRoute))) {
      brokenReferences.push(`${route} -> ${reference}`);
    }
  }
}

assert.deepEqual(brokenReferences, [], `Broken internal references:\n${brokenReferences.join('\n')}`);

for (const requiredFile of ['sitemap.xml', 'rss.xml', 'llms.txt', 'robots.txt', 'favicon.svg', 'og-image.png']) {
  await assert.doesNotReject(access(path.join(distDir, requiredFile)), `${requiredFile} is missing from the build`);
}

const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
const sitemapRoutes = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => normalizeRoute(match[1])),
);
assert.equal(sitemapRoutes.size, 47, 'The sitemap route inventory changed unexpectedly');
assert.deepEqual([...sitemapRoutes].sort(), [...routeSet].sort(), 'Sitemap and HTML route inventories differ');

const pricingHtml = await readFile(path.join(distDir, 'pricing', 'index.html'), 'utf8');
assert.ok(pricingHtml.includes('لا يجري تحصيل رسوم'), 'Pricing must state the current no-charge condition');
assert.ok(!pricingHtml.includes('ابدأ مجان'), 'Pricing must not imply a permanent free plan');

const commissionHtml = await readFile(
  path.join(distDir, 'blog', 'commission-management-mistakes', 'index.html'),
  'utf8',
);
assert.ok(
  commissionHtml.includes('لا يقدّم حالياً وحدة مستقلة لإدارة العمولات'),
  'The commission article must preserve the current product boundary',
);

const llmsText = await readFile(path.join(distDir, 'llms.txt'), 'utf8');
assert.ok(llmsText.includes('does not provide automatic Excel import'), 'llms.txt must disclose the Excel boundary');
assert.ok(llmsText.includes('not a general document archive'), 'llms.txt must disclose the document boundary');

console.log(
  `Verified ${htmlFiles.length} HTML routes, sitemap parity, metadata, JSON-LD, internal references, and a ${gzipJavaScriptBytes}-byte gzipped JavaScript budget.`,
);
