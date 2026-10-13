import { useState } from 'react';
import { Upload } from 'lucide-react';

const jobs = [
  { titleAr: 'مهندس جودة وضمان جودة (QA/QC Engineer)', titleEn: 'QA/QC Mechanical Engineer', dept: 'Quality Dept' },
  { titleAr: 'مهندس تصميم قطاعات صُلب (Steel Design Engineer)', titleEn: 'Structural Steel Design Engineer', dept: 'Engineering Dept' },
  { titleAr: 'مشغل ماكينات تدلفين وCNC', titleEn: 'CNC & Roll Forming Operator', dept: 'Factory Operations' },
];

const field = 'w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function CareersPage({ lang = 'en', themeColor = '#C9252C' }) {
  const isAr = lang === 'ar';
  const [fileName, setFileName] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: ابعت البيانات للـ API / EmailJS / Formspree هنا
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-start">
      <div className="text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl font-black">{isAr ? 'انضم لفرق كيانكو الهندسية' : 'Careers at KIANKO STEEL'}</h1>
        <p className="text-slate-400 text-base">
          {isAr ? 'نبحث دائماً عن المهندسين والفنيين الشغوفين بالصناعة' : 'Shape the future of heavy industrial engineering with our team.'}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">{isAr ? 'الوظائف المتاحة حالياً' : 'Open Positions'}</h2>
          {jobs.map((job) => (
            <div key={job.titleEn} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 flex justify-between items-center gap-4 hover:border-slate-700 transition-colors">
              <div>
                <h3 className="font-bold text-white text-base">{isAr ? job.titleAr : job.titleEn}</h3>
                <p className="text-xs text-slate-400 mt-1">{job.dept}</p>
              </div>
              <a href="#apply" className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md shrink-0" style={{ backgroundColor: themeColor }}>
                {isAr ? 'تقديم' : 'Apply Now'}
              </a>
            </div>
          ))}
        </div>

        <div id="apply" className="bg-[#0A1832] p-8 rounded-3xl border border-blue-900/60 shadow-2xl space-y-6">
          <h2 className="text-xl font-bold text-white">{isAr ? 'إرسال السيرة الذاتية مباشرة' : 'Send Your Resume'}</h2>
          {sent ? (
            <p role="status" className="text-emerald-400 text-sm font-semibold">
              {isAr ? 'تم استلام طلبك، هنتواصل معاك لو فيه وظيفة مناسبة.' : 'Application received. We will contact you if there is a suitable role.'}
            </p>
          ) : (
            <form className="space-y-4" onSubmit={onSubmit}>
              <input type="text" name="name" autoComplete="name" placeholder={isAr ? 'الاسم بالكامل' : 'Full Name'} className={field} required />
              <input type="email" name="email" autoComplete="email" placeholder={isAr ? 'البريد الإلكتروني' : 'Email Address'} className={field} required />

              <label className="block border-2 border-dashed border-slate-700 rounded-2xl p-6 text-center space-y-2 hover:border-slate-500 cursor-pointer focus-within:border-white">
                <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                <span className="block text-xs text-slate-300 font-medium">
                  {fileName || (isAr ? 'اضغط لرفع ملف السيرة الذاتية (PDF)' : 'Click to upload your CV (PDF or DOCX)')}
                </span>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                />
              </label>

              <button type="submit" className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-xl transition-opacity hover:opacity-90" style={{ backgroundColor: themeColor }}>
                {isAr ? 'إرسال الطلب' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
