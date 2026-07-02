import { articleUrl, PUBLIC_SITE_ORIGIN, type PublicResourceArticle } from './resources';

export interface GlossaryTerm {
  term: string;
  category: string;
  summary: string;
  officeUse: string;
  relatedSlug?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'الرادار اليومي',
    category: 'تشغيل المكتب',
    summary: 'قائمة انتباه يومية تعرض ما يحتاج قراراً أو متابعة: دفعات متأخرة، عقود قريبة الانتهاء، أو فجوات تشغيلية.',
    officeUse: 'يستخدمه المدير في بداية اليوم لترتيب الأولويات قبل فتح الرسائل والملفات المتفرقة.',
    relatedSlug: 'real-estate-office-operating-system',
  },
  {
    term: 'المتابعة',
    category: 'تشغيل المكتب',
    summary: 'سجل عمل له حالة ومسؤول ومصدر، يربط الإشارة التشغيلية بالفعل المطلوب حتى الإغلاق.',
    officeUse: 'تحول الدفعة المتأخرة أو الملاحظة أو طلب العميل إلى إجراء واضح لا يعتمد على ذاكرة شخص واحد.',
    relatedSlug: 'tenant-follow-up-policy',
  },
  {
    term: 'أعمار الديون',
    category: 'التحصيل',
    summary: 'تقسيم المتأخرات حسب مدة التأخر، مثل ١-٣٠ و٣١-٦٠ و٦١-٩٠ يوماً.',
    officeUse: 'يساعد المكتب على معرفة أين يبدأ التحصيل، وما الذي يحتاج تصعيداً أو مراجعة عقد.',
    relatedSlug: 'rent-collection-aging-guide',
  },
  {
    term: 'الاستحقاق',
    category: 'التحصيل',
    summary: 'المبلغ المتوقع دفعه في تاريخ محدد وفق العقد أو جدول الدفعات.',
    officeUse: 'يفصل بين ما يجب أن يُدفع وما دُفع فعلاً، وهذا أساس تقارير التحصيل.',
    relatedSlug: 'real-estate-reports-for-decisions',
  },
  {
    term: 'التحصيل',
    category: 'التحصيل',
    summary: 'تسجيل الدفعة الفعلية التي دخلت للمكتب أو حساب المالك، وربطها بالاستحقاق الصحيح.',
    officeUse: 'يمنع بقاء المبلغ مجرد وعد أو رسالة، ويجعل التقرير المالي قابلاً للمراجعة.',
    relatedSlug: 'rent-collection-aging-guide',
  },
  {
    term: 'دفتر المكتب',
    category: 'دفتر المكتب',
    summary: 'دفتر مستقل لإيرادات ومصروفات والتزامات المكتب كجهة تشغيل، لا للعقار نفسه.',
    officeUse: 'يفصل رواتب المكتب واشتراكاته ومصروفاته عن حركة الإيجارات والعقارات.',
    relatedSlug: 'office-ledger-vs-property-ledger',
  },
  {
    term: 'مصروف مكتبي',
    category: 'دفتر المكتب',
    summary: 'مصروف يخدم المكتب عموماً ولا يرتبط بعقار أو وحدة بعينها.',
    officeUse: 'يساعد على قراءة تكلفة تشغيل المكتب دون خلطها بمصاريف العقارات.',
    relatedSlug: 'office-expense-categories-guide',
  },
  {
    term: 'التزام مكتبي',
    category: 'دفتر المكتب',
    summary: 'مبلغ متكرر أو مؤجل على المكتب نفسه مثل اشتراك أو خدمة أو دفعة تشغيلية.',
    officeUse: 'يمنع نسيان مصروفات المكتب الدورية التي لا تظهر داخل عقود الإيجار.',
    relatedSlug: 'office-expense-categories-guide',
  },
  {
    term: 'عقد إيجار PDF',
    category: 'عقود الإيجار',
    summary: 'ملف عقد يمكن استخدامه كمصدر بداية لاستخراج بيانات أساسية قبل المراجعة البشرية.',
    officeUse: 'يقلل الإدخال اليدوي مع إبقاء مسؤولية التأكيد والمراجعة على المستخدم.',
    relatedSlug: 'ejar-contract-import-review',
  },
  {
    term: 'جدول الاستحقاقات',
    category: 'عقود الإيجار',
    summary: 'قائمة الدفعات المتوقعة للعقد، بتواريخها ومبالغها وحالتها.',
    officeUse: 'هو الرابط بين العقد والتحصيل والتقارير، وأي خطأ فيه يظهر في بقية الدورة.',
    relatedSlug: 'ejar-contract-import-review',
  },
  {
    term: 'تجديد العقد',
    category: 'عقود الإيجار',
    summary: 'قرار تشغيلي قبل انتهاء العقد: تمديد، تعديل، أو إنهاء وفق سياق المستأجر والعقار.',
    officeUse: 'ينبغي أن يبدأ قبل تاريخ الانتهاء بفترة كافية حتى لا يتحول إلى مفاجأة تشغيلية.',
    relatedSlug: 'lease-renewal-workflow',
  },
  {
    term: 'ملف المصدر',
    category: 'المستندات',
    summary: 'المستند الأصلي الذي جاءت منه بيانات العقد أو الملاحظة أو الإجراء.',
    officeUse: 'يحمي المكتب عند المراجعة أو النزاع لأن السجل يعود إلى مستند واضح.',
    relatedSlug: 'real-estate-document-archive-guide',
  },
  {
    term: 'أرشيف المستندات',
    category: 'المستندات',
    summary: 'تنظيم ملفات العقود والخطابات والمرفقات بحيث تكون قابلة للبحث والرجوع.',
    officeUse: 'يقلل ضياع الملفات بين الأجهزة والمحادثات، ويربط المستند بسياقه التشغيلي.',
    relatedSlug: 'real-estate-document-archive-guide',
  },
  {
    term: 'ذاكرة المكتب',
    category: 'الذاكرة',
    summary: 'سجل معرفة تشغيلية يحفظ الملاحظات والسياقات المهمة عن العملاء والعقارات والمتابعات.',
    officeUse: 'ينقل المعرفة من ذاكرة الأفراد إلى أصل تشغيلي داخل المكتب.',
    relatedSlug: 'real-estate-office-memory',
  },
  {
    term: 'ملاحظة مشتركة',
    category: 'الذاكرة',
    summary: 'ملاحظة يمكن للفريق الاستفادة منها لأنها تؤثر على خدمة العميل أو متابعة العقار.',
    officeUse: 'تستخدم عند وجود سياق يجب أن يعرفه أكثر من موظف، مثل تفضيل تواصل أو إجراء خاص.',
    relatedSlug: 'real-estate-office-memory',
  },
  {
    term: 'تقرير التدفق النقدي',
    category: 'التقارير',
    summary: 'تقرير يوضح النقد الداخل والخارج فعلياً خلال فترة محددة.',
    officeUse: 'يساعد المالك أو المدير على فهم السيولة الفعلية لا مجرد الاستحقاقات المتوقعة.',
    relatedSlug: 'real-estate-reports-for-decisions',
  },
  {
    term: 'نسبة التحصيل',
    category: 'التقارير',
    summary: 'مؤشر يقارن المبالغ المحصلة بالمبالغ المستحقة خلال فترة أو نطاق معين.',
    officeUse: 'يحتاج قراءة مع أعمار الديون حتى لا تخفي النسبة الجيدة ديوناً قديمة.',
    relatedSlug: 'real-estate-reports-for-decisions',
  },
  {
    term: 'تقرير المالك الشهري',
    category: 'التقارير',
    summary: 'ملخص دوري يشرح للمالك ما حدث في العقار: تحصيل، مصروفات، متأخرات، وملاحظات مهمة.',
    officeUse: 'يجعل التواصل مع المالك مبنياً على سجل واضح بدلاً من رسائل متفرقة.',
    relatedSlug: 'property-owner-monthly-report',
  },
];

export function glossaryJsonLd(articles: PublicResourceArticle[]) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'قاموس قيد العقار التشغيلي',
      inLanguage: 'ar-SA',
      url: `${PUBLIC_SITE_ORIGIN}/resources/terms`,
      hasDefinedTerm: glossaryTerms.map((item) => ({
        '@type': 'DefinedTerm',
        name: item.term,
        description: item.summary,
        inDefinedTermSet: `${PUBLIC_SITE_ORIGIN}/resources/terms`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'مصطلحات مرتبطة بأدلة قيد العقار',
      itemListElement: glossaryTerms
        .filter((item) => item.relatedSlug)
        .map((item, index) => {
          const article = articles.find((candidate) => candidate.slug === item.relatedSlug);
          return {
            '@type': 'ListItem',
            position: index + 1,
            name: item.term,
            url: article ? `${PUBLIC_SITE_ORIGIN}${articleUrl(article)}` : `${PUBLIC_SITE_ORIGIN}/resources/terms`,
          };
        }),
    },
  ];
}
