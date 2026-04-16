import { useState } from 'react';

const faqs = [
  {
    q: 'هل قيد العقار مناسب لمكتبي الصغير (أنا ووكيل واحد)؟',
    a: 'نعم، صُمِّم أساساً للمكاتب الصغيرة والمتوسطة. تبدأ مباشرةً بدون تدريب أو خبرة تقنية مسبقة.',
  },
  {
    q: 'كم يكلّفني استخدام النظام؟',
    a: 'الخطة الأساسية مجانية بالكامل حالياً. الخطة الاحترافية قيد التسعير وسنعلن عنها قريباً مع إشعار مسبق لجميع المستخدمين الحاليين.',
  },
  {
    q: 'هل بياناتي في أمان؟',
    a: 'نعم. البنية التحتية تعتمد Supabase مع تشفير كامل وصلاحيات RLS على مستوى الصف، ما يعني أن بيانات كل مكتب معزولة تماماً عن غيره.',
  },
  {
    q: 'هل يدعم النظام التقويم الهجري؟',
    a: 'نعم، تستطيع عرض التواريخ بالهجري أو الميلادي أو كليهما في آنٍ واحد.',
  },
  {
    q: 'هل أحتاج خبرة محاسبية لاستخدامه؟',
    a: 'لا. النظام مُصمَّم لصاحب المكتب العادي، الحقول بسيطة والواجهة عربية بالكامل — كل ما تحتاجه هو إدخال المبلغ واختيار النوع.',
  },
  {
    q: 'هل يمكنني تصدير بياناتي لاحقاً؟',
    a: 'نعم، تصدير Excel وPDF متاح في الخطة الاحترافية القادمة. وبياناتك دائماً ملكك — يمكن تصديرها في أي وقت.',
  },
  {
    q: 'هل يدعم أكثر من وكيل في المكتب؟',
    a: 'نعم، يمكنك تسجيل عدد من الوكلاء وتوزيع نسب العمولة لكل منهم بشكل مستقل وشفاف.',
  },
  {
    q: 'كيف أبدأ؟',
    a: 'اضغط "ابدأ مجاناً" في أعلى الصفحة، سجّل بالبريد الإلكتروني، وأنت جاهز خلال دقيقة. لا بيانات بطاقة مطلوبة.',
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
              className={`shrink-0 w-6 h-6 rounded-full border border-[#1f2937] flex items-center justify-center text-[#10b981] transition-transform duration-200 ${
                open === i ? 'rotate-45 bg-[#10b981]/10 border-[#10b981]/30' : ''
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
