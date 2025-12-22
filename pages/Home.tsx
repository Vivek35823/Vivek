
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS, QUOTES } from '../constants';

const Home: React.FC = () => {
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

  return (
    <div className="flex flex-col pt-24 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative px-4 pb-20 pt-10 min-h-[90vh] flex items-center overflow-hidden"
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
          <div className="absolute inset-0 bg-dot-pattern"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div 
            className="lg:col-span-7 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-amber-100 shadow-sm">
              <span className="w-2 h-2 rounded-full saffron-gradient animate-pulse"></span>
              {t.hero.tagline}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-[#1E1B4B] mb-8 leading-[0.9] tracking-tighter">
              <span className="inline-block hover:scale-[1.02] transition-transform">{t.hero.title}</span> <br /> 
              <span className="text-amber-600 italic serif relative">
                {t.hero.subtitle}
                <svg className="absolute -bottom-4 left-0 w-full h-4 text-amber-200" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <path d="M0 15C50 5 150 25 200 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-light">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/membership" 
                className="px-10 py-5 saffron-gradient text-white rounded-2xl font-black transition-all hover:shadow-2xl hover:shadow-orange-200 transform hover:-translate-y-1 text-center min-w-[200px] shine-effect"
              >
                {t.hero.cta1}
              </Link>
              <Link 
                to="/about" 
                className="px-10 py-5 bg-white border border-slate-200 text-slate-800 rounded-2xl font-black transition-all hover:bg-slate-50 hover:border-amber-200 text-center min-w-[200px]"
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
              <div className="absolute -inset-4 bg-amber-500/10 rounded-[4rem] blur-2xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-1000 aspect-[4/5] border-8 border-white">
                 <img 
                  src="\images\abc.jpg" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                  alt="Swami Vivekananda Inspired"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -right-8 top-1/4 z-20 animate-float bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full saffron-gradient flex items-center justify-center text-white">
                    <i className="fa-solid fa-heart text-xs"></i>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Compassion</div>
                </div>
              </div>
              <div className="absolute -left-12 bottom-1/4 z-20 animate-float animation-delay-2000 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full indigo-gradient flex items-center justify-center text-white">
                    <i className="fa-solid fa-brain text-xs"></i>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Wisdom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom Section */}
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

      {/* Quick Stats/Features */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Countries', value: '15+', icon: 'fa-earth-asia' },
              { label: 'Active Devotees', value: '10K+', icon: 'fa-users' },
              { label: 'Scholarships', value: '500+', icon: 'fa-graduation-cap' },
              { label: 'Daily Prayers', value: '24/7', icon: 'fa-om' }
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

      {/* Prayers Quick Access */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">{t.prayers.title}</h2>
          <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">{t.prayers.desc}</p>
          <Link to="/prayers" className="px-12 py-5 saffron-gradient text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1">
             {t.nav.prayers} <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
