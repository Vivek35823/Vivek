
import React, { useState } from 'react';
import { useLanguage } from '../App';
import { TRANSLATIONS, MOCK_EVENTS } from '../constants';

const Prayers: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const nextPrayer = MOCK_EVENTS.find(e => e.category === 'Prayer');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="pt-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pb-12 pt-8 min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full px-6">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl text-pink-300 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"></span>
              🧘 Spiritual Practice
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tighter">
                {t.prayers.title}
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 leading-relaxed font-light max-w-2xl">
                {t.prayers.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={nextPrayer?.meetingLink || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-xl font-black transition-all hover:shadow-2xl hover:shadow-pink-500/50 transform hover:-translate-y-1 hover:scale-105"
              >
                {t.prayers.joinBtn} <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <button 
                onClick={() => handleCopyLink(nextPrayer?.meetingLink || '')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-black transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
              >
                <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                <span className="ml-2">{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600" 
                alt="Meditation & Prayer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Prayer Session */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-10 w-40 h-40 bg-pink-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-pink-100 text-pink-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-pink-200">
              ⏰ Next Session
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight mb-4">Next Prayer Session</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.prayers.scheduleDesc}</p>
          </div>

          {nextPrayer && (
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12 border-2 border-white/60 group-hover:border-pink-300 hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  {/* Date */}
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center md:flex w-full md:w-auto gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-lg shadow-lg">
                        <i className="fa-solid fa-calendar"></i>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Date</p>
                    <p className="text-2xl font-black text-[#1E1B4B]">{nextPrayer.date}</p>
                  </div>

                  {/* Time */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-full md:w-auto gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-lg shadow-lg">
                        <i className="fa-solid fa-clock"></i>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Time</p>
                    <p className="text-2xl font-black text-[#1E1B4B]">{nextPrayer.time}</p>
                  </div>

                  {/* Location */}
                  <div className="text-center md:text-right">
                    <div className="inline-flex items-center justify-center md:flex md:justify-end w-full md:w-auto gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-lg shadow-lg">
                        <i className="fa-solid fa-globe"></i>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Format</p>
                    <p className="text-2xl font-black text-[#1E1B4B]">{nextPrayer.location}</p>
                  </div>
                </div>

                <div className="pt-10 border-t-2 border-white/50">
                  <p className="text-slate-700 mb-8 leading-relaxed">{nextPrayer.description}</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <a 
                      href={nextPrayer.meetingLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-5 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl font-black hover:shadow-xl hover:shadow-pink-400/50 transition-all inline-flex items-center justify-center gap-3 group/btn hover:-translate-y-1"
                    >
                      Join Now <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                    </a>
                    <button 
                      onClick={() => handleCopyLink(nextPrayer.meetingLink)}
                      className="px-8 py-5 bg-white border-2 border-slate-200 text-[#1E1B4B] rounded-2xl font-black hover:border-pink-400 hover:bg-pink-50 transition-all"
                    >
                      <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                      <span className="ml-2">{copied ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Monthly Schedule */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-indigo-200">
              📅 Schedule
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight mb-4">Prayer Schedule - January 2025</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Join us every Sunday for our synchronized global prayer session</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { date: 'January 5, 2025', time: '5:00 PM UTC', status: 'Upcoming' },
              { date: 'January 12, 2025', time: '5:00 PM UTC', status: 'Upcoming' },
              { date: 'January 19, 2025', time: '5:00 PM UTC', status: 'Upcoming' },
              { date: 'January 26, 2025', time: '5:00 PM UTC', status: 'Upcoming' },
            ].map((session, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-2">Session Date</p>
                      <h3 className="text-2xl font-black text-[#1E1B4B]">{session.date}</h3>
                    </div>
                    <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold uppercase tracking-widest">
                      {session.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                    <i className="fa-solid fa-clock text-indigo-500 text-lg"></i>
                    <span className="font-bold text-slate-700">{session.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-cyan-200">
              ℹ️ Important Information
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight">How to Prepare</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Requirements */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-white/60 group-hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-laptop"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">{t.prayers.techRequirements}</h3>
                <p className="text-slate-700 mb-6 flex-grow leading-relaxed">{t.prayers.techDesc}</p>
                <div className="pt-6 border-t border-white/50">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                      Stable Internet Connection
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                      Quality Headphones
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                      Quiet Environment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Etiquette */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-white/60 group-hover:border-purple-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-hands-praying"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">{t.prayers.etiquette}</h3>
                <p className="text-slate-700 mb-6 flex-grow leading-relaxed">{t.prayers.etiquetteDesc}</p>
                <div className="pt-6 border-t border-white/50">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></span>
                      Mute Microphone Unless Speaking
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></span>
                      Camera Optional but Encouraged
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></span>
                      Respectful Participation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-white/60 group-hover:border-green-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">Benefits of Joining</h3>
                <p className="text-slate-700 mb-6 flex-grow leading-relaxed">Experience peace, mindfulness, and spiritual growth with our global community</p>
                <div className="pt-6 border-t border-white/50">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></span>
                      Inner Peace & Mindfulness
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></span>
                      Spiritual Community
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></span>
                      Global Connection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to Join Us?</h2>
          <p className="text-indigo-100 text-lg mb-10 leading-relaxed">Save the date, prepare your environment, and join thousands of devotees in this transformative spiritual practice</p>
          <a 
            href={nextPrayer?.meetingLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-2xl hover:shadow-pink-500/50 transition-all hover:-translate-y-1 hover:scale-105"
          >
            Join Next Session <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Prayers;
