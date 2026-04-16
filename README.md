# قيد العقار — Landing Page

الموقع التسويقي لـ [قيد العقار](https://qaydalaqar.com) — نظام إدارة التدفقات المالية للمكاتب العقارية.

## التقنية
- **Framework:** Astro 4.x (Static-first)
- **UI:** React 18 (Islands للعناصر التفاعلية فقط)
- **Styling:** TailwindCSS 3.x + @tailwindcss/typography
- **Content:** MDX للمدونة
- **Deploy:** Vercel

## تشغيل محلي

```bash
npm install
npm run dev
```

يعمل على `http://localhost:4321`

## البناء

```bash
npm run build
npm run preview  # معاينة الإنتاج محلياً
```

## هيكل المشروع

```
src/
├── layouts/        # BaseLayout, BlogPost
├── components/     # Navbar, Hero, Features, FAQ, Footer...
├── pages/          # كل صفحات الموقع
├── content/blog/   # مقالات MDX
└── styles/         # global.css
public/
├── favicon.svg
├── og-image.png
└── robots.txt
```

## إضافة مقال مدونة جديد

أنشئ ملف `.mdx` في `src/content/blog/` بهذا الشكل:

```mdx
---
title: "عنوان المقال"
description: "وصف مختصر للـ SEO"
pubDate: "2026-MM-DD"
author: "اسم الكاتب"
tags: ["تصنيف 1", "تصنيف 2"]
---

محتوى المقال هنا...
```

ثم `git add . && git commit -m "blog: إضافة مقال ..." && git push`

Vercel سينشر التحديث تلقائياً.

## التطبيق الفعلي

التطبيق على: [app.qaydalaqar.com](https://app.qaydalaqar.com)  
Repo التطبيق: [badroneai/ged](https://github.com/badroneai/ged)

---

© 2026 قيد العقار
