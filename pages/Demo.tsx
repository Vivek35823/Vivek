import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS, QUOTES, MOCK_EVENTS, MOCK_LIBRARY, SCHOLARSHIPS } from '../constants';

const Demo: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [dailyQuote, setDailyQuote] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDailyQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const getTitle = (item: any) => lang === 'en' ? item.title : (item.titleBn || item.title);
  const getAuthor = (item: any) => lang === 'en' ? item.author : (item.authorBn || item.author);
  const getDescription = (item: any) => lang === 'en' ? item.description : (item.descriptionBn || item.description);
  const getEventLocation = (item: any) => lang === 'en' ? item.location : (item.locationBn || item.location);
  const getEventDate = (item: any) => item.date;

  return (
    <div className="flex flex-col pt-24 overflow-hidden">
      {/* ===================== SECTION 1: HERO SECTION ===================== */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative px-4 pb-20 pt-10 min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-white"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
          ></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            style={{ transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)` }}
          ></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div 
            className="lg:col-span-7 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-amber-100 shadow-sm">
              <span className="w-2 h-2 rounded-full saffron-gradient animate-pulse"></span>
              {lang === 'en' ? 'Demo Showcase' : 'ডেমো প্রদর্শনী'}
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-[#1E1B4B] mb-8 leading-[0.9] tracking-tighter">
              {lang === 'en' ? 'Explore All' : 'সব অন্বেষণ করুন'}<br /> 
              <span className="text-amber-600 italic serif relative">
                {lang === 'en' ? 'Sections' : 'বিভাগ'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-light">
              {lang === 'en' 
                ? 'Discover all features and sections available on the VIVEK Foundation platform.' 
                : 'VIVEK ফাউন্ডেশন প্ল্যাটফর্মে উপলব্ধ সমস্ত বৈশিষ্ট্য এবং বিভাগ আবিষ্কার করুন।'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/" 
                className="px-10 py-5 saffron-gradient text-white rounded-2xl font-black transition-all hover:shadow-2xl hover:shadow-orange-200 transform hover:-translate-y-1 text-center min-w-[200px]"
              >
                {lang === 'en' ? 'Back to Home' : 'হোম এ ফিরুন'}
              </Link>
            </div>
          </div>

          <div 
            className="lg:col-span-5 relative transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-[4rem] blur-2xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-1000 aspect-[4/5] border-8 border-white">
                <img 
                  src="/Vivek/images/abc.jpg" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                  alt="VIVEK Foundation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2: WISDOM/QUOTE ===================== */}
      <section className="bg-[#1E1B4B] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <i className="fa-solid fa-quote-left text-5xl text-amber-500 mb-8 opacity-50"></i>
          <h2 className={`text-3xl md:text-5xl font-black mb-10 leading-tight serif italic ${lang === 'bn' ? 'bn leading-normal' : ''}`}>
            "{dailyQuote}"
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">Swami Vivekananda</p>
        </div>
      </section>

      {/* ===================== SECTION 3: STATISTICS ===================== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-16 text-center tracking-tight">
            {lang === 'en' ? 'Our Impact' : 'আমাদের প্রভাব'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: lang === 'en' ? 'Countries' : 'দেশ', value: '15+', icon: 'fa-earth-asia' },
              { label: lang === 'en' ? 'Active Devotees' : 'সক্রিয় অনুসারী', value: '10K+', icon: 'fa-users' },
              { label: lang === 'en' ? 'Scholarships' : 'বৃত্তি', value: '500+', icon: 'fa-graduation-cap' },
              { label: lang === 'en' ? 'Daily Prayers' : 'দৈনিক প্রার্থনা', value: '24/7', icon: 'fa-om' }
            ].map((stat, i) => (
              <div key={i} className="text-center group p-8 rounded-3xl hover:bg-slate-50 transition-colors">
                <div className="w-14 h-14 mx-auto mb-6 saffron-gradient rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <div className="text-3xl font-black text-[#1E1B4B] mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4: EVENTS PREVIEW ===================== */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
                {t.events.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight">
                {t.events.pageTitle}
              </h2>
            </div>
            <Link to="/events" className="px-8 py-4 saffron-gradient text-white rounded-xl font-black hover:shadow-lg transition-all">
              {lang === 'en' ? 'View All' : 'সব দেখুন'} →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_EVENTS.slice(0, 3).map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="h-40 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={getTitle(event)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-black text-[#1E1B4B] mb-3 line-clamp-2">
                    {getTitle(event)}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-calendar text-amber-600"></i>
                      {getEventDate(event)}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-clock text-amber-600"></i>
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-amber-600"></i>
                      {getEventLocation(event)}
                    </div>
                  </div>

                  <a 
                    href={event.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 saffron-gradient text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all block text-center"
                  >
                    {lang === 'en' ? 'Join Event' : 'ইভেন্টে যোগ দিন'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5: LIBRARY PREVIEW ===================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
                {t.library.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight">
                {t.library.pageTitle}
              </h2>
            </div>
            <Link to="/library" className="px-8 py-4 saffron-gradient text-white rounded-xl font-black hover:shadow-lg transition-all">
              {lang === 'en' ? 'View All' : 'সব দেখুন'} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_LIBRARY.slice(0, 3).map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-amber-200 transition-all duration-500 flex flex-col"
              >
                {item.imageUrl && (
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                    <img 
                      src={item.imageUrl} 
                      alt={getTitle(item)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 saffron-gradient rounded-full"></div>
                    <span className="text-xs font-black text-amber-600 uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#1E1B4B] mb-3 line-clamp-2 serif">
                    {getTitle(item)}
                  </h3>

                  <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                    {getDescription(item)}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      {getAuthor(item)}
                    </span>
                    <button 
                      onClick={() => window.open(`/library/library-${item.id}.html`, '_blank')}
                      className="w-11 h-11 rounded-full saffron-gradient text-white flex items-center justify-center hover:scale-110 shadow-md hover:shadow-lg transition-all"
                    >
                      <i className="fa-solid fa-arrow-right text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 6: SCHOLARSHIPS PREVIEW ===================== */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
              {lang === 'en' ? 'Educational Support' : 'শিক্ষা সহায়তা'}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight mb-4">
              {lang === 'en' ? 'Scholarships' : 'বৃত্তি'}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Support students in their journey towards education and excellence.' 
                : 'শিক্ষা এবং উৎকর্ষতার দিকে শিক্ষার্থীদের যাত্রায় সহায়তা করুন।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SCHOLARSHIPS.map((scholarship) => (
              <div 
                key={scholarship.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 saffron-gradient rounded-xl flex items-center justify-center text-white text-xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-award"></i>
                </div>

                <h3 className="text-lg md:text-xl font-black text-[#1E1B4B] mb-3">
                  {lang === 'en' ? scholarship.name : scholarship.nameBn}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                  {lang === 'en' ? scholarship.description : scholarship.descriptionBn}
                </p>

                <div className="space-y-3 mb-6 py-6 border-t border-b border-slate-100 text-sm">
                  <div>
                    <span className="text-amber-600 font-bold">{lang === 'en' ? 'Amount:' : 'পরিমাণ:'}</span>
                    <p className="text-slate-700">{lang === 'en' ? scholarship.amount : scholarship.amountBn}</p>
                  </div>
                  <div>
                    <span className="text-amber-600 font-bold">{lang === 'en' ? 'Deadline:' : 'সময়সীমা:'}</span>
                    <p className="text-slate-700">{lang === 'en' ? scholarship.deadline : scholarship.deadlineBn}</p>
                  </div>
                </div>

                <Link 
                  to="/scholarship-apply"
                  className="w-full py-3 saffron-gradient text-white rounded-xl font-black hover:shadow-lg transition-all text-center text-sm"
                >
                  {lang === 'en' ? 'Apply Now' : 'এখনই আবেদন করুন'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 7: PRAYERS/STUDY CIRCLE ===================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
                {t.prayers.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">
                {t.prayers.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {t.prayers.desc}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <i className="fa-solid fa-check text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-[#1E1B4B] mb-1">{t.prayers.schedule}</h3>
                    <p className="text-slate-600 text-sm">{t.prayers.scheduleDesc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <i className="fa-solid fa-check text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-[#1E1B4B] mb-1">{t.prayers.techRequirements}</h3>
                    <p className="text-slate-600 text-sm">{t.prayers.techDesc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <i className="fa-solid fa-check text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-[#1E1B4B] mb-1">{t.prayers.etiquette}</h3>
                    <p className="text-slate-600 text-sm">{t.prayers.etiquetteDesc}</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/prayers"
                className="px-8 py-4 saffron-gradient text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                {t.nav.prayers} <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                <div className="aspect-video bg-gradient-to-br from-indigo-900 to-amber-900 flex items-center justify-center text-white text-6xl">
                  <i className="fa-solid fa-om opacity-20"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 8: ABOUT PREVIEW ===================== */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
              {t.about.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight mb-4">
              {t.about.pageTitle}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {t.about.ideologyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: 'fa-book-open',
                title: lang === 'en' ? 'Self-Development' : 'আত্ম-উন্নয়ন',
                desc: lang === 'en' 
                  ? 'Study circles, workshops, and personal growth programs inspired by Swami Vivekananda\'s teachings.'
                  : 'স্বামী বিবেকানন্দের শিক্ষা দ্বারা অনুপ্রাণিত অধ্যয়ন বৃত্ত, কর্মশালা এবং ব্যক্তিগত বৃদ্ধির প্রোগ্রাম।'
              },
              {
                icon: 'fa-hands-holding-heart',
                title: lang === 'en' ? 'Service Activities' : 'সেবামূলক কার্যক্রম',
                desc: lang === 'en' 
                  ? 'Education, medical, disaster relief, and humanitarian services for underprivileged communities.'
                  : 'দুর্বল সম্প্রদায়ের জন্য শিক্ষা, চিকিৎসা, দুর্যোগ ত্রাণ এবং মানবিক সেবা।'
              },
              {
                icon: 'fa-globe',
                title: lang === 'en' ? 'Global Community' : 'বৈশ্বিক সম্প্রদায়',
                desc: lang === 'en' 
                  ? 'Connected devotees from 15+ countries working together for a better world.'
                  : 'একটি উন্নত বিশ্বের জন্য ১৫+ দেশের সংযুক্ত অনুসারীরা একসাথে কাজ করছেন।'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group text-center">
                <div className="w-16 h-16 saffron-gradient rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-black text-[#1E1B4B] mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/about"
              className="px-10 py-5 saffron-gradient text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
            >
              {lang === 'en' ? 'Learn More About Us' : 'আমাদের সম্পর্কে আরও জানুন'} <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 9: CALL TO ACTION ===================== */}
      <section className="py-24 bg-[#1E1B4B] text-white border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Membership CTA */}
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl p-8 md:p-12 border border-amber-500/30 group hover:border-amber-500/60 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl saffron-gradient flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-user-plus"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                {lang === 'en' ? 'Become a Member' : 'সদস্য হন'}
              </h3>
              <p className="text-amber-100 mb-6 leading-relaxed">
                {lang === 'en' 
                  ? 'Join our global community of devotees and participate in our mission of strength and service.'
                  : 'আমাদের বৈশ্বিক অনুসারীদের সম্প্রদায়ে যোগদান করুন এবং শক্তি এবং সেবার আমাদের মিশনে অংশগ্রহণ করুন।'}
              </p>
              <Link 
                to="/membership"
                className="px-10 py-4 bg-white text-[#1E1B4B] rounded-2xl font-black hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                {lang === 'en' ? 'Start Membership' : 'সদস্যপদ শুরু করুন'} <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            {/* Donation CTA */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl p-8 md:p-12 border border-indigo-500/30 group hover:border-indigo-500/60 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                {lang === 'en' ? 'Make a Donation' : 'দান করুন'}
              </h3>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                {lang === 'en' 
                  ? 'Support our educational, medical, and humanitarian programs across the globe.'
                  : 'বিশ্বব্যাপী আমাদের শিক্ষা, চিকিৎসা এবং মানবিক প্রোগ্রামগুলি সমর্থন করুন।'}
              </p>
              <Link 
                to="/donation"
                className="px-10 py-4 bg-white text-[#1E1B4B] rounded-2xl font-black hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                {lang === 'en' ? 'Donate Now' : 'এখনই দান করুন'} <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 10: FEATURES SUMMARY ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#1E1B4B] text-center mb-12">
            {lang === 'en' ? 'Platform Features' : 'প্ল্যাটফর্ম বৈশিষ্ট্য'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'fa-calendar-alt', name: lang === 'en' ? 'Events' : 'অনুষ্ঠান' },
              { icon: 'fa-book', name: lang === 'en' ? 'Library' : 'গ্রন্থাগার' },
              { icon: 'fa-graduation-cap', name: lang === 'en' ? 'Scholarships' : 'বৃত্তি' },
              { icon: 'fa-om', name: lang === 'en' ? 'Prayer Circle' : 'প্রার্থনা সভা' },
              { icon: 'fa-users', name: lang === 'en' ? 'Community' : 'সম্প্রদায়' },
              { icon: 'fa-heart', name: lang === 'en' ? 'Donations' : 'দান' },
              { icon: 'fa-user-tie', name: lang === 'en' ? 'Membership' : 'সদস্যপদ' },
              { icon: 'fa-globe', name: lang === 'en' ? 'Global Network' : 'বৈশ্বিক নেটওয়ার্ক' }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg saffron-gradient flex items-center justify-center text-white">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <span className="font-bold text-slate-700">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
