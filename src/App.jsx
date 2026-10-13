import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ROUTES, PAGE_TITLES, pageKeyFromPath } from './routes';

// كل صفحة في ملف لوحدها وبتتحمّل عند الحاجة فقط (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'));
const OverviewPage = lazy(() => import('./pages/OverviewPage'));
const ValuesPage = lazy(() => import('./pages/ValuesPage'));
const GovernanceQualityPage = lazy(() => import('./pages/GovernanceQualityPage'));
const IsoCertificationsPage = lazy(() => import('./pages/IsoCertificationsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader({ themeColor }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading">
      <div
        className="h-10 w-10 rounded-full border-4 border-white/10 animate-spin"
        style={{ borderTopColor: themeColor }}
      />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState('#C9252C'); // Kianko Red

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // الـ Navbar القديم بيستخدم activePage / setActivePage،
  // فبنحوّلهم لـ URL حقيقي من هنا من غير ما نلمس الـ Navbar.
  const pageKey = pageKeyFromPath(pathname);
  const activePage = pageKey ?? 'home';
  const setActivePage = useCallback((key) => navigate(ROUTES[key] ?? ROUTES.home), [navigate]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const [en, ar] = PAGE_TITLES[pageKey ?? 'notFound'];
    document.title = lang === 'ar' ? ar : en;
  }, [pageKey, lang]);

  const pageProps = { lang, themeColor };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-[#07132B] text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <ScrollToTop />

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

      <main className="pb-12">
        <Suspense fallback={<PageLoader themeColor={themeColor} />}>
          <Routes>
            <Route path={ROUTES.home} element={<Home {...pageProps} />} />
            <Route path={ROUTES.story} element={<OurStoryPage {...pageProps} />} />
            <Route path={ROUTES.overview} element={<OverviewPage {...pageProps} />} />
            <Route path={ROUTES.values} element={<ValuesPage {...pageProps} />} />
            <Route path={ROUTES.quality} element={<GovernanceQualityPage {...pageProps} />} />
            <Route path={ROUTES.iso} element={<IsoCertificationsPage {...pageProps} />} />
            <Route path={ROUTES.careers} element={<CareersPage {...pageProps} />} />
            <Route path={ROUTES.projects} element={<ProjectsPage {...pageProps} />} />
            <Route path={ROUTES.products} element={<Products {...pageProps} />} />
            <Route path={ROUTES.contact} element={<Contact {...pageProps} />} />
            <Route path={ROUTES.locations} element={<LocationsPage {...pageProps} />} />
            <Route path="*" element={<NotFoundPage {...pageProps} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer lang={lang} themeColor={themeColor} />
    </div>
  );
}