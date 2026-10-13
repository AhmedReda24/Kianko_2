# تجهيز المشروع

```bash
npm i react-router motion embla-carousel-react embla-carousel-autoplay lucide-react
```

## الخط (اختياري لكن مُفضّل) — الكلاس font-display
في index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
```
في tailwind.config.js داخل theme.extend:
```js
fontFamily: {
  sans: ['Cairo', 'system-ui', 'sans-serif'],
  display: ['"Barlow Condensed"', 'Cairo', 'sans-serif'],
},
```

## الاستضافة
لازم إعادة توجيه كل المسارات لـ index.html (SPA fallback):
- Netlify: ملف public/_redirects  →  /*  /index.html  200
- Vercel: vercel.json → { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
