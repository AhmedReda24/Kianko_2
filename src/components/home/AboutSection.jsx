import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import logoImg from "../../../assets/logo.png";
import { ROUTES } from '../../routes';

export default function AboutSection({ isAr, themeColor }) {
  const reduce = useReducedMotion();
  const hidden = isAr ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-start">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* صورة المصنع بتتكشف مرة واحدة لما توصلها */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-900/60 bg-slate-900 group"
          initial={reduce ? false : { clipPath: hidden }}
          whileInView={{ clipPath: 'inset(0 0% 0 0%)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Kianko Factory"
            loading="lazy"
            className="w-full h-[450px] object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-transparent opacity-80" />
          <div className="absolute top-6 start-6 bg-white p-3 rounded-2xl shadow-2xl border border-slate-200">
            <img src={logoImg} alt="Kianko Logo" className="h-12 w-auto object-contain" />
          </div>
        </motion.div>

        <div className="space-y-6">
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            KIANKO COMPANY
          </h2>

          <p className="text-slate-300 text-base leading-relaxed max-w-prose">
            {isAr
              ? 'باعتبارها الرائدة في تصنيع وتشكيل الصُلب بدقة عالية، تقدم كيانكو حوامل وسلالم الكابلات الهندسية ومقاطع المحارة وأنظمة الجلفنة على الساخن المصممة خصيصاً لتلبي احتياجات المشاريع الكبرى.'
              : 'As the manufacturing leader in precision steel fabrication, Kianko delivers engineered cable management trays, heavy-duty ladders, hot-dip galvanization, and plaster profile systems engineered to satisfy modern construction specifications.'}
          </p>

          <p className="text-slate-300 text-base leading-relaxed max-w-prose">
            {isAr
              ? 'تعمل كيانكو وفق المعايير الدولية لترسيخ مكانتها كشريك موثوق للحلول الهيكلية عالية الأداء في كافة التطبيقات الصناعية والتجارية.'
              : 'Operating to global standards, Kianko reinforces its position as a trusted partner for durable, high-performance structural solutions across major commercial and industrial developments.'}
          </p>

          <div className="pt-4">
            <Link
              to={ROUTES.contact}
              className="inline-flex items-center gap-3 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ backgroundColor: themeColor }}
            >
              <span>{isAr ? 'تواصل مع كيانكو' : 'Reach KIANKO'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
