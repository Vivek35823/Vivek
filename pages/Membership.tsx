
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
            {lang === 'bn' ? 'আমাদের সম্প্রদায়' : 'Join Our Community'}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1E1B4B] tracking-tighter mb-6">
            {translations.pageTitle}
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {translations.pageDesc}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border-2 border-slate-200">
          {/* Left Column - Benefits */}
          <div className="bg-gradient-to-br from-[#1E1B4B] to-[#3d3a5c] p-12 md:p-20 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
              <i className="fa-solid fa-om text-[30rem] -ml-20 -mt-20"></i>
            </div>
            
            <h2 className="text-4xl font-black mb-8 tracking-tight">{translations.membershipTitle}</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-12">
              {translations.membershipDesc}
            </p>
            
            <ul className="space-y-8">
              {translations.benefits.map((item, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center text-white text-lg flex-shrink-0">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="p-12 md:p-20 flex items-center">
            {success ? (
              <div className="text-center w-full animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-2xl flex items-center justify-center text-5xl mx-auto mb-10 shadow-2xl">
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
                  className="px-10 py-4 bg-amber-600 text-white rounded-xl font-black uppercase tracking-wide hover:bg-amber-700 transition-all duration-300"
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
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-600 outline-none transition-all font-semibold"
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
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-600 outline-none transition-all font-semibold"
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
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-600 outline-none transition-all font-semibold appearance-none cursor-pointer"
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
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-600 outline-none transition-all font-semibold"
                      placeholder={lang === 'bn' ? 'উদাহরণ: ইঞ্জিনিয়ার / শিক্ষার্থী' : 'e.g., Engineer / Student'}
                      value={formData.occupation}
                      onChange={e => setFormData({...formData, occupation: e.target.value})}
                    />
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-black text-lg uppercase tracking-wide hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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

        {/* Additional Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
              <i className="fa-solid fa-globe"></i>
            </div>
            <h3 className="text-2xl font-black text-[#1E1B4B] mb-3">
              {lang === 'bn' ? 'বৈশ্বিক সম্প্রদায়' : 'Global Community'}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'bn' 
                ? 'বিশ্বের ৫০টিরও বেশি দেশের সাথে সংযুক্ত হন।'
                : 'Connect with members from 50+ countries worldwide.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
              <i className="fa-solid fa-hands-holding-circle"></i>
            </div>
            <h3 className="text-2xl font-black text-[#1E1B4B] mb-3">
              {lang === 'bn' ? 'সেবা কার্যক্রম' : 'Service Activities'}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'bn' 
                ? 'শিক্ষা, স্বাস্থ্য এবং সামাজিক কল্যাণে অবদান রাখুন।'
                : 'Contribute to education, health, and social welfare.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-2xl border-2 border-amber-300">
            <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3 className="text-2xl font-black text-[#1E1B4B] mb-3">
              {lang === 'bn' ? 'শেখার সুযোগ' : 'Learning Resources'}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'bn' 
                ? 'স্বামী বিবেকানন্দের শিক্ষা এবং জ্ঞান অ্যাক্সেস করুন।'
                : 'Access teachings and wisdom of Swami Vivekananda.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
