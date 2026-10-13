import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Download, PackageOpen } from 'lucide-react';
import { products } from '../data/products';
import { ROUTES } from '../routes';

export default function Products({ lang = 'en', themeColor = '#C9252C' }) {
  const isAr = lang === 'ar';
  const [category, setCategory] = useState('all');

  const filters = [
    { id: 'all', label: isAr ? `كل المنتجات (${products.length})` : `All Products (${products.length})` },
    { id: 'management', label: isAr ? 'أنظمة إدارة الكابلات' : 'Cable Management Systems' },
    { id: 'building', label: isAr ? 'مقاطع المباني والمحارة' : 'Building & Plaster Profiles' },
  ];

  const list = category === 'all' ? products : products.filter((p) => p.category === category);
  const btnCls = 'inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-start">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          KIANKO <span style={{ color: themeColor }}>{isAr ? 'كتالوج المنتجات' : 'Product Catalog'}</span>
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto font-medium">
          {isAr
            ? `تعرّف على ${products.length} خطوط إنتاج من حوامل الكابلات والمقاطع المعدنية.`
            : `Explore our portfolio of ${products.length} steel lines, cable management systems, and building profiles.`}
        </p>
      </div>

      <div className="flex justify-center gap-3 flex-wrap" role="tablist">
        {filters.map((f) => {
          const on = category === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setCategory(f.id)}
              className={`px-6 py-3 rounded-xl font-bold transition-colors duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                on ? 'text-white shadow-lg' : 'bg-[#0A1832] text-slate-300 hover:bg-[#10244A] border border-blue-900/60'
              }`}
              style={on ? { backgroundColor: themeColor } : undefined}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="group bg-[#0A1832] rounded-2xl overflow-hidden border border-blue-900/60 shadow-xl hover:border-slate-500 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-44 bg-gradient-to-br from-slate-900 via-[#0B1E3D] to-slate-900 p-6 flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(#C9252C_1px,transparent_1px)] [background-size:12px_12px]" />
                  <div className="relative p-3 rounded-xl mb-2 text-white group-hover:scale-110 transition-transform" style={{ backgroundColor: `${themeColor}33` }}>
                    <PackageOpen className="w-8 h-8" style={{ color: themeColor }} />
                  </div>
                  <span className="relative text-white font-bold text-sm tracking-wide">{isAr ? p.nameAr : p.name}</span>
                  <span className="absolute top-4 start-4 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md" style={{ backgroundColor: themeColor }}>
                    {isAr ? p.badgeAr : p.badge}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-white">{isAr ? p.nameAr : p.name}</h2>
                  <p className="text-slate-300 text-sm leading-relaxed">{isAr ? p.descAr : p.desc}</p>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold text-slate-400">{isAr ? 'المواصفات الفنية' : 'Technical Specs'}</h3>
                    {(isAr ? p.specsAr : p.specs).map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                {p.datasheet ? (
                  <a href={p.datasheet} download className={`${btnCls} bg-slate-800 hover:bg-slate-700`}>
                    <Download className="w-4 h-4" />
                    <span>{isAr ? 'تحميل الداتا شيت' : 'Download Datasheet'}</span>
                  </a>
                ) : (
                  <Link to={ROUTES.contact} className={`${btnCls} hover:opacity-90`} style={{ backgroundColor: themeColor }}>
                    <span>{isAr ? 'اطلب الداتا شيت' : 'Request Datasheet'}</span>
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
