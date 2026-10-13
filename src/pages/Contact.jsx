import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ lang }) {
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct Direct mailto link to open default email app with populated fields
    const mailtoUrl = `mailto:ahmedreda1242000@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-5xl font-black">
          {isAr ? 'تواصل مع' : 'Get in Touch with'} <span className="text-[#C9252C]">KIANKO</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto font-medium">
          {isAr ? 'يسعد فريقنا الهندسي والتجاري بالرد على استفساراتكم وتقديم عروض الأسعار.' : 'Our sales and engineering support teams are ready to assist with your project quotes.'}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Contact Info Box */}
        <div className="bg-[#0A1832] text-white rounded-3xl p-8 space-y-8 shadow-2xl border border-blue-900/40">
          <h3 className="text-2xl font-bold border-b border-blue-900 pb-4">
            {isAr ? 'معلومات التواصل' : 'Contact Information'}
          </h3>
          
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C9252C]/20 rounded-xl text-red-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-300">{isAr ? 'المصنع والإدارة' : 'Factory & Address'}</h4>
                <p className="text-slate-400 mt-1">Al-Kharj Road, Industrial Area / Riyadh, Saudi Arabia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C9252C]/20 rounded-xl text-red-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-300">{isAr ? 'الهاتف' : 'Phone Numbers'}</h4>
                <p className="text-slate-400 mt-1">+966 12 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C9252C]/20 rounded-xl text-red-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-300">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</h4>
                <p className="text-slate-400 mt-1">info@kianko-steel.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Box */}
        <div className="lg:col-span-2 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-green-950/40 rounded-2xl border border-green-800">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
              <h3 className="text-2xl font-bold text-white">{isAr ? 'تم فتح تطبيق البريد لإرسال رسالتك!' : 'Email Client Opened!'}</h3>
              <p className="text-slate-300">{isAr ? 'شكراً لتواصلك مع كيانكو للصناعات الحديدية.' : 'Thank you for reaching out to Kianko Steel Industries.'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300">{isAr ? 'الاسم بالكامل' : 'Full Name'}</label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmed Negm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-[#C9252C] outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300">{isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 5xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-[#C9252C] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input
                  type="email"
                  required
                  placeholder="example@kianko.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-[#C9252C] outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">{isAr ? 'تفاصيل الطلب أو الرسالة' : 'Inquiry Message'}</label>
                <textarea
                  rows="4"
                  required
                  placeholder={isAr ? 'اكتب تفاصيل الكميات المطلوبة أو المواصفات...' : 'Specify your structural steel specifications...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-[#C9252C] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#C9252C] hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-xl transition-all"
              >
                <Send className="w-5 h-5" />
                <span>{isAr ? 'إرسال الرسالة الآن' : 'Send Inquiry Mail'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}