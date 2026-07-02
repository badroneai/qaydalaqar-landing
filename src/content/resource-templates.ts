import { PUBLIC_SITE_NAME, PUBLIC_SITE_ORIGIN } from './resources';

export interface ResourceTemplateBlock {
  heading: string;
  intro?: string;
  rows: string[];
}

export interface ResourceTemplate {
  slug: string;
  title: string;
  description: string;
  category: string;
  relatedTopicSlug: string;
  updatedAt: string;
  readingTime: string;
  audience: string;
  keywords: string[];
  summary: string;
  useWhen: string[];
  blocks: ResourceTemplateBlock[];
  cautions: string[];
  relatedArticleSlugs: string[];
}

export const publicResourceTemplates: ResourceTemplate[] = [
  {
    slug: 'rent-collection-policy-template',
    title: 'قالب سياسة تحصيل إيجار للمكتب العقاري',
    description:
      'نموذج عملي يوضح متى يبدأ التواصل مع المستأجر، ماذا يسجل الفريق، ومتى تتحول المتابعة إلى تصعيد أو قرار إداري.',
    category: 'التحصيل',
    relatedTopicSlug: 'collection',
    updatedAt: '2026-07-02',
    readingTime: '٨ دقائق',
    audience: 'مديرو التحصيل وخدمة العملاء',
    keywords: ['قالب سياسة تحصيل', 'تحصيل الإيجارات', 'متابعة المستأجرين', 'متأخرات الإيجار'],
    summary:
      'استخدم هذا القالب لتوحيد طريقة التعامل مع الاستحقاقات والمتأخرات، وتقليل الرسائل المتضاربة بين أعضاء الفريق.',
    useWhen: [
      'عند وجود متأخرات تتكرر دون سجل متابعة واضح.',
      'عندما يتواصل أكثر من موظف مع نفس المستأجر.',
      'عند الحاجة إلى فصل الوعد بالدفع عن التحصيل الفعلي.',
    ],
    blocks: [
      {
        heading: 'هدف السياسة',
        rows: [
          'توحيد خطوات متابعة الإيجارات المستحقة والمتأخرة داخل المكتب.',
          'حفظ كل تواصل مهم في سجل يمكن الرجوع إليه.',
          'تقليل التصعيد غير الضروري، وتسريع التصعيد عندما يصبح مطلوباً.',
        ],
      },
      {
        heading: 'مراحل المتابعة',
        intro: 'يمكن تعديل الأيام حسب طبيعة العقود والعملاء، لكن المهم أن تبقى المراحل واضحة للفريق.',
        rows: [
          'قبل الاستحقاق: تذكير مبكر إذا كان العقد أو العميل يحتاج ذلك.',
          'يوم الاستحقاق: مراجعة السجل والتأكد هل دُفعت الدفعة أم لا.',
          '١-٧ أيام تأخير: تواصل هادئ وتسجيل الرد والخطوة التالية.',
          '٨-٣٠ يوم تأخير: متابعة بمسؤول واضح وتاريخ مراجعة قريب.',
          'أكثر من ٣٠ يوم: مراجعة سبب التأخر وتحديد قرار إداري أو تصعيد.',
        ],
      },
      {
        heading: 'ما يجب تسجيله في كل متابعة',
        rows: [
          'تاريخ التواصل وطريقته.',
          'اسم المسؤول عن المتابعة.',
          'خلاصة رد المستأجر أو المالك.',
          'الوعد بالدفع إن وجد، مع تاريخ واضح.',
          'الخطوة التالية: انتظار، تذكير، تصعيد، أو إغلاق.',
        ],
      },
      {
        heading: 'تعريف الإغلاق',
        rows: [
          'تُغلق المتابعة عند تسجيل التحصيل الفعلي.',
          'تُغلق عند تحويلها إلى قرار آخر موثق، مثل تسوية أو تصعيد.',
          'لا تُغلق لمجرد وجود وعد شفهي بالدفع.',
        ],
      },
    ],
    cautions: [
      'لا تجعل كل الحالات بنفس نبرة التواصل؛ المتأخر يوماً ليس مثل المتأخر شهرين.',
      'لا تسجل الوعد بالدفع كتحصيل.',
      'راجع أي تصعيد قانوني أو رسمي مع المختصين قبل اعتماده.',
    ],
    relatedArticleSlugs: ['rent-collection-aging-guide', 'tenant-follow-up-policy', 'real-estate-reports-for-decisions'],
  },
  {
    slug: 'owner-monthly-report-template',
    title: 'قالب تقرير المالك الشهري',
    description:
      'هيكل مختصر لتقرير شهري يشرح للمالك التحصيل، المتأخرات، المصروفات، والملاحظات التشغيلية المهمة.',
    category: 'التقارير',
    relatedTopicSlug: 'reports',
    updatedAt: '2026-07-02',
    readingTime: '٧ دقائق',
    audience: 'مديرو الأملاك والمكاتب العقارية',
    keywords: ['قالب تقرير مالك', 'تقرير عقار شهري', 'تقرير تحصيل', 'إدارة أملاك'],
    summary:
      'هذا القالب يساعد المكتب على إرسال تقرير مفهوم لا يكتفي بالأرقام، بل يشرح ماذا حدث وما الخطوة القادمة.',
    useWhen: [
      'عند إعداد تقرير دوري لمالك عقار أو محفظة عقارية.',
      'عندما يكثر سؤال المالك عن التحصيل والمتأخرات.',
      'عند الحاجة إلى توثيق قرارات الشهر القادم.',
    ],
    blocks: [
      {
        heading: 'الملخص التنفيذي',
        rows: [
          'إجمالي المحصل خلال الشهر.',
          'إجمالي المستحق خلال الشهر.',
          'إجمالي المتأخرات بنهاية الشهر.',
          'أهم ملاحظة تشغيلية تحتاج انتباه المالك.',
        ],
      },
      {
        heading: 'تفصيل التحصيل',
        rows: [
          'الدفعات المحصلة مع تاريخ كل دفعة.',
          'الدفعات الجزئية إن وجدت.',
          'الدفعات التي لم تحصل بعد وسبب التأخر إن كان معروفاً.',
          'نسبة التحصيل للفترة مع تنبيه إذا كانت النسبة تخفي ديوناً قديمة.',
        ],
      },
      {
        heading: 'المصروفات والملاحظات',
        rows: [
          'المصروفات المرتبطة بالعقار فقط.',
          'سبب المصروف إذا كان غير متكرر أو كبيراً.',
          'المستند أو الفاتورة المرتبطة عند توفرها.',
          'أي ملاحظة تشغيلية تؤثر على الشهر القادم.',
        ],
      },
      {
        heading: 'الخطوات القادمة',
        rows: [
          'متابعة المستأجرين المتأخرين.',
          'قرار مطلوب من المالك إن وجد.',
          'عقد قريب الانتهاء أو تجديد يحتاج مراجعة.',
          'مستند ناقص أو إجراء معلق.',
        ],
      },
    ],
    cautions: [
      'لا تخلط مصروفات المكتب العامة بمصروفات العقار.',
      'لا ترسل أرقاماً بلا مصدر يمكن الرجوع إليه.',
      'اجعل التقرير مختصراً بما يكفي للقراءة، ومفصلاً بما يكفي للمراجعة.',
    ],
    relatedArticleSlugs: ['property-owner-monthly-report', 'real-estate-reports-for-decisions', 'rent-collection-aging-guide'],
  },
  {
    slug: 'lease-renewal-checklist-template',
    title: 'قائمة مراجعة تجديد عقد الإيجار',
    description:
      'قائمة عملية لمراجعة العقد قبل التجديد: التحصيل، المتابعات، المستندات، جدول الاستحقاقات، وقرار التجديد.',
    category: 'عقود الإيجار',
    relatedTopicSlug: 'leases',
    updatedAt: '2026-07-02',
    readingTime: '٦ دقائق',
    audience: 'فرق العقود وإدارة الأملاك',
    keywords: ['قائمة تجديد عقد إيجار', 'تجديد الإيجار', 'إدارة عقود الإيجار', 'عقد إيجار'],
    summary:
      'استخدم هذه القائمة قبل تاريخ انتهاء العقد حتى لا يصبح التجديد قراراً متأخراً أو مبنياً على ذاكرة ناقصة.',
    useWhen: [
      'قبل انتهاء العقد بفترة كافية.',
      'عند مراجعة مستأجر لديه متأخرات أو ملاحظات متكررة.',
      'قبل إنشاء جدول استحقاقات جديد أو تعديل قيمة الإيجار.',
    ],
    blocks: [
      {
        heading: 'قبل التواصل مع المستأجر',
        rows: [
          'راجع تاريخ انتهاء العقد ومدة الإشعار المناسبة.',
          'راجع سجل التحصيل والمتأخرات.',
          'راجع المتابعات المفتوحة والملاحظات المهمة.',
          'راجع أي مستندات ناقصة أو اتفاقات جانبية موثقة.',
        ],
      },
      {
        heading: 'أثناء قرار التجديد',
        rows: [
          'حدد هل التجديد بنفس الشروط أم بشروط معدلة.',
          'وثق سبب تعديل القيمة أو مدة العقد إن وجد.',
          'حدد المسؤول عن التواصل والموعد النهائي للرد.',
          'افتح متابعة للتجديد حتى لا يضيع بين الرسائل.',
        ],
      },
      {
        heading: 'بعد الموافقة',
        rows: [
          'اربط المستند الجديد أو المحدث بسجل العقد.',
          'راجع جدول الاستحقاقات قبل اعتماده.',
          'أغلق متابعة التجديد بخلاصة واضحة.',
          'حدّث أي ملاحظة مهمة في ذاكرة المكتب.',
        ],
      },
    ],
    cautions: [
      'لا تعتمد على تاريخ الانتهاء وحده؛ راجع سياق التحصيل والمتابعات.',
      'لا تنشئ جدول استحقاقات جديداً قبل مراجعة القيم والتواريخ.',
      'إذا لم يتم التجديد، وثق الخطوة التالية بوضوح.',
    ],
    relatedArticleSlugs: ['lease-renewal-workflow', 'ejar-contract-import-review', 'real-estate-document-archive-guide'],
  },
  {
    slug: 'daily-office-opening-checklist-template',
    title: 'قائمة افتتاح يوم المكتب العقاري',
    description:
      'قائمة قصيرة لأول ٣٠ دقيقة في يوم المكتب: رادار، متأخرات، عقود، متابعات، ومستندات تحتاج إجراء.',
    category: 'تشغيل المكتب',
    relatedTopicSlug: 'operations',
    updatedAt: '2026-07-02',
    readingTime: '٥ دقائق',
    audience: 'أصحاب المكاتب ومديرو التشغيل',
    keywords: ['قائمة تشغيل يومية', 'تشغيل مكتب عقاري', 'مهام المكتب العقاري', 'رادار يومي'],
    summary:
      'هذا القالب يحول بداية اليوم من فتح رسائل عشوائية إلى مراجعة منظمة لما يحتاج انتباهاً.',
    useWhen: [
      'في بداية كل يوم عمل.',
      'عندما يشعر الفريق أن الأولويات غير واضحة.',
      'عند تسليم العمل لموظف جديد أو مسؤول مناوب.',
    ],
    blocks: [
      {
        heading: 'أول ١٠ دقائق',
        rows: [
          'راجع الدفعات المتأخرة الجديدة.',
          'راجع العقود القريبة من الانتهاء.',
          'راجع المتابعات المفتوحة بلا تحديث قريب.',
        ],
      },
      {
        heading: 'الدقائق ١٠-٢٠',
        rows: [
          'حوّل البنود المهمة إلى متابعات لها مسؤول.',
          'حدد أول ثلاث أولويات في اليوم.',
          'راجع أي مستند ينتظر موافقة أو تصنيفاً.',
        ],
      },
      {
        heading: 'الدقائق ٢٠-٣٠',
        rows: [
          'وزع المسؤوليات على الفريق.',
          'اكتب ملاحظة قصيرة عن أي سياق مهم.',
          'حدد ما يجب مراجعته قبل نهاية اليوم.',
        ],
      },
    ],
    cautions: [
      'لا تبدأ بالمحادثات قبل معرفة أولويات التشغيل.',
      'لا تترك بنداً مهماً بلا مسؤول.',
      'لا تجعل القائمة طويلة إلى درجة لا يستخدمها الفريق.',
    ],
    relatedArticleSlugs: ['daily-real-estate-office-checklist', 'real-estate-office-operating-system', 'real-estate-office-memory'],
  },
  {
    slug: 'document-archive-naming-template',
    title: 'قالب تسمية وأرشفة مستندات المكتب العقاري',
    description:
      'طريقة تسمية بسيطة للعقود والمرفقات والخطابات حتى تكون الملفات قابلة للبحث والربط بالسجلات.',
    category: 'المستندات',
    relatedTopicSlug: 'documents-memory',
    updatedAt: '2026-07-02',
    readingTime: '٦ دقائق',
    audience: 'فرق الإدارة والأرشفة',
    keywords: ['أرشفة مستندات عقارية', 'تسمية الملفات', 'حفظ العقود', 'مستندات المكتب العقاري'],
    summary:
      'استخدم القالب لتقليل ضياع الملفات بين الأجهزة والمحادثات، وربط كل مستند بسياقه التشغيلي.',
    useWhen: [
      'عند رفع عقد أو مرفق جديد.',
      'عند تنظيف مجلدات قديمة أو ملفات ممسوحة ضوئياً.',
      'عند تدريب الفريق على طريقة موحدة للأرشفة.',
    ],
    blocks: [
      {
        heading: 'صيغة التسمية المقترحة',
        rows: [
          'نوع المستند - اسم العقار أو الوحدة - الطرف المرتبط - التاريخ.',
          'مثال: عقد إيجار - عمارة السلام شقة ٤ - أحمد محمد - 2026-07-02.',
          'مثال: إثبات دفع - فيلا النخيل - خالد عبدالله - 2026-07-02.',
        ],
      },
      {
        heading: 'تصنيفات البداية',
        rows: [
          'عقود.',
          'إثباتات دفع.',
          'خطابات ومراسلات.',
          'مرفقات تشغيلية.',
          'مستندات مكتب.',
        ],
      },
      {
        heading: 'ما يجب ربطه داخل السجل',
        rows: [
          'العقار أو الوحدة إن وجد.',
          'العقد المرتبط إن وجد.',
          'العميل أو المستأجر المرتبط.',
          'نوع المستند وحالة المراجعة.',
        ],
      },
    ],
    cautions: [
      'لا تعتمد على اسم الملف وحده؛ اربطه بالسجل الصحيح.',
      'لا تستخدم أسماء عامة مثل scan أو final.',
      'راجع الصلاحيات قبل جعل المستند متاحاً لكل الفريق.',
    ],
    relatedArticleSlugs: ['real-estate-document-archive-guide', 'real-estate-office-memory', 'ejar-contract-import-review'],
  },
  {
    slug: 'office-expense-monthly-review-template',
    title: 'قالب مراجعة مصروفات المكتب الشهرية',
    description:
      'قائمة مراجعة شهرية تساعد صاحب المكتب على فهم المصروفات والالتزامات المتكررة دون خلطها بحركة العقارات.',
    category: 'دفتر المكتب',
    relatedTopicSlug: 'office-ledger',
    updatedAt: '2026-07-02',
    readingTime: '٦ دقائق',
    audience: 'أصحاب المكاتب والمحاسبون',
    keywords: ['مصروفات المكتب العقاري', 'دفتر المكتب', 'مراجعة مصروفات', 'التزامات المكتب'],
    summary:
      'استخدم القالب في نهاية كل شهر لمراجعة تكلفة تشغيل المكتب، وكشف البنود المتكررة أو غير المصنفة.',
    useWhen: [
      'في نهاية الشهر قبل إغلاق التقارير الداخلية.',
      'عند ارتفاع مصروفات المكتب دون تفسير واضح.',
      'عند فرز المصروفات المكتبية عن مصروفات العقارات.',
    ],
    blocks: [
      {
        heading: 'مراجعة التصنيفات',
        rows: [
          'رواتب ومكافآت.',
          'إيجار المكتب أو تكاليف المقر.',
          'اشتراكات وأنظمة.',
          'تسويق ومبيعات.',
          'خدمات ومصاريف تشغيلية.',
          'مصروفات أخرى تحتاج إعادة تصنيف.',
        ],
      },
      {
        heading: 'مراجعة الالتزامات',
        rows: [
          'اشتراكات قادمة خلال ٣٠ يوماً.',
          'فواتير خدمات لم تسدد بعد.',
          'التزامات دورية لا تظهر داخل عقود الإيجار.',
          'أي بند متكرر يحتاج ميزانية شهرية ثابتة.',
        ],
      },
      {
        heading: 'أسئلة الإغلاق الشهري',
        rows: [
          'هل توجد مصروفات مكتب خُلطت بمصروف عقار؟',
          'هل خانة أخرى تحتوي بنوداً كثيرة؟',
          'هل يوجد التزام قادم يحتاج تنبيهاً؟',
          'هل تغيرت تكلفة التشغيل عن الشهر السابق؟ ولماذا؟',
        ],
      },
    ],
    cautions: [
      'لا تجعل بند أخرى مخزناً دائماً للمصروفات غير المفهومة.',
      'لا تخلط تكلفة تشغيل المكتب بأداء عقار محدد.',
      'راجع التصنيفات دورياً بدلاً من انتظار نهاية السنة.',
    ],
    relatedArticleSlugs: ['office-expense-categories-guide', 'office-ledger-vs-property-ledger'],
  },
];

export function templateUrl(template: ResourceTemplate): string {
  return `/resources/templates/${template.slug}`;
}

export function findResourceTemplate(slug: string | undefined): ResourceTemplate | undefined {
  return publicResourceTemplates.find((template) => template.slug === slug);
}

export function templatesForTopicSlug(topicSlug: string): ResourceTemplate[] {
  return publicResourceTemplates.filter((template) => template.relatedTopicSlug === topicSlug);
}

export function templatesIndexJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `قوالب عملية من ${PUBLIC_SITE_NAME}`,
      description: 'قوالب تشغيلية قابلة للتطبيق للمكاتب العقارية في التحصيل والعقود والتقارير والمستندات.',
      inLanguage: 'ar-SA',
      url: `${PUBLIC_SITE_ORIGIN}/resources/templates`,
      hasPart: publicResourceTemplates.map((template) => ({
        '@type': 'CreativeWork',
        name: template.title,
        description: template.description,
        url: `${PUBLIC_SITE_ORIGIN}${templateUrl(template)}`,
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
          name: 'القوالب العملية',
          item: `${PUBLIC_SITE_ORIGIN}/resources/templates`,
        },
      ],
    },
  ];
}

export function templateJsonLd(template: ResourceTemplate) {
  const url = `${PUBLIC_SITE_ORIGIN}${templateUrl(template)}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: template.title,
      description: template.description,
      inLanguage: 'ar-SA',
      datePublished: template.updatedAt,
      dateModified: template.updatedAt,
      url,
      audience: {
        '@type': 'Audience',
        audienceType: template.audience,
      },
      publisher: {
        '@type': 'Organization',
        name: PUBLIC_SITE_NAME,
        url: PUBLIC_SITE_ORIGIN,
      },
      keywords: template.keywords.join(', '),
      hasPart: template.blocks.map((block) => ({
        '@type': 'CreativeWork',
        name: block.heading,
        text: block.rows.join(' | '),
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
          name: 'القوالب العملية',
          item: `${PUBLIC_SITE_ORIGIN}/resources/templates`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: template.title,
          item: url,
        },
      ],
    },
  ];
}
