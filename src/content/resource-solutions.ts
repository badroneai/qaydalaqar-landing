import { PUBLIC_SITE_NAME, PUBLIC_SITE_ORIGIN } from './resources';

export interface SolutionPage {
  slug: string;
  title: string;
  description: string;
  audience: string;
  updatedAt: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  checklist: string[];
  relatedArticleSlugs: string[];
  cta: {
    title: string;
    body: string;
    href: string;
    label: string;
  };
}

export const solutionPages: SolutionPage[] = [
  {
    slug: 'real-estate-office-software-saudi-arabia',
    title: 'برنامج إدارة مكتب عقاري في السعودية',
    description:
      'ما الذي يجب أن تبحث عنه في برنامج إدارة مكتب عقاري: العقارات، العقود، التحصيل، المستندات، التقارير، واللغة المناسبة للفريق.',
    audience: 'أصحاب المكاتب الباحثون عن نظام عمل بدلاً من الملفات المتفرقة',
    updatedAt: '2026-07-02',
    sections: [
      {
        heading: 'لا تبحث عن شاشة جميلة فقط',
        body: [
          'برنامج إدارة المكتب العقاري يجب أن يحل دورة العمل اليومية: ما الذي يحتاج انتباهاً، من المسؤول عنه، وما السجل الذي يثبت القرار.',
          'إذا كان البرنامج يحفظ بيانات فقط ولا يساعد على المتابعة والتحصيل والتقارير، فسيصبح ملفاً آخر بجانب الملفات القديمة.',
        ],
      },
      {
        heading: 'المكونات الأساسية',
        body: [
          'ابدأ بالعقارات والوحدات والعملاء والعقود وجدول الاستحقاقات. هذه هي البنية التي تبنى عليها المتابعات والتقارير.',
          'بعد ذلك تأتي المستندات ودفتر المكتب والتقارير. البرنامج الجيد يربط هذه العناصر بدلاً من تركها كجزر منفصلة.',
        ],
      },
      {
        heading: 'لماذا اللغة والسياق مهمان؟',
        body: [
          'الفريق الذي يعمل بالعربية يحتاج مصطلحات قريبة من يومه: رادار، متابعات، تحصيل، دفتر مكتب، عقود، مستندات.',
          'عندما تكون اللغة قريبة من طريقة العمل، يقل التدريب وتزيد فرصة الالتزام اليومي.',
        ],
      },
    ],
    checklist: [
      'هل يربط العقد بجدول الاستحقاقات؟',
      'هل يفرق بين المستحق والمحصل والمتأخر؟',
      'هل يحفظ المستندات داخل سياقها؟',
      'هل يقدم تقريراً مفهوماً للمالك أو المدير؟',
      'هل يعمل كدورة تشغيل يومية لا كأرشيف بيانات فقط؟',
    ],
    relatedArticleSlugs: [
      'real-estate-office-management-saudi-arabia-guide',
      'rent-collection-arrears-complete-guide',
      'lease-contracts-obligations-complete-guide',
    ],
    cta: {
      title: `جرّب ${PUBLIC_SITE_NAME} كمكتب عمل يومي`,
      body: 'ابدأ من الرادار والعقود والتحصيل والمستندات في مساحة عربية واحدة مصممة للمكتب العقاري.',
      href: 'https://app.qaydalaqar.com/auth/signup',
      label: 'أنشئ حساب مكتبك',
    },
  },
  {
    slug: 'excel-alternative-for-real-estate-offices',
    title: 'بديل الإكسل للمكاتب العقارية',
    description:
      'متى يصبح الإكسل غير كافٍ لإدارة المكتب العقاري، وما البديل العملي عندما تتكرر المتابعات والمتأخرات والمستندات.',
    audience: 'مكاتب بدأت بملفات إكسل وتحتاج نظاماً أوضح',
    updatedAt: '2026-07-02',
    sections: [
      {
        heading: 'الإكسل جيد للبداية وليس لدورة التشغيل كاملة',
        body: [
          'يمكن للإكسل أن يحفظ قوائم العقارات أو الدفعات، لكنه لا يحفظ السياق بسهولة: من تابع؟ ماذا قال العميل؟ وما المستند المرتبط؟',
          'عندما تزيد العقود والمتأخرات، يصبح الملف معرضاً للتكرار والنسيان وصعوبة معرفة آخر تحديث.',
        ],
      },
      {
        heading: 'علامات أن الوقت حان للتغيير',
        body: [
          'إذا أصبح الفريق يسأل عن نفس المعلومة في أكثر من مكان، أو إذا ضاعت الوعود بين الرسائل، فالمشكلة لم تعد في تنسيق الملف.',
          'وإذا كان تقرير المالك يحتاج جمعاً يدوياً من عدة ملفات، فأنت تحتاج نظاماً يربط الدفعات بالعقود والمستندات.',
        ],
      },
      {
        heading: 'ما البديل العملي؟',
        body: [
          'البديل ليس بالضرورة نظاماً معقداً. المهم أن تكون العقود والاستحقاقات والتحصيل والمتابعات في سجل واحد.',
          'ابدأ بنقل الدورة الحرجة أولاً: العقود النشطة، المتأخرات، المتابعات، والمستندات المهمة.',
        ],
      },
    ],
    checklist: [
      'هل تعرف آخر متابعة لكل متأخر دون الرجوع للرسائل؟',
      'هل يمكن استخراج تقرير مالك دون تجميع يدوي طويل؟',
      'هل كل دفعة مرتبطة بعقد واستحقاق؟',
      'هل المستندات محفوظة داخل سياقها؟',
    ],
    relatedArticleSlugs: [
      'real-estate-office-management-saudi-arabia-guide',
      'real-estate-office-operating-system',
      'real-estate-document-archive-guide',
    ],
    cta: {
      title: 'انتقل من الملف إلى دورة عمل',
      body: 'قيد العقار يساعدك على تحويل العقود والتحصيل والمتابعات من جداول متفرقة إلى سجل تشغيلي واحد.',
      href: 'https://app.qaydalaqar.com/auth/signup',
      label: 'ابدأ بدون ملف جديد',
    },
  },
  {
    slug: 'small-real-estate-office-management',
    title: 'أفضل طريقة لإدارة مكتب عقاري صغير',
    description:
      'طريقة عملية لمكتب عقاري صغير يريد تنظيم العقود والتحصيل والمستندات دون تعقيد إداري أو محاسبي زائد.',
    audience: 'أصحاب المكاتب الصغيرة أو الفرق المحدودة',
    updatedAt: '2026-07-02',
    sections: [
      {
        heading: 'المكتب الصغير يحتاج وضوحاً لا تعقيداً',
        body: [
          'ليس المطلوب بناء نظام كبير من اليوم الأول. المطلوب أن يعرف صاحب المكتب ما المستحق اليوم، ما المتأخر، وما العقد أو المستند الذي يحتاج إجراء.',
          'كلما كانت القاعدة اليومية بسيطة، زادت فرصة استخدامها بانتظام.',
        ],
      },
      {
        heading: 'ابدأ بخمس عادات',
        body: [
          'راجع الرادار صباحاً، حوّل البنود المهمة إلى متابعات، اربط التحصيل بالعقد، احفظ المستند بسياقه، وراجع تقريراً مختصراً نهاية الشهر.',
          'هذه العادات أهم من أي تصنيف متقدم لا يستخدمه الفريق.',
        ],
      },
      {
        heading: 'ما الذي تؤجله؟',
        body: [
          'يمكن تأجيل التعقيدات المحاسبية والتقسيمات الكثيرة حتى تظهر الحاجة الفعلية.',
          'لكن لا تؤجل ضبط العقود والاستحقاقات والمتأخرات؛ هذه هي الأعمدة التي ستكبر مع المكتب.',
        ],
      },
    ],
    checklist: [
      'ابدأ اليوم من الرادار لا من الرسائل.',
      'اجعل لكل متابعة مسؤولاً وحالة.',
      'سجل التحصيل وقت حدوثه.',
      'افصل مصروف المكتب عن مصروف العقار.',
      'راجع نهاية الشهر بتقرير واحد واضح.',
    ],
    relatedArticleSlugs: [
      'daily-real-estate-office-checklist',
      'office-ledger-vs-property-ledger',
      'property-owner-monthly-report',
    ],
    cta: {
      title: 'ابدأ صغيراً لكن بسجل صحيح',
      body: 'استخدم قيد العقار لترتيب أساسيات المكتب الصغير: عقود، تحصيل، متابعات، مستندات، وتقارير.',
      href: 'https://app.qaydalaqar.com/auth/signup',
      label: 'أنشئ حساب مكتبك',
    },
  },
];

export function solutionUrl(page: SolutionPage): string {
  return `/resources/solutions/${page.slug}`;
}

export function solutionJsonLd(page: SolutionPage) {
  const url = `${PUBLIC_SITE_ORIGIN}${solutionUrl(page)}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      inLanguage: 'ar-SA',
      url,
      dateModified: page.updatedAt,
      publisher: {
        '@type': 'Organization',
        name: PUBLIC_SITE_NAME,
        url: PUBLIC_SITE_ORIGIN,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: PUBLIC_SITE_ORIGIN },
        { '@type': 'ListItem', position: 2, name: 'مركز المعرفة', item: `${PUBLIC_SITE_ORIGIN}/resources` },
        { '@type': 'ListItem', position: 3, name: page.title, item: url },
      ],
    },
  ];
}
