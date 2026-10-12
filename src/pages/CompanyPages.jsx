import React from 'react';
import { 
  Building2, ShieldCheck, Target, Award, Users, Globe, 
  CheckCircle2, Download, Play, FileText, Upload 
} from 'lucide-react';

// 1️⃣ Our Story Page
export function StoryPage({ lang, themeColor }) {
  const isAr = lang === 'ar';
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-left">
      <div className="relative rounded-3xl overflow-hidden h-96 border border-blue-900/50 shadow-2xl">
        <img 
          src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Kianko Steel History" 
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-[#07132B]/40 to-transparent"></div>
        <div className="absolute bottom-10 left-10 right-10 space-y-3">
          <span className="px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase" style={{ backgroundColor: themeColor }}>
            {isAr ? 'قصتنا وتأسيسنا' : 'OUR HERITAGE'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white">
            {isAr ? 'عقود من التميز والصناعة الثقيلة' : 'Decades of Industrial Steel Leadership'}
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-300 leading-relaxed text-base">
          <h2 className="text-3xl font-extrabold text-white">
            {isAr ? 'تاريخ ممتد في تشكيل المعادن وتلبية المشاريع القومية' : 'Building Strong Foundations Across the Region'}
          </h2>
          <p>
            {isAr 
              ? 'تأسست كيانكو للصناعات الحديدية كأحد الصروح الصناعية الرائدة المتخصصة في إنتاج وتشكيل قطاعات الصُلب، وحوامل الكابلات الهندسية، والسلالم المعدنية الفولاذية بمختلف المواصفات.'
              : 'Kianko For Steel Industries was established to pioneer precision steel fabrication, cable management systems, and heavy structural profiles engineered to world-class standards.'
            }
          </p>
          <p>
            {isAr 
              ? 'نمضي بخطى ثابتة نحو تطوير خطوط الإنتاج والاعتماد على أحدث ماكينات التدلفين الدقيق والجلفنة على الساخن لتقديم حلول متكاملة تُنفذ في كبرى المشاريع بالشرق الأوسط.'
              : 'Our commitment to engineering accuracy and continuous technological investment has secured Kianko as a cornerstone partner for major national infrastructure developments.'
            }
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-900/60 bg-slate-900 group h-80 flex items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Factory Video Thumbnail" 
            className="w-full h-full object-cover filter brightness-70 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="p-5 rounded-full bg-white/90 text-slate-900 shadow-2xl hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" style={{ color: themeColor }} />
            </button>
          </div>
          <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-xs font-bold">
            {isAr ? 'فيديو قصة كيانكو' : 'Watch Story Video'}
          </span>
        </div>
      </div>
    </div>
  );
}

// 2️⃣ Overview Page
export function OverviewPage({ lang, themeColor }) {
  const isAr = lang === 'ar';
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-left">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black">
          {isAr ? 'نظرة عامة على القدرات الإنتاجية' : 'Manufacturing Overview'}
        </h1>
        <p className="text-slate-400 font-medium text-lg">
          {isAr ? 'خطوط إنتاج آلية بالكامل مع مصانع جلفنة حديثة' : 'State-of-the-art automated cold-rolling, punching, and hot-dip galvanizing plants.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { titleAr: 'خطوط التدلفين الآلي', titleEn: 'Roll Forming Lines', descAr: 'دقة فائقة في تشكيل وتدلفين الصُلب بقدرات إنتاجية ضخمة.', descEn: 'High-speed automated continuous roll forming machinery.', img: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { titleAr: 'مجمع الجلفنة على الساخن', titleEn: 'Hot-Dip Galvanizing', descAr: 'حماية متكاملة ضد التآكل والصدأ وفق معايير ASTM A123.', descEn: 'Continuous hot-dip galvanization strictly adhering to ASTM standards.', img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { titleAr: 'معامل الفحص والجودة', titleEn: 'Testing Laboratories', descAr: 'مختبرات قياس إجهاد الشد والسمك بدقة متناهية.', descEn: 'In-house physical tensile testing and coating thickness labs.', img: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600' }
        ].map((card, i) => (
          <div key={i} className="bg-slate-900/80 rounded-3xl overflow-hidden border border-slate-800 shadow-xl space-y-4 p-4">
            <img src={card.img} alt={card.titleEn} className="w-full h-48 object-cover rounded-2xl" />
            <div className="p-2 space-y-2">
              <h3 className="text-xl font-bold text-white">{isAr ? card.titleAr : card.titleEn}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{isAr ? card.descAr : card.descEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3️⃣ Certifications Page (شهادات تفاعلية مضمونة الظهور 100%)
export function CertificationsPage({ lang, themeColor }) {
  const isAr = lang === 'ar';

  const certs = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      titleAr: 'نظام إدارة الجودة العالمية',
      titleEn: 'Quality Management System',
      descAr: 'الاعتماد الدولي لإدارة ضبط واستدامة الجودة لمراحل التصنيع.',
      descEn: 'International quality control standard for steel manufacturing.',
      fileName: 'KIANKO_ISO_9001.png'
    },
    {
      id: 2,
      name: 'ISO 14001:2015',
      titleAr: 'نظام الإدارة البيئية',
      titleEn: 'Environmental Management',
      descAr: 'الالتزام التام بالتصنيع المستدام والحد من الانبعاثات الكربونية.',
      descEn: 'Environmental safety compliance and sustainable steel mill protocols.',
      fileName: 'KIANKO_ISO_14001.png'
    },
    {
      id: 3,
      name: 'ISO 45001:2018',
      titleAr: 'السلامة والصحة المهنية',
      titleEn: 'Occupational Health & Safety',
      descAr: 'توفير أقصى درجات حماية العمالة وبيئة العمل الصناعية.',
      descEn: 'World-class workplace safety and structural hazard control.',
      fileName: 'KIANKO_ISO_45001.png'
    },
    {
      id: 4,
      name: 'ASTM A123 / A123M',
      titleAr: 'اعتماد جلفنة الصلب على الساخن',
      titleEn: 'Hot-Dip Galvanizing Standard',
      descAr: 'مطابقة سمك طبقة الخارصين ومقاومة التآكل والصدأ.',
      descEn: 'Zinc coating thickness and anti-corrosion specification.',
      fileName: 'KIANKO_ASTM_A123.png'
    },
    {
      id: 5,
      name: 'IEC 61537 Standard',
      titleAr: 'شهادة حوامل وسلالم الكابلات',
      titleEn: 'Cable Tray Systems Compliance',
      descAr: 'مطابقة أنظمة مسارات الكابلات الكهربائية للأحمال والمواصفات الأوروبية.',
      descEn: 'International standard for electrical cable tray and ladder systems.',
      fileName: 'KIANKO_IEC_61537.png'
    },
    {
      id: 6,
      name: 'BS EN 10346',
      titleAr: 'اعتماد الصفائح الفولاذية المغلفنة',
      titleEn: 'Continuously Hot-Dip Coated Steel',
      descAr: 'اعتماد معايير الجودة للشرائح الفولاذية المستخدمة في التدلفين.',
      descEn: 'Continuously hot-dip coated steel flat products certification.',
      fileName: 'KIANKO_BS_EN_10346.png'
    },
    {
      id: 7,
      name: 'ISO 50001:2018',
      titleAr: 'نظام إدارة الطاقة الصناعية',
      titleEn: 'Energy Management System',
      descAr: 'ترشيد كفاءة استهلاك الطاقة في أفرام الجلفنة وخطوط الإنتاج.',
      descEn: 'Industrial energy efficiency and optimized furnace management.',
      fileName: 'KIANKO_ISO_50001.png'
    },
    {
      id: 8,
      name: 'CE Marking Certificate',
      titleAr: 'شهادة التوافق الأوروبي CE',
      titleEn: 'European Conformity Certification',
      descAr: 'اعتماد التصدير لأسواق الاتحاد الأوروبي والشرق الأوسط.',
      descEn: 'European market conformity for structural steel products.',
      fileName: 'KIANKO_CE_Marking.png'
    },
    {
      id: 9,
      name: 'RoHS Compliance',
      titleAr: 'شهادة خلو المنتجات من المواد الخطر',
      titleEn: 'Restriction of Hazardous Substances',
      descAr: 'مطابقة منتجات حوامل الكابلات للمعايير البيئية النظيفة.',
      descEn: 'Environmentally clean and non-hazardous metal finishing.',
      fileName: 'KIANKO_RoHS_Certificate.png'
    },
    {
      id: 10,
      name: 'ISO/IEC 17025',
      titleAr: 'اعتماد مختبرات الفحص والقياس',
      titleEn: 'Testing Laboratory Accreditation',
      descAr: 'اعتماد دقة اختبارات شد الصلب واختبارات الجودة الداخلية.',
      descEn: 'Accreditation of in-house tensile and thickness testing labs.',
      fileName: 'KIANKO_ISO_17025.png'
    }
  ];

  // دالة تنزيل كود الوثيقة الرسمية كمستند
  const handleDownload = (cert) => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // الخلفية
    ctx.fillStyle = '#07132B';
    ctx.fillRect(0, 0, 800, 600);

    // الإطار الذهبي
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, 760, 560);

    // النصوص
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('KIANKO STEEL INDUSTRIAL GROUP', 400, 100);

    ctx.fillStyle = '#93C5FD';
    ctx.font = '20px sans-serif';
    ctx.fillText('OFFICIAL ACCREDITATION CERTIFICATE', 400, 150);

    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText(cert.name, 400, 260);

    ctx.fillStyle = '#E2E8F0';
    ctx.font = '22px sans-serif';
    ctx.fillText(cert.titleEn, 400, 320);

    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('STATUS: VERIFIED & COMPLIANT', 400, 420);

    ctx.fillStyle = '#64748B';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Issued by Kianko Quality Department - ${new Date().getFullYear()}`, 400, 520);

    const link = document.createElement('a');
    link.download = cert.fileName;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-left">
      <div className="text-center space-y-3">
        <span 
          className="px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase shadow-lg inline-block" 
          style={{ backgroundColor: themeColor }}
        >
          {isAr ? 'الاعتمادات والجودة المعتمدة' : 'GLOBAL ACCREDITATIONS & CERTIFICATES'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          {isAr ? '10 شهادات جودة واعترافات دولية' : '10 Accredited International Certifications'}
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
          {isAr ? 'تلتزم كيانكو بأعلى معايير التصنيع والجودة والجلفنة للحلول الهيكلية وحوامل الكابلات.' : 'Kianko Steel adheres to global quality, safety, and galvanizing compliance frameworks.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((c) => (
          <div 
            key={c.id} 
            className="bg-[#0A1832] rounded-3xl p-6 border border-blue-900/60 shadow-2xl flex flex-col justify-between space-y-6 group hover:border-slate-500 transition-all duration-300"
          >
            {/* Real CSS Rendered Certificate Document Header */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-gradient-to-br from-slate-900 via-[#0B1E3D] to-slate-950 p-6 h-64 flex flex-col justify-between shadow-2xl">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-black tracking-widest text-amber-400 uppercase">KIANKO ACCREDITED</p>
                  <p className="text-xs text-slate-300 font-bold">OFFICIAL CERTIFICATE</p>
                </div>
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="my-auto text-center space-y-2">
                <h2 className="text-2xl font-black text-white tracking-wider drop-shadow-md group-hover:scale-105 transition-transform">
                  {c.name}
                </h2>
                <p className="text-xs text-blue-300 font-semibold">{c.titleEn}</p>
              </div>

              <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800 pt-2 font-mono">
                <span>VERIFIED: YES</span>
                <span>ID: KNK-2026-0{c.id}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-white">{c.name}</h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                  {isAr ? 'معتمد' : 'VERIFIED'}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-300">{isAr ? c.titleAr : c.titleEn}</h4>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{isAr ? c.descAr : c.descEn}</p>
            </div>

            <button 
              onClick={() => handleDownload(c)}
              className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white py-3 rounded-xl text-xs font-bold transition-all border border-slate-700 shadow-xl cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isAr ? 'تحميل ملف الشهادة' : 'Download Certificate PNG'}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
   
// 4️⃣ Careers Page
export function CareersPage({ lang, themeColor }) {
  const isAr = lang === 'ar';
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-left">
      <div className="text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl font-black">{isAr ? 'انضم لفرق كيانكو الهندسية' : 'Careers at KIANKO STEEL'}</h1>
        <p className="text-slate-400 text-base">{isAr ? 'نبحث دائماً عن المهندسين والفنيين الشغوفين بالصناعة' : 'Shape the future of heavy industrial engineering with our team.'}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">{isAr ? 'الوظائف المتاحة حالياً' : 'Open Positions'}</h3>
          {[
            { titleAr: 'مهندس جودة وضمان جودة (QA/QC Engineer)', titleEn: 'QA/QC Mechanical Engineer', dept: 'Quality Dept' },
            { titleAr: 'مهندس تصميم قطاعات صُلب (Steel Design Engineer)', titleEn: 'Structural Steel Design Engineer', dept: 'Engineering Dept' },
            { titleAr: 'مشغل ماكينات تدلفين وCNC', titleEn: 'CNC & Roll Forming Operator', dept: 'Factory Operations' }
          ].map((job, idx) => (
            <div key={idx} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 flex justify-between items-center hover:border-slate-700 transition-all">
              <div>
                <h4 className="font-bold text-white text-base">{isAr ? job.titleAr : job.titleEn}</h4>
                <p className="text-xs text-slate-400 mt-1">{job.dept}</p>
              </div>
              <button className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md" style={{ backgroundColor: themeColor }}>
                {isAr ? 'تقديم' : 'Apply Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#0A1832] p-8 rounded-3xl border border-blue-900/60 shadow-2xl space-y-6">
          <h3 className="text-xl font-bold text-white">{isAr ? 'إرسال السيرة الذاتية مباشرة' : 'Send Your Resume'}</h3>
          <form className="space-y-4">
            <input type="text" placeholder={isAr ? 'الاسم بالكامل' : 'Full Name'} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm outline-none" required />
            <input type="email" placeholder={isAr ? 'البريد الإلكتروني' : 'Email Address'} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm outline-none" required />
            
            <div className="border-2 border-dashed border-slate-700 rounded-2xl p-6 text-center space-y-2 hover:border-slate-500 cursor-pointer">
              <Upload className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-xs text-slate-300 font-medium">{isAr ? 'اضغط لرفع ملف السيرة الذاتية (PDF)' : 'Click to upload your CV (PDF or DOCX)'}</p>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-xl transition-all" style={{ backgroundColor: themeColor }}>
              {isAr ? 'إرسال الطلب' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}