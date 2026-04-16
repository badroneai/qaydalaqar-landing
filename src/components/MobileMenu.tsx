import { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        aria-expanded={open}
        className="p-2 text-gray-300 hover:text-white transition-colors"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 inset-x-0 bg-[#0f1729] border-b border-[#1f2937] shadow-xl z-40">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#111c32] rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-[#1f2937]" />
            <a
              href="https://app.qaydalaqar.com/auth/login"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#111c32] rounded-lg transition-colors text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              تسجيل الدخول
            </a>
            <a
              href="https://app.qaydalaqar.com/auth/signup"
              className="block px-4 py-3 bg-[#10b981] hover:bg-[#059669] text-white rounded-lg transition-colors text-sm font-semibold text-center mt-1"
              onClick={() => setOpen(false)}
            >
              ابدأ مجاناً
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
