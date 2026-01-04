
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const Navbar: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.prayers, path: '/prayers' },
    { name: t.nav.events, path: '/events' },
    { name: t.nav.library, path: '/library' },
    { name: t.nav.scholarships, path: '/scholarships' },
    { name: t.nav.aboutUs, path: '/about' },
    { name: t.nav.join, path: '/membership' },
    { name: t.nav.donate, path: '/donation' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`mx-auto px-4 transition-all duration-500 ${scrolled ? 'max-w-5xl' : 'max-w-7xl'}`}>
        <div className="glass border border-white/20 rounded-[2rem] shadow-lg px-6 flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/VIVEK.png" alt="VIVEK Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-[#1E1B4B] tracking-tight hidden sm:inline">VIVEK</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  location.pathname === link.path ? 'text-white saffron-gradient' : 'text-slate-600 hover:text-amber-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="ml-4 px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-200 transition-colors uppercase tracking-widest border border-slate-200"
            >
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="text-xs font-black text-slate-400"
            >
              {lang === 'en' ? 'BN' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600"><i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i></button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2">
          <div className="glass rounded-3xl p-4 shadow-2xl border border-white/30">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block px-4 py-3 font-bold text-slate-700 hover:text-amber-600">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
