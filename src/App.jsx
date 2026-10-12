import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { StoryPage, OverviewPage, CertificationsPage, CareersPage } from './pages/CompanyPages';
import logoImg from './assets/logo.png';
import { Building2, ShieldCheck, Target, Award, Users, Globe } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState('#C9252C'); // Kianko Red

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const isAr = lang === 'ar';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#07132B] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
      />
      
      <main className="transition-all duration-300 pb-12">
        {activePage === 'home' && <Home setActivePage={setActivePage} lang={lang} themeColor={themeColor} />}
        {activePage === 'story' && <StoryPage lang={lang} themeColor={themeColor} />}
        {activePage === 'overview' && <OverviewPage lang={lang} themeColor={themeColor} />}
        {activePage === 'values' && <StoryPage lang={lang} themeColor={themeColor} />}
        {activePage === 'quality' && <CertificationsPage lang={lang} themeColor={themeColor} />}
        {activePage === 'iso' && <CertificationsPage lang={lang} themeColor={themeColor} />}
        {activePage === 'careers' && <CareersPage lang={lang} themeColor={themeColor} />}
        {activePage === 'projects' && <OverviewPage lang={lang} themeColor={themeColor} />}
        {activePage === 'products' && <Products lang={lang} themeColor={themeColor} />}
        {activePage === 'contact' && <Contact lang={lang} themeColor={themeColor} />}
      </main>

      {/* Official Complete Footer */}
      <footer className="bg-[#050C1E] text-slate-300 pt-16 pb-10 border-t border-blue-950 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
                <div className="bg-white p-1.5 rounded-xl shadow-md border border-slate-200">
                  <img src={logoImg} alt="Kianko Logo" className="h-10 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white tracking-wider">
                    KIANKO <span style={{ color: themeColor }}>COMPANY</span>
                  </h3>
                  <p className="text-[10px] text-blue-300 font-semibold">{isAr ? 'شركة كيان لمنتجات الحديد' : 'KIAN IRON PRODUCTS COMPANY'}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isAr ? 'حلول هندسية وتشكيل معادن فائقة الدقة في الشرق الأوسط.' : 'Precision engineering and steel manufacturing solutions across the MENA region.'}
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white text-sm mb-2">{isAr ? 'الشركة' : 'Company'}</h4>
              <p onClick={() => setActivePage('story')} className="hover:text-white cursor-pointer transition-colors">{isAr ? 'قصتنا' : 'Our Story'}</p>
              <p onClick={() => setActivePage('overview')} className="hover:text-white cursor-pointer transition-colors">{isAr ? 'نظرة عامة' : 'Overview'}</p>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white text-sm mb-2">{isAr ? 'الجودة والحوكمة' : 'Compliance'}</h4>
              <p onClick={() => setActivePage('quality')} className="hover:text-white cursor-pointer transition-colors">{isAr ? 'الحوكمة والجودة' : 'Governance & Quality'}</p>
              <p onClick={() => setActivePage('iso')} className="hover:text-white cursor-pointer transition-colors">{isAr ? 'شهادات الأيزو' : 'ISO Certifications'}</p>
              <p onClick={() => setActivePage('careers')} className="hover:text-white cursor-pointer transition-colors">{isAr ? 'الوظائف' : 'Careers'}</p>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white text-sm mb-2">{isAr ? 'المشاريع والتواصل' : 'Projects & Contact'}</h4>
              <p onClick={() => setActivePage('projects')} className="hover:text-white cursor-pointer transition-colors">{isAr ? 'المشاريع الإقليمية' : 'Regional Projects'}</p>

              <button 
                onClick={() => setActivePage('contact')}
                className="mt-2 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md inline-block hover:opacity-90"
                style={{ backgroundColor: themeColor }}
              >
                {isAr ? 'تواصل معنا الآن' : 'Contact Us'}
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-950/80 text-center text-xs text-slate-500 font-medium">
            <p>All rights reserved to KIANKO COMPANY . ©{new Date().getFullYear()}</p>
          </div>

        </div>
      </footer>
    </div>
  );
}