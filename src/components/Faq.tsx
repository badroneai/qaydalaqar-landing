import { useState } from 'react';

const faqs = [
  {
    q: 'هل قيد العقار مناسب لمكتبي الصغير؟',
    a: 'نعم، صُمِّم أساساً للمكاتب الصغيرة والمتوسطة التي تدير عقارات ووحدات وعقود إيجار. الواجهة عربية بالكامل ومبنية حول يوم المكتب الفعلي.',
  },
  {
    q: 'كم يكلّفني استخدام النظام؟',
    a: 'لا يجري تحصيل رسوم داخل المنتج حالياً. هذا وضع تجريبي وليس تسعيراً نهائياً، وأي سعر مستقبلي سيُعرض بوضوح قبل أي التزام.',
  },
  {
    q: 'كيف أبدأ؟',
    a: 'اضغط «جرّب النسخة الحالية»، وسجّل بالبريد الإلكتروني. التسجيل التجريبي مباشر حالياً ولا يمر عبر بوابة قبول.',
  },
  {
    q: 'هل بياناتي في أمان؟',
    a: 'يستخدم النظام اتصالاً مشفراً وسياسات وصول على مستوى قاعدة البيانات لعزل بيانات كل مؤسسة عن غيرها، وتبقى بيانات المكتب متاحة لأعضائه بحسب أدوارهم وصلاحياتهم.',
  },
  {
    q: 'هل يدعم النظام التقويم الهجري؟',
    a: 'نعم، النظام يدعم التقويم الهجري إلى جانب الميلادي كما تعمل المكاتب فعلاً في السوق السعودي.',
  },
  {
    q: 'عندي عقود على منصة إيجار — هل أعيد إدخالها يدوياً؟',
    a: 'لا. ارفع ملف العقد (PDF) وسيستخرج النظام بياناته الأساسية ويعرضها عليك للمراجعة، وعند تأكيدك يُنشأ العقد وجدول استحقاقاته تلقائياً. هذا استيراد ملف بمراجعتك، وليس ربطاً آلياً بمنصة إيجار.',
  },
  {
    q: 'هل أحتاج خبرة محاسبية لاستخدامه؟',
    a: 'لا. النظام مُصمَّم لصاحب المكتب لا للمحاسب: رادار يرتب أولوياتك، ومتابعات واضحة، وتسجيل دفعات مباشر من داخل المتابعة.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-[#1f2937] bg-[#0f1729] overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-right gap-4 hover:bg-[#111c32] transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-white text-base">{faq.q}</span>
            <span
              className={`shrink-0 w-6 h-6 rounded-full border border-[#1f2937] flex items-center justify-center text-[#C5CCD9] transition-transform duration-200 ${
                open === i ? 'rotate-45 bg-[#C5CCD9]/10 border-[#C5CCD9]/30' : ''
              }`}
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-[#94a3b8] text-sm leading-relaxed border-t border-[#1f2937] pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
