
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].about;

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
              📖 {t.subtitle}
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tighter">
                {t.pageTitle}
              </h1>
              <p className="text-lg md:text-xl text-amber-50 leading-relaxed font-light max-w-3xl mx-auto">
                {lang === 'en' 
                  ? 'Inspired by Swami Vivekananda, we build a global community dedicated to developing true human beings and serving humanity.'
                  : 'স্বামী বিবেকানন্দের অনুপ্রেরণায় আমরা প্রকৃত মানুষ গঠন এবং মানবসেবার জন্য একটি বৈশ্বিক সম্প্রদায় গড়ে তুলছি।'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/membership"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-black transition-all hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-105"
              >
                {lang === 'en' ? 'Become a Member' : 'সদস্য হন'}
              </Link>
              <a 
                href="#mission"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-black transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
              >
                {lang === 'en' ? 'Our Mission' : 'আমাদের মিশন'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Description Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-amber-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-amber-200">
              🏢 Organization
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">{t.orgDescription}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.orgName}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Organization Name */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-white/60 group-hover:border-amber-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-building"></i>
                </div>
                <h3 className="text-xl font-black text-[#1E1B4B] mb-4">{lang === 'en' ? 'English Name' : 'বাংলা নাম'}</h3>
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">{lang === 'en' ? t.nameEn : t.nameBn}</p>
              </div>
            </div>

            {/* Founded Date */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-white/60 group-hover:border-purple-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-calendar"></i>
                </div>
                <h3 className="text-xl font-black text-[#1E1B4B] mb-4">{t.foundedDate}</h3>
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">{lang === 'en' ? '2024' : '२०२४'}</p>
              </div>
            </div>

            {/* Address */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-white/60 group-hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h3 className="text-xl font-black text-[#1E1B4B] mb-4">{lang === 'en' ? 'Location' : 'অবস্থান'}</h3>
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">{t.addressOnline}</p>
              </div>
            </div>

            {/* Organization Type */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border-2 border-white/60 group-hover:border-green-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3 className="text-xl font-black text-[#1E1B4B] mb-4">{lang === 'en' ? 'Type' : 'ধরন'}</h3>
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">{t.orgTypeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideology & Objectives Section */}
      <section className="py-28 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-amber-100/20 text-amber-300 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-amber-400/30 backdrop-blur">
              💡 {t.ideology}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t.ideologyTitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ideology Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-3xl p-10 group-hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3 className="text-2xl font-black text-amber-300 mb-6">{t.ideologyTitle}</h3>
                <p className="text-white/80 leading-relaxed text-lg">{t.ideologyDesc}</p>
              </div>
            </div>

            {/* Objectives Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-3xl p-10 group-hover:border-cyan-400/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="text-2xl font-black text-cyan-300 mb-4">{t.objectives}</h3>
                <p className="text-white/80 leading-relaxed mb-6 text-lg">{t.objectivesDesc}</p>
                <ul className="space-y-4">
                  {t.objectiveList.slice(0, 2).map((objective, index) => (
                    <li key={index} className="flex gap-3 text-white/70">
                      <span className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{index + 1}</span>
                      <span className="pt-1 text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* All Objectives Expanded */}
          <div className="mt-12 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-3xl p-10 group-hover:border-pink-400/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-black text-pink-300 mb-8">{lang === 'en' ? 'All Objectives' : 'সকল উদ্দেশ্য'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.objectiveList.map((objective, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{index + 1}</div>
                    <p className="text-white/80 text-sm leading-relaxed pt-1">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Members Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-purple-200">
              👥 {t.foundersTitle}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">{t.foundersTitle}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{lang === 'en' ? 'Democratic Leadership Model' : 'সম্মিলিত নেতৃত্ব মডেল'}</p>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-white/60 group-hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              <div className="flex gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-3xl shadow-lg flex-shrink-0">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-[#1E1B4B] mb-2">{lang === 'en' ? 'No Single Founder' : 'একক প্রতিষ্ঠাতা নেই'}</h3>
                  <p className="text-slate-600 text-sm">{lang === 'en' ? 'Collective Devotee Model' : 'সম্মিলিত ভক্তদের মডেল'}</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{t.foundersDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-28 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-blue-200">
              🚀 {t.activitiesTitle}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">{t.activitiesTitle}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.activitiesDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Self-Development Activities */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-white/60 group-hover:border-blue-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-person-hiking"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-8">{t.selfDevelopment}</h3>
                <ul className="space-y-5">
                  {t.selfDevelopmentList.map((activity, index) => (
                    <li key={index} className="flex gap-4 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</div>
                      <span className="pt-0.5 text-sm leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Activities */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-white/60 group-hover:border-green-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-8">{t.serviceActivities}</h3>
                <ul className="space-y-5">
                  {t.serviceActivitiesList.map((activity, index) => (
                    <li key={index} className="flex gap-4 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</div>
                      <span className="pt-0.5 text-sm leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
            🌟 Join Our Movement
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            {lang === 'en' ? 'Be Part of the Change' : 'পরিবর্তনের অংশীদার হন'}
          </h2>
          <p className="text-indigo-100 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'Join thousands of devotees worldwide dedicated to developing true human beings and serving humanity through education, spirituality, and selfless service.'
              : 'বিশ্বব্যাপী হাজার হাজার ভক্তদের সাথে যুক্ত হন যারা শিক্ষা, আধ্যাত্মিকতা এবং নিঃস্বার্থ সেবার মাধ্যমে প্রকৃত মানুষ গঠন এবং মানবসেবায় নিবেদিত।'}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link 
              to="/membership"
              className="px-10 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl font-black transition-all hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
            >
              {lang === 'en' ? 'Become a Member' : 'সদস্য হন'} <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link 
              to="/"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-black transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
            >
              {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
              <div className="text-4xl font-black text-amber-300 mb-3">15+</div>
              <p className="text-white/70 font-bold uppercase tracking-widest text-sm">{lang === 'en' ? 'Countries' : 'দেশ'}</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
              <div className="text-4xl font-black text-pink-300 mb-3">10K+</div>
              <p className="text-white/70 font-bold uppercase tracking-widest text-sm">{lang === 'en' ? 'Devotees' : 'ভক্ত'}</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
              <div className="text-4xl font-black text-cyan-300 mb-3">∞</div>
              <p className="text-white/70 font-bold uppercase tracking-widest text-sm">{lang === 'en' ? 'Possibilities' : 'সম্ভাবনা'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
