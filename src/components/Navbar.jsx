import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, Sun, Moon, Palette } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  lang, 
  setLang, 
  darkMode, 
  setDarkMode,
  themeColor,
  setThemeColor 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const isAr = lang === 'ar';

  const colorThemes = [
    { id: 'red', name: 'Kianko Red', hex: '#C9252C' },
    { id: 'blue', name: 'Industrial Blue', hex: '#1D4ED8' },
    { id: 'cyan', name: 'Steel Cyan', hex: '#0284C7' },
  ];

  const pagesList = [
    { id: 'home', en: 'Home', ar: 'الرئيسية' },
    { id: 'story', en: 'Our Story', ar: 'قصتنا' },
    { id: 'overview', en: 'Overview', ar: 'نظرة عامة' },
    { id: 'values', en: 'Our Values', ar: 'قيمنا' },
    { id: 'quality', en: 'Governance & Quality', ar: 'الحوكمة والجودة' },
    { id: 'iso', en: 'ISO Certifications', ar: 'شهادات الأيزو' },
    { id: 'careers', en: 'Careers', ar: 'الوظائف' },
    { id: 'projects', en: 'Regional Projects', ar: 'المشاريع الإقليمية' },
    { id: 'products', en: 'Products', ar: 'المنتجات' },
    { id: 'contact', en: 'Contact Us', ar: 'تواصل معنا' },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-2xl transition-colors duration-300 border-b ${
      darkMode ? 'bg-[#0A1832] border-blue-900/40 text-white' : 'bg-white border-slate-200 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Image + Kianko Text */}
          <div 
            onClick={() => setActivePage('home')}
            className="flex items-center gap-3 cursor-pointer group py-2"
          >
            <div className="bg-white p-1.5 rounded-xl shadow-md border border-slate-200 hover:scale-105 transition-transform duration-300">
              <img 
                src={logoImg} 
                alt="Kianko Steel Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-wider" style={{ color: themeColor }}>
                KIANKO <span className={darkMode ? 'text-white' : 'text-slate-900'}>STEEL</span>
              </h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                {isAr ? 'كيانكو للصناعات الحديدية' : 'Kianko For Steel Industries'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-bold">
            {pagesList.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`transition-colors py-2 border-b-2 ${
                  activePage === item.id 
                    ? 'text-white' 
                    : 'border-transparent hover:opacity-80'
                }`}
                style={{ borderColor: activePage === item.id ? themeColor : 'transparent', color: activePage === item.id ? themeColor : undefined }}
              >
                {isAr ? item.ar : item.en}
              </button>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 py-2 hover:opacity-80"
              >
                <span>{isAr ? 'الشركة والجودة' : 'Company & Quality'}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {dropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 border rounded-xl shadow-2xl py-2 z-50 ${
                  darkMode ? 'bg-[#061024] border-blue-900' : 'bg-white border-slate-200'
                }`}>
                  {pagesList.slice(4, 8).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActivePage(item.id);
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-700 hover:text-white"
                    >
                      {isAr ? item.ar : item.en}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {pagesList.slice(8).map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className="transition-colors py-2 border-b-2"
                style={{ borderColor: activePage === item.id ? themeColor : 'transparent', color: activePage === item.id ? themeColor : undefined }}
              >
                {isAr ? item.ar : item.en}
              </button>
            ))}

            <div className="h-6 w-[1px] bg-slate-400/40 mx-1"></div>

            {/* Color Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setPaletteOpen(!paletteOpen)}
                className="p-2 rounded-xl bg-slate-800 text-white hover:scale-105 transition-transform flex items-center gap-1"
                title="Change Theme Color"
              >
                <Palette className="w-4 h-4" style={{ color: themeColor }} />
              </button>

              {paletteOpen && (
                <div className={`absolute top-full right-0 mt-2 p-3 rounded-2xl shadow-2xl border flex gap-2 z-50 ${
                  darkMode ? 'bg-[#061024] border-blue-900' : 'bg-white border-slate-200'
                }`}>
                  {colorThemes.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setThemeColor(c.hex);
                        setPaletteOpen(false);
                      }}
                      className="w-7 h-7 rounded-full shadow-md border-2 border-white transform hover:scale-110 transition-transform"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:scale-105 transition-transform"
              title="Toggle Dark/Light Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switcher */}
            <button 
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="flex items-center gap-1.5 text-xs font-bold text-white px-3.5 py-1.5 rounded-xl shadow-md transition-all hover:opacity-90"
              style={{ backgroundColor: themeColor }}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الهواتف المحمولة (Mobile Dropdown Menu) - معدلة باللون الصحيح */}
      {isOpen && (
        <div className={`lg:hidden border-t px-4 py-6 space-y-4 shadow-2xl transition-colors ${
          darkMode ? 'bg-[#061024] border-blue-900/50 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <div className="flex flex-col space-y-2">
            {pagesList.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-right px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                    isActive 
                      ? 'text-white shadow-md' 
                      : darkMode ? 'text-gray-300 hover:bg-slate-800/80 hover:text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  style={{
                    backgroundColor: isActive ? themeColor : undefined
                  }}
                >
                  <span>{isAr ? item.ar : item.en}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-blue-900/50 flex items-center justify-between gap-3">
            {/* Dark/Light Mode */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            {/* Language Switcher */}
            <button 
              onClick={() => {
                setLang(isAr ? 'en' : 'ar');
                setIsOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs font-bold shadow"
              style={{ backgroundColor: themeColor }}
            >
              <Globe className="w-4 h-4" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}