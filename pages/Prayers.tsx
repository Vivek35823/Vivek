
import React from 'react';
import { useLanguage } from '../App';
import { TRANSLATIONS, MOCK_EVENTS } from '../constants';

const Prayers: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const nextPrayer = MOCK_EVENTS.find(e => e.category === 'Prayer');

  return (
    <div className="pt-32 pb-20 bg-[#FCFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">{t.prayers.subtitle}</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#1E1B4B] tracking-tighter leading-none mb-8">
              {t.prayers.title} <br /> <span className="serif italic text-amber-600"></span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
              {t.prayers.desc}
            </p>

            {/* Monthly Schedule */}
            <div className="mb-10">
              <h3 className="text-2xl font-black text-[#1E1B4B] mb-6">Schedule of January</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-black text-[#1E1B4B]">January 5, 2025</span>
                  <span className="font-bold text-amber-600">6:00 PM UTC</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-black text-[#1E1B4B]">January 12, 2025</span>
                  <span className="font-bold text-amber-600">6:00 PM UTC</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-black text-[#1E1B4B]">January 19, 2025</span>
                  <span className="font-bold text-amber-600">6:00 PM UTC</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-black text-[#1E1B4B]">January 26, 2025</span>
                  <span className="font-bold text-amber-600">6:00 PM UTC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-square">
                <img src="https://t4.ftcdn.net/jpg/06/37/16/73/360_F_637167326_N4vHTVMdv9pZUcgl1uvhJVSA2xYULat9.jpg" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-white/50 shadow-xl max-w-xs">
                <p className="text-sm font-bold text-indigo-900 leading-tight">
                  {t.prayers.quote}
                </p>
             </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-[#1E1B4B] rounded-[4rem] p-12 md:p-20 text-white">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black serif italic mb-4">{t.prayers.schedule}</h2>
              <p className="text-indigo-200">{t.prayers.scheduleDesc}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {nextPrayer && (
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-amber-500/50 transition-all">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{nextPrayer.title}</h3>
                    </div>
                    <div className="px-4 py-1 bg-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest">{t.prayers.active}</div>
                  </div>
                  <p className="text-slate-400 mb-10">{nextPrayer.description}</p>
                  <a href={nextPrayer.meetingLink} target="_blank" className="w-full py-4 saffron-gradient rounded-2xl flex items-center justify-center gap-3 font-black text-white hover:shadow-2xl hover:shadow-orange-500/20 transition-all">
                    {t.prayers.joinBtn} <i className="fa-solid fa-video"></i>
                  </a>
                  <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-widest">{t.prayers.instructions}</p>
               </div>
             )}
             
             <div className="flex flex-col gap-6">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                   <h4 className="font-black text-amber-500 mb-2">{t.prayers.techRequirements}</h4>
                   <p className="text-sm text-slate-400">{t.prayers.techDesc}</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                   <h4 className="font-black text-amber-500 mb-2">{t.prayers.etiquette}</h4>
                   <p className="text-sm text-slate-400">{t.prayers.etiquetteDesc}</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Prayers;
