
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS, QUOTES, MOCK_EVENTS, MOCK_LIBRARY } from '../constants';

const Home: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [dailyQuote, setDailyQuote] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('all');
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

  return (
    <div className="flex flex-col pt-24 overflow-hidden">
      {/* Hero Section - Modern Gradient Design */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative px-4 pb-24 pt-12 min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-orange-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"
            style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
          ></div>
          <div className="absolute -top-20 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"
            style={{ transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)` }}
          ></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000"
            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div 
            className="lg:col-span-7 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl text-amber-300 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all cursor-default">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-pink-400 animate-pulse"></span>
              ✨ Global Spiritual Movement
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
              <span className="inline-block hover:scale-[1.02] transition-transform duration-300">To Be Good</span> <br /> 
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 text-transparent bg-clip-text">& To Do Good</span>
            </h1>
            
            <p className="text-lg md:text-xl text-amber-50 mb-12 max-w-2xl leading-relaxed font-light">
              {t.hero.heroParagraph || 'Join a global community inspired by Swami Vivekananda\'s timeless wisdom. Transform yourself and serve humanity through education, spirituality, and selfless service.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/membership" 
                className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-black transition-all hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 text-center min-w-[180px] md:min-w-[200px] hover:scale-105"
              >
                {t.hero.cta1}
              </Link>
              <Link 
                to="/about" 
                className="px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-black transition-all hover:bg-white/20 hover:border-white/50 text-center min-w-[180px] md:min-w-[200px] hover:scale-105"
              >
                {t.hero.cta2}
              </Link>
            </div>
          </div>

          <div 
            className="lg:col-span-5 relative transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-400/20 via-pink-400/20 to-cyan-400/20 rounded-[4rem] blur-3xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:rotate-0 transition-all duration-1000 aspect-[4/5] border-8 border-white/20 backdrop-blur">
                 <img 
                  src="https://github.com/Vivek35823/Vivek/blob/main/images/pow.png" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                  alt="Swami Vivekananda Inspired"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -right-8 top-1/4 z-20 animate-float bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl border border-white/50 hidden md:block hover:scale-110 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-lg">
                    <i className="fa-solid fa-heart text-sm"></i>
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-indigo-900">Compassion</div>
                </div>
              </div>
              <div className="absolute -left-12 bottom-1/4 z-20 animate-float animation-delay-2000 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl border border-white/50 hidden md:block hover:scale-110 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg">
                    <i className="fa-solid fa-lightbulb text-sm"></i>
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-indigo-900">Wisdom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom Section - Premium Design */}
      <section className="relative py-28 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-amber-300 text-xs font-bold tracking-widest uppercase mb-8">
            💎 Daily Inspiration
          </div>
          
          <i className="fa-solid fa-quote-left text-6xl text-amber-400 mb-8 opacity-60 inline-block"></i>
          <h2 className={`text-3xl md:text-5xl font-black mb-10 leading-tight text-white ${lang === 'bn' ? 'bn leading-relaxed' : ''}`}>
            "{dailyQuote}"
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-pink-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-amber-300 font-bold tracking-[0.2em] uppercase text-sm mb-6">~ Swami Vivekananda</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-bold text-amber-300 mb-2">Strength</h3>
              <p className="text-white/70 text-sm">Build inner power and resilience</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-bold text-pink-300 mb-2">Service</h3>
              <p className="text-white/70 text-sm">Serve humanity with dedication</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-cyan-300 mb-2">Wisdom</h3>
              <p className="text-white/70 text-sm">Embrace knowledge and growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats/Features - Enhanced */}
      <section className="py-28 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-amber-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-4">Global Impact</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Join thousands of devotees making a difference worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Countries', value: '15+', icon: 'fa-earth-asia', color: 'from-amber-400 to-orange-500', lightColor: 'from-amber-50 to-orange-50' },
              { label: 'Active Devotees', value: '10K+', icon: 'fa-users', color: 'from-pink-400 to-rose-500', lightColor: 'from-pink-50 to-rose-50' },
              { label: 'Scholarships', value: '500+', icon: 'fa-graduation-cap', color: 'from-cyan-400 to-blue-500', lightColor: 'from-cyan-50 to-blue-50' },
              { label: 'Daily Prayers', value: '24/7', icon: 'fa-om', color: 'from-purple-400 to-indigo-500', lightColor: 'from-purple-50 to-indigo-50' }
            ].map((stat, i) => (
              <div key={i} className={`group bg-gradient-to-br ${stat.lightColor} rounded-3xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-default`}>
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <div className="text-4xl font-black text-[#1E1B4B] mb-2 text-center">{stat.value}</div>
                <div className="text-sm font-bold text-slate-600 uppercase tracking-widest text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayers/Study Circle Section - Modern Design */}
      <section className="py-28 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-pink-300 text-xs font-bold tracking-widest uppercase mb-6">
              🧘 Collective Wellness
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Global Prayer Sessions</h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">Join our synchronized worldwide meditation for peace and spiritual growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-3xl p-10 hover:bg-white/15 hover:border-white/40 transition-all hover:shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-xl">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-2">{t.prayers.schedule}</h3>
                  <p className="text-indigo-100 text-sm">{t.prayers.scheduleDesc}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <p className="text-pink-300 font-bold text-sm">Every Sunday</p>
                <p className="text-pink-300 font-bold text-sm">5:00 PM UTC</p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-3xl p-10 hover:bg-white/15 hover:border-white/40 transition-all hover:shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-xl">
                  <i className="fa-solid fa-laptop"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-2">{t.prayers.techRequirements}</h3>
                  <p className="text-indigo-100 text-sm">{t.prayers.techDesc}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-cyan-300 font-bold text-sm flex items-center gap-2">
                  <i className="fa-solid fa-check"></i> Internet • Headphones • Quiet Space
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/prayers" className="px-12 py-5 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-2xl hover:shadow-rose-500/50 transition-all hover:-translate-y-1 hover:scale-105">
              Join Prayer Session <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview Section - Modern Cards */}
      <section className="py-28 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <div className="inline-block px-5 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-amber-200">
                📅 Upcoming Gatherings
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight">{t.events.pageTitle}</h2>
            </div>
            <Link to="/events" className="hidden md:inline-flex items-center gap-2 text-amber-600 font-black hover:gap-4 transition-all mt-6 md:mt-0 hover:text-amber-700">
              View All Events <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {MOCK_EVENTS.slice(0, 3).map((event, i) => (
              <div key={i} className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 group-hover:via-pink-400 transition-all"></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                      <span className="text-xs font-black text-amber-600 uppercase">{event.category}</span>
                    </div>
                    <i className="fa-solid fa-calendar text-amber-200 text-lg group-hover:scale-110 transition-transform"></i>
                  </div>
                  <h3 className="text-xl font-black text-[#1E1B4B] mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">{lang === 'en' ? event.title : event.titleBn}</h3>
                  <p className="text-sm text-slate-600 mb-6 line-clamp-2">{lang === 'en' ? event.description : event.descriptionBn}</p>
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-bold">{event.date}</span>
                    <i className="fa-solid fa-arrow-right text-amber-400 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center md:hidden">
            <Link to="/events" className="px-12 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1">
              View All Events <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Library Preview Section - Rich Design */}
      <section className="py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-indigo-200">
                📚 Digital Archives
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight">{t.library.pageTitle}</h2>
            </div>
            <Link to="/library" className="hidden md:inline-flex items-center gap-2 text-indigo-600 font-black hover:gap-4 transition-all mt-6 md:mt-0 hover:text-indigo-700">
              Explore Library <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <p className="text-slate-600 text-lg max-w-3xl mb-12">{t.library.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {MOCK_LIBRARY.slice(0, 4).map((item, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {item.imageUrl && (
                  <div className="h-40 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                    <img 
                      src={item.imageUrl} 
                      alt={lang === 'en' ? item.title : item.titleBn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-600"></div>
                    <span className="text-xs font-black text-indigo-600 uppercase">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#1E1B4B] mb-3">{lang === 'en' ? item.title : item.titleBn}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">{lang === 'en' ? item.description : item.descriptionBn}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase">{lang === 'en' ? item.author : item.authorBn}</span>
                    <button 
                      onClick={() => window.open(`/library/library-${item.id}.html`, '_blank')}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                    >
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/library" className="px-12 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-xl hover:shadow-indigo-500/50 transition-all hover:-translate-y-1 hover:scale-105">
              Explore Full Library <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarships Preview Section - Modern Design */}
      <section className="py-28 bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-300/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <div className="inline-block px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-blue-200">
                🎓 Educational Support
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight">Scholarship Opportunities</h2>
            </div>
            <Link to="/scholarships" className="hidden md:inline-flex items-center gap-2 text-blue-600 font-black hover:gap-4 transition-all mt-6 md:mt-0 hover:text-blue-700">
              Apply Now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Education & Merit",
                amount: "-----/year",
                desc: "Supporting meritorious students with excellent academic performance",
                icon: "fa-book",
                color: 'from-blue-400 to-cyan-500',
                lightColor: 'from-blue-50 to-cyan-50'
              },
              {
                title: "Medical Service",
                amount: "------/year",
                desc: "Supporting medical students and aspiring healthcare professionals",
                icon: "fa-stethoscope",
                color: 'from-green-400 to-emerald-500',
                lightColor: 'from-green-50 to-emerald-50'
              },
              {
                title: "Bibek Charcha Fund",
                amount: "------/year",
                desc: "For philosophy, spirituality, and Vedantic studies students",
                icon: "fa-lightbulb",
                color: 'from-purple-400 to-pink-500',
                lightColor: 'from-purple-50 to-pink-50'
              }
            ].map((scholarship, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${scholarship.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`relative bg-gradient-to-br ${scholarship.lightColor} rounded-3xl p-8 border border-white/50 group-hover:border-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${scholarship.color} flex items-center justify-center text-white text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <i className={`fa-solid ${scholarship.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-black text-[#1E1B4B] mb-3">{scholarship.title}</h3>
                  <div className={`text-sm font-black bg-gradient-to-r ${scholarship.color} text-transparent bg-clip-text mb-4`}>{scholarship.amount}</div>
                  <p className="text-slate-600 text-sm flex-grow">{scholarship.desc}</p>
                  <div className="pt-6 mt-6 border-t border-white/50">
                    <Link to="/scholarships" className="text-slate-700 font-bold text-sm hover:text-[#1E1B4B] flex items-center gap-2 group/link transition-colors">
                      Learn More <i className="fa-solid fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/scholarships" className="px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-xl hover:shadow-blue-500/50 transition-all hover:-translate-y-1 hover:scale-105">
              View All Scholarships <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section - Modern Dark Theme */}
      <section className="py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-amber-300 text-xs font-bold tracking-widest uppercase mb-6">
                🏛️ Our Organization
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">About VIVEK Foundation</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Inspired by the life and teachings of Swami Vivekananda, the VIVEK Foundation is dedicated to developing true human beings and serving humanity through education, spiritual guidance, and social service.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 group-hover:text-amber-300 transition-colors">Self-Development Activities</h4>
                    <p className="text-slate-400 text-sm">Study circles, book reading, courses, and wellness programs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 group-hover:text-pink-300 transition-colors">Service Activities</h4>
                    <p className="text-slate-400 text-sm">Education services, medical support, disaster relief, and humanitarian work</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 group-hover:text-cyan-300 transition-colors">Global Community</h4>
                    <p className="text-slate-400 text-sm">15+ countries with 10,000+ active devotees working together</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-black hover:shadow-2xl hover:shadow-orange-500/50 transition-all inline-flex items-center gap-3 hover:-translate-y-1">
                Learn Our Story <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-3xl p-8 border border-white/20 h-full">
                <div className="space-y-6 h-full flex flex-col justify-center">
                  <div className="text-6xl text-center text-amber-400 mb-4">
                    <i className="fa-solid fa-hands-praying"></i>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-amber-400/30 to-transparent rounded-full w-3/4 mx-auto"></div>
                    <div className="h-4 bg-gradient-to-r from-pink-400/30 to-transparent rounded-full w-full"></div>
                    <div className="h-4 bg-gradient-to-r from-cyan-400/30 to-transparent rounded-full w-5/6 mx-auto"></div>
                    <div className="h-4 bg-gradient-to-r from-amber-400/20 to-transparent rounded-full w-4/5 mx-auto"></div>
                  </div>
                  <p className="text-slate-300 text-center text-sm mt-6">
                    "To be good & to do good" - Swami Vivekananda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Premium Design */}
      <section className="py-28 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-4">Ready to Join Us?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Be part of a global movement dedicated to personal transformation and serving humanity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Membership CTA */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 md:p-12 border-2 border-white/60 group-hover:border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-3xl mb-8 shadow-xl group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1E1B4B] mb-4">Join Our Community</h3>
                <p className="text-slate-700 mb-8 flex-grow leading-relaxed">Become a member and be part of this global movement for spiritual and social transformation. Grow with us and serve humanity together.</p>
                <Link to="/membership" className="px-8 py-4 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-xl font-black hover:shadow-xl hover:shadow-orange-400/50 transition-all inline-flex items-center gap-3 group/btn w-full justify-center hover:-translate-y-1">
                  Become a Member <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>

            {/* Donation CTA */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 md:p-12 border-2 border-white/60 group-hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl mb-8 shadow-xl group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1E1B4B] mb-4">Support Our Mission</h3>
                <p className="text-slate-700 mb-8 flex-grow leading-relaxed">Your contribution helps us serve more communities, provide scholarships, and support those in need. Every donation makes a difference.</p>
                <Link to="/donation" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-black hover:shadow-xl hover:shadow-indigo-500/50 transition-all inline-flex items-center gap-3 group/btn w-full justify-center hover:-translate-y-1">
                  Make a Donation <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
