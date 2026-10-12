import React from 'react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import heroVideo from '../assets/hero.mp4';

export default function Home({ setActivePage, lang = 'en', themeColor = '#C9252C' }) {
  const isAr = lang === 'ar';

  const stats = [
    {
      title: '+50 Locations',
      titleAr: '+50 موقعاً',
      subtitle: 'Across the Region',
      subtitleAr: 'في جميع أنحاء المنطقة',
      img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: '+100 Building Solutions',
      titleAr: '+100 حل إجمالي',
      subtitle: 'Engineered Steel Products',
      subtitleAr: 'منتجات حديدية هندسية',
      img: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: '3 Main Activities',
      titleAr: '3 أنشطة رئيسية',
      subtitle: 'Design, Manufacture, & Supply',
      subtitleAr: 'التصميم، التصنيع، والتوريد',
      img: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: '+10,000 Projects',
      titleAr: '+10,000 مشروع',
      subtitle: 'Across the MENA Region',
      subtitleAr: 'في الشرق الأوسط وشمال إفريقيا',
      img: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="bg-[#07132B] text-white min-h-screen">
      
      {/* 🎬 Hero Section */}
      <section className="relative overflow-hidden h-[600px] lg:h-[680px] flex items-center justify-start border-b border-blue-900/40 bg-slate-950">
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/80 to-[#07132B]/30 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-left space-y-6 w-full">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-white font-bold text-xs tracking-wider uppercase shadow-2xl transition-colors duration-300"
            style={{ backgroundColor: themeColor }}
          >
            <span>{isAr ? 'مجموعة كيانكو للصناعات الحديدية' : 'KIANKO STEEL INDUSTRIAL GROUP'}</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight drop-shadow-2xl">
            KIANKO
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-100 font-medium max-w-2xl leading-relaxed drop-shadow-lg">
            {isAr 
              ? 'تصنيع وتدلفين حديد التسليح، وحوامل وسلالم الكابلات والمقاطع المعدنية بأعلى جودة.' 
              : 'Precision Steel Fabrication, Rebar Rolling, and Heavy Duty Cable Management Manufacturing.'
            }
          </p>

          <div className="pt-4 flex gap-4">
            <button
              onClick={() => setActivePage && setActivePage('products')}
              className="text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              style={{ backgroundColor: themeColor }}
            >
              {isAr ? 'تصفح المنتجات' : 'Explore Products'}
            </button>
          </div>
        </div>
      </section>

      {/* 🏢 About Company Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-900/60 bg-slate-900 group">
            <img 
              src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Kianko Factory" 
              className="w-full h-[450px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-transparent opacity-80"></div>

            <div className="absolute top-6 left-6 bg-white p-3 rounded-2xl shadow-2xl border border-slate-200">
              <img src={logoImg} alt="Kianko Logo" className="h-12 w-auto object-contain" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              KIANKO STEEL
            </h2>
            
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              {isAr 
                ? 'باعتبارها الرائدة في تصنيع وتشكيل الصُلب بدقة عالية، تقدم كيانكو حوامل وسلالم الكابلات الهندسية ومقاطع المحارة وأنظمة الجلفنة على الساخن المصممة خصيصاً لتلبي احتياجات المشاريع الكبرى.' 
                : 'As the manufacturing leader in precision steel fabrication, Kianko delivers engineered cable management trays, heavy-duty ladders, hot-dip galvanization, and plaster profile systems engineered to satisfy modern construction specifications.'
              }
            </p>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              {isAr 
                ? 'تعمل كيانكو وفق المعايير الدولية لترسيخ مكانتها كشريك موثوق للحلول الهيكلية عالية الأداء في كافة التطبيقات الصناعية والتجارية.' 
                : 'Operating to global standards, Kianko reinforces its position as a trusted partner for durable, high-performance structural solutions across major commercial and industrial developments.'
              }
            </p>

            <div className="pt-4">
              <button
                onClick={() => setActivePage && setActivePage('contact')}
                className="inline-flex items-center gap-3 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ backgroundColor: themeColor }}
              >
                <span>{isAr ? 'تواصل مع كيانكو' : 'Reach KIANKO'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 📊 4 Grid Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden border border-blue-900/60 group shadow-2xl text-left cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061024] via-[#061024]/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p className="text-sm text-blue-300 font-medium">
                  {isAr ? item.subtitleAr : item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}