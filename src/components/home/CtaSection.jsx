import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '../../routes';

export default function CtaSection({ isAr, themeColor }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div
        className="rounded-3xl px-8 py-12 sm:px-14 flex flex-wrap items-center justify-between gap-8 text-start"
        style={{ backgroundColor: themeColor }}
      >
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {isAr ? 'عندك مشروع محتاج حديد؟' : 'Have a project that needs steel?'}
          </h2>
          <p className="mt-3 text-white/90">
            {isAr ? 'ابعتلنا المواصفات ونرد عليك بعرض سعر.' : 'Send us your specifications and we will reply with a quotation.'}
          </p>
        </div>
        <Link
          to={ROUTES.contact}
          className="inline-flex items-center gap-3 bg-white text-[#07132B] font-bold px-8 py-4 rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span>{isAr ? 'اطلب عرض سعر' : 'Request a quote'}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
