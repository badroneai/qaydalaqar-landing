import {
  articleUrl,
  PUBLIC_SITE_NAME,
  PUBLIC_SITE_ORIGIN,
  type PublicResourceArticle,
} from './resources';
import type { GlossaryTerm } from './glossary';

export interface ResourceTopic {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  articleCategories: string[];
  glossaryCategories: string[];
  primaryQuestion: string;
  intro: string;
  whatYouLearn: string[];
  checklist: string[];
}

export const resourceTopics: ResourceTopic[] = [
  {
    slug: 'operations',
    title: 'تشغيل المكتب العقاري اليومي',
    eyebrow: 'مسار التشغيل',
    description:
      'مسار يجمع الرادار اليومي، المتابعات، وذاكرة المكتب لتحويل يوم العمل إلى دورة واضحة قابلة للإغلاق.',
    articleCategories: ['تشغيل المكتب', 'الذاكرة والمتابعات'],
    glossaryCategories: ['تشغيل المكتب', 'الذاكرة'],
    primaryQuestion: 'كيف يبدأ المكتب العقاري يومه دون تشتت بين الرسائل والدفاتر؟',
    intro:
      'هذا المسار مناسب لصاحب المكتب أو مدير التشغيل الذي يريد تحويل الإشارات اليومية إلى متابعات ومسؤوليات واضحة، لا مجرد تذكيرات عابرة.',
    whatYouLearn: [
      'كيف تبدأ اليوم من الرادار لا من الضجيج.',
      'متى تتحول الإشارة إلى متابعة لها حالة ومسؤول.',
      'كيف تحفظ الذاكرة التشغيلية بحيث لا تضيع بين الموظفين.',
    ],
    checklist: [
      'راجع الدفعات المتأخرة والعقود القريبة من الانتهاء في بداية اليوم.',
      'حوّل كل بند مهم إلى متابعة قابلة للإغلاق.',
      'سجل الملاحظات التي تؤثر على قرار أو تواصل لاحق.',
    ],
  },
  {
    slug: 'collection',
    title: 'التحصيل والمتأخرات في المكتب العقاري',
    eyebrow: 'مسار التحصيل',
    description:
      'مسار عملي لفهم الاستحقاقات، أعمار الديون، نسبة التحصيل، وربط التقرير بفعل يومي واضح.',
    articleCategories: ['التحصيل والتقارير', 'التقارير'],
    glossaryCategories: ['التحصيل', 'التقارير'],
    primaryQuestion: 'كيف يعرف المكتب أين يبدأ التحصيل وما المتأخرات الأخطر؟',
    intro:
      'التحصيل لا ينجح بمجرد معرفة الرقم الإجمالي. يحتاج المكتب إلى فهم عمر الدين، حالة المتابعة، والفرق بين الاستحقاق والتحصيل الفعلي.',
    whatYouLearn: [
      'لماذا لا يكفي رقم المتأخرات الإجمالي وحده.',
      'كيف تقرأ شرائح ١-٣٠ و٣١-٦٠ و٦١-٩٠ يوماً.',
      'كيف تربط تقرير التحصيل بمتابعة أو قرار.',
    ],
    checklist: [
      'افصل المستحق عن المحصل فعلاً في التقارير.',
      'رتب المتأخرات حسب العمر قبل الاتصال العشوائي.',
      'عامل الوعد بالدفع كمتابعة حتى يدخل المبلغ في السجل.',
    ],
  },
  {
    slug: 'leases',
    title: 'عقود الإيجار والاستحقاقات',
    eyebrow: 'مسار العقود',
    description:
      'مسار يشرح إدخال عقد الإيجار، مراجعة جدول الاستحقاقات، وتجديد العقد قبل أن يتحول إلى أزمة تشغيلية.',
    articleCategories: ['عقود الإيجار'],
    glossaryCategories: ['عقود الإيجار'],
    primaryQuestion: 'كيف يبقى العقد مصدراً صحيحاً للتحصيل والتقارير؟',
    intro:
      'العقد ليس ملفاً محفوظاً فقط. هو نقطة بداية لجدول الاستحقاقات، المتابعة، الأرشفة، وقرار التجديد عند نهاية المدة.',
    whatYouLearn: [
      'كيف تستخدم عقد PDF كمصدر بداية مع مراجعة بشرية.',
      'ما الحقول التي تؤثر مباشرة على جدول الاستحقاقات.',
      'كيف تبدأ التجديد مبكراً بسجل واضح.',
    ],
    checklist: [
      'راجع تاريخ البداية والنهاية وقيمة الإيجار قبل الاعتماد.',
      'اربط ملف المصدر بالعقد حتى يمكن الرجوع إليه.',
      'افتح متابعة للتجديد قبل تاريخ الانتهاء بوقت كاف.',
    ],
  },
  {
    slug: 'office-ledger',
    title: 'دفتر المكتب والمصروفات',
    eyebrow: 'مسار دفتر المكتب',
    description:
      'مسار يوضح الفرق بين مصروفات المكتب وحركة العقارات، وكيف تصنف الالتزامات دون تعقيد محاسبي زائد.',
    articleCategories: ['دفتر المكتب'],
    glossaryCategories: ['دفتر المكتب'],
    primaryQuestion: 'كيف يعرف صاحب المكتب تكلفة تشغيله دون خلطها بحركة العقارات؟',
    intro:
      'دفتر المكتب طبقة تشغيلية مستقلة تساعدك على قراءة مصروفات المكتب والتزاماته بعيداً عن تحصيل الإيجارات ومصاريف العقار.',
    whatYouLearn: [
      'متى يكون البند مكتبياً لا مرتبطاً بعقار.',
      'كيف تبدأ بتصنيفات مصروفات بسيطة قابلة للاستخدام.',
      'لماذا يجب التفريق بين المصروف والالتزام.',
    ],
    checklist: [
      'افصل مصروف المكتب العام عن مصروف العقار المحدد.',
      'ابدأ بتصنيفات قليلة ثم راجعها شهرياً.',
      'تابع الالتزامات المتكررة قبل أن تتحول إلى مفاجآت نقدية.',
    ],
  },
  {
    slug: 'documents-memory',
    title: 'المستندات وذاكرة المكتب',
    eyebrow: 'مسار المعرفة الداخلية',
    description:
      'مسار لبناء أرشيف مستندات وذاكرة تشغيلية تحفظ السياق المهم وتجعله قابلاً للبحث والرجوع.',
    articleCategories: ['المستندات', 'الذاكرة والمتابعات'],
    glossaryCategories: ['المستندات', 'الذاكرة'],
    primaryQuestion: 'كيف يمنع المكتب ضياع الملفات والمعرفة بين الأجهزة والأشخاص؟',
    intro:
      'المستند والذاكرة يخدمان نفس الهدف: أن يستطيع الفريق الرجوع إلى أصل المعلومة وسياقها دون الاعتماد على محادثة قديمة أو شخص واحد.',
    whatYouLearn: [
      'كيف تربط المستند بسياقه التشغيلي لا باسم ملف فقط.',
      'ما الملاحظات التي تستحق الحفظ داخل ذاكرة المكتب.',
      'كيف توازن بين المشاركة والصلاحيات.',
    ],
    checklist: [
      'صنف المستندات بطريقة يفهمها الفريق يومياً.',
      'اربط ملف المصدر بالعقار أو العقد أو المتابعة المناسبة.',
      'اجعل الملاحظات قصيرة ومفيدة للقرار القادم.',
    ],
  },
  {
    slug: 'reports',
    title: 'التقارير وقرارات المالك',
    eyebrow: 'مسار التقارير',
    description:
      'مسار يساعد المكتب على بناء تقارير مفهومة للمالك والمدير: تحصيل، تدفق نقدي، متأخرات، وخطوات قادمة.',
    articleCategories: ['التقارير', 'التحصيل والتقارير'],
    glossaryCategories: ['التقارير', 'التحصيل'],
    primaryQuestion: 'كيف يتحول التقرير من أرقام كثيرة إلى قرار واضح؟',
    intro:
      'التقرير الجيد يبدأ من السؤال الإداري. هل نريد فهم النقد الداخل، جودة التحصيل، حالة العقار، أم القرار القادم المطلوب؟',
    whatYouLearn: [
      'كيف تفصل بين التدفق النقدي والاستحقاقات.',
      'ما الذي يجب أن يحتويه تقرير المالك الشهري.',
      'كيف تعرض المتأخرات والملاحظات كخطوات عمل لا كأرقام فقط.',
    ],
    checklist: [
      'ابدأ التقرير بملخص تنفيذي قصير.',
      'اعرض المحصل والمستحق والمتأخر والمصروفات بوضوح.',
      'اختم بخطوات قادمة مرتبطة بسجل أو متابعة.',
    ],
  },
];

export function topicUrl(topic: ResourceTopic): string {
  return `/resources/topics/${topic.slug}`;
}

export function findResourceTopic(slug: string | undefined): ResourceTopic | undefined {
  return resourceTopics.find((topic) => topic.slug === slug);
}

export function articlesForTopic(
  topic: ResourceTopic,
  articles: PublicResourceArticle[],
): PublicResourceArticle[] {
  return articles.filter((article) => topic.articleCategories.includes(article.category));
}

export function termsForTopic(topic: ResourceTopic, terms: GlossaryTerm[]): GlossaryTerm[] {
  return terms.filter((term) => topic.glossaryCategories.includes(term.category));
}

export function topicJsonLd(
  topic: ResourceTopic,
  articles: PublicResourceArticle[],
  terms: GlossaryTerm[],
) {
  const url = `${PUBLIC_SITE_ORIGIN}${topicUrl(topic)}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${topic.title} | ${PUBLIC_SITE_NAME}`,
      description: topic.description,
      inLanguage: 'ar-SA',
      url,
      about: topic.primaryQuestion,
      hasPart: articles.map((article) => ({
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        url: `${PUBLIC_SITE_ORIGIN}${articleUrl(article)}`,
      })),
      mentions: terms.map((term) => ({
        '@type': 'DefinedTerm',
        name: term.term,
        description: term.summary,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: PUBLIC_SITE_ORIGIN,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'مركز المعرفة',
          item: `${PUBLIC_SITE_ORIGIN}/resources`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: topic.title,
          item: url,
        },
      ],
    },
  ];
}
