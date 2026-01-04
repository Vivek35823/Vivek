import React, { useState } from 'react';
import { useLanguage } from '../App';
import { dbService } from '../services/dbService';

const Membership: React.FC = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    occupation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const countries = ["USA", "India", "UK", "Canada", "Australia", "Germany", "France", "Japan", "Other"];

  // Bilingual translations
  const t = {
    en: {
      pageTitle: 'Join the Movement.',
      pageDesc: 'Become part of a global consciousness dedicated to the ideals of Swami Vivekananda.',
      membershipTitle: 'Devotee Membership',
      membershipDesc: 'Membership is more than a registration; it is a commitment to personal growth and collective service.',
      benefits: [
        { title: 'Global Fellowship', desc: 'Connect with thousands of devotees worldwide.' },
        { title: 'Service Access', desc: 'Participate in community service initiatives.' },
        { title: 'Learning Hub', desc: 'Access to exclusive educational content and archives.' }
      ],
      fullName: 'Full Name',
      email: 'Email',
      country: 'Country',
      vocation: 'Vocation / Profession',
      selectRegion: 'Select Region',
      registerBtn: 'Register as Member',
      enrollingBtn: 'Enrolling...',
      welcome: 'Welcome, Friend!',
      successMsg: 'Your journey with the Vivek organization has officially begun. Check your email for next steps.',
      registerAnother: 'Register Another',
      chapter: 'Global Outreach Chapter 2024'
    },
    bn: {
      pageTitle: 'আন্দোলনে যোগ দিন।',
      pageDesc: 'স্বামী বিবেকানন্দের আদর্শের প্রতি নিবেদিত একটি বৈশ্বিক সচেতনতার অংশ হন।',
      membershipTitle: 'ভক্ত সদস্যপদ',
      membershipDesc: 'সদস্যপদ শুধুমাত্র একটি নিবন্ধন নয়; এটি ব্যক্তিগত বৃদ্ধি এবং সম্মিলিত সেবার প্রতিশ্রুতি।',
      benefits: [
        { title: 'বৈশ্বিক সহভাগিতা', desc: 'বিশ্বব্যাপী হাজার হাজার ভক্তদের সাথে সংযোগ করুন।' },
        { title: 'সেবার সুযোগ', desc: 'সম্প্রদায় সেবা উদ্যোগে অংশগ্রহণ করুন।' },
        { title: 'শেখার কেন্দ্র', desc: 'একচেটিয়া শিক্ষামূলক বিষয়বস্তু এবং সংরক্ষণাগার অ্যাক্সেস করুন।' }
      ],
      fullName: 'পূর্ণ নাম',
      email: 'ইমেইল',
      country: 'দেশ',
      vocation: 'পেশা / কর্মজীবন',
      selectRegion: 'অঞ্চল নির্বাচন করুন',
      registerBtn: 'সদস্য হিসেবে নিবন্ধন করুন',
      enrollingBtn: 'নিবন্ধন করছি...',
      welcome: 'স্বাগতম, বন্ধু!',
      successMsg: 'বিবেক সংগঠনের সাথে আপনার যাত্রা আনুষ্ঠানিকভাবে শুরু হয়েছে। পরবর্তী পদক্ষেপের জন্য আপনার ইমেইল চেক করুন।',
      registerAnother: 'আরও একজনকে নিবন্ধন করুন',
      chapter: 'বৈশ্বিক সম্প্রসারণ অধ্যায় ২০২৪'
    }
  };

  const translations = lang === 'bn' ? t.bn : t.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('Submitting form data:', formData);
      await dbService.addMember(formData);
      setSuccess(true);
      setFormData({ fullName: '', email: '', country: '', occupation: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('Membership form error:', errorMessage);
      alert(`Error registering: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pb-24 pt-12 min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-orange-900">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/50"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 w-full px-6 text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl text-amber-300 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 animate-pulse"></span>
              ✨ {lang === 'bn' ? 'আমাদের সম্প্রদায়' : 'Join Our Community'}
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tighter">
                {translations.pageTitle}
              </h1>
              <p className="text-lg md:text-xl text-amber-50 leading-relaxed font-light max-w-3xl mx-auto">
                {translations.pageDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-black transition-all hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-105"
              >
                {lang === 'en' ? 'Join Now' : 'এখনই যোগ দিন'}
              </button>
              <a 
                href="#benefits"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-black transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
              >
                {lang === 'en' ? 'Learn Benefits' : 'সুবিধা জানুন'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-28 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-amber-200">
              🎁 {lang === 'en' ? 'Membership Benefits' : 'সদস্যপদের সুবিধা'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">{translations.membershipTitle}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{translations.membershipDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translations.benefits.map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 border-2 border-white/60 group-hover:border-amber-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${i === 0 ? 'fa-globe' : i === 1 ? 'fa-hands-holding-circle' : 'fa-book-open'}`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">{item.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section id="membership-form" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-10 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-purple-200">
              📝 {lang === 'en' ? 'Registration' : 'নিবন্ধন'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-4 tracking-tight">
              {lang === 'en' ? 'Become a Devotee Member' : 'ভক্ত সদস্য হন'}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{lang === 'en' ? 'Begin your journey with us in just a few minutes' : 'মাত্র কয়েক মিনিটে আমাদের সাথে আপনার যাত্রা শুরু করুন'}</p>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-white/60 group-hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              {success ? (
                <div className="text-center w-full animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-2xl flex items-center justify-center text-5xl mx-auto mb-10 shadow-2xl">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <h2 className="text-4xl font-black text-[#1E1B4B] mb-4 tracking-tight">
                    {translations.welcome}
                  </h2>
                  <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                    {translations.successMsg}
                  </p>
                  <button 
                    onClick={() => setSuccess(false)} 
                    className="px-10 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-black uppercase tracking-wide hover:shadow-xl transition-all"
                  >
                    {translations.registerAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-black text-[#1E1B4B] uppercase tracking-widest ml-1">
                        {translations.fullName} *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-600 outline-none transition-all font-semibold"
                        placeholder={lang === 'bn' ? 'আপনার সম্পূর্ণ নাম' : 'Enter your full name'}
                        value={formData.fullName}
                        onChange={e => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-black text-[#1E1B4B] uppercase tracking-widest ml-1">
                        {translations.email} *
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-600 outline-none transition-all font-semibold"
                        placeholder={lang === 'bn' ? 'আপনার ইমেইল' : 'your@email.com'}
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-black text-[#1E1B4B] uppercase tracking-widest ml-1">
                        {translations.country} *
                      </label>
                      <select
                        required
                        className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-600 outline-none transition-all font-semibold appearance-none cursor-pointer"
                        value={formData.country}
                        onChange={e => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="">{translations.selectRegion}</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-black text-[#1E1B4B] uppercase tracking-widest ml-1">
                        {translations.vocation} *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-600 outline-none transition-all font-semibold"
                        placeholder={lang === 'bn' ? 'উদাহরণ: ইঞ্জিনিয়ার / শিক্ষার্থী' : 'e.g., Engineer / Student'}
                        value={formData.occupation}
                        onChange={e => setFormData({...formData, occupation: e.target.value})}
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-black text-lg uppercase tracking-wide hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className={`fa-solid ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-user-plus'} mr-2`}></i>
                    {isSubmitting ? translations.enrollingBtn : translations.registerBtn}
                  </button>
                  
                  <p className="text-center text-xs text-slate-500 font-bold uppercase tracking-widest">
                    {translations.chapter}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-indigo-200">
              🎯 {lang === 'en' ? 'How It Works' : 'কীভাবে এটি কাজ করে'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">
              {lang === 'en' ? 'Your Journey Begins Here' : 'আপনার যাত্রা এখানে শুরু হয়'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '1', title: lang === 'en' ? 'Register' : 'নিবন্ধন করুন', desc: lang === 'en' ? 'Fill out your details' : 'আপনার বিবরণ পূরণ করুন' },
              { num: '2', title: lang === 'en' ? 'Connect' : 'সংযোগ করুন', desc: lang === 'en' ? 'Meet the community' : 'সম্প্রদায়ের সাথে সাক্ষাৎ করুন' },
              { num: '3', title: lang === 'en' ? 'Participate' : 'অংশগ্রহণ করুন', desc: lang === 'en' ? 'Join activities & events' : 'কার্যক্রম ও ইভেন্টে যোগ দিন' },
              { num: '4', title: lang === 'en' ? 'Grow' : 'বৃদ্ধি করুন', desc: lang === 'en' ? 'Transform yourself' : 'নিজেকে রূপান্তরিত করুন' }
            ].map((step, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-100 group-hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-black text-[#1E1B4B] mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-28 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-amber-300 text-xs font-bold tracking-widest uppercase mb-6">
            🌟 {lang === 'en' ? 'Ready to Join?' : 'যোগ দিতে প্রস্তুত?'}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            {lang === 'en' ? 'Be Part of the Global Movement' : 'বৈশ্বিক আন্দোলনের অংশ হন'}
          </h2>
          <p className="text-indigo-100 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'Join thousands of devotees worldwide dedicated to developing true human beings and serving humanity.'
              : 'বিশ্বব্যাপী হাজার হাজার ভক্তদের সাথে যুক্ত হন যারা প্রকৃত মানুষ গঠন এবং মানবসেবায় নিবেদিত।'}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl font-black transition-all hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
            >
              {lang === 'en' ? 'Register Now' : 'এখনই নিবন্ধন করুন'} <i className="fa-solid fa-arrow-right"></i>
            </button>
            <a 
              href="/"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-black transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
            >
              {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
