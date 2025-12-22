import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS, MOCK_EVENTS } from '../constants';

const Events: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">{t.events.subtitle}</span>
          <h1 className="text-6xl md:text-7xl font-black text-[#1E1B4B] mb-6 tracking-tighter">
            {t.events.pageTitle}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            {t.events.desc}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-amber-400 border border-slate-200">
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-amber-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {event.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Date & Time */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-amber-600 font-bold">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>{event.date}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div className="flex items-center gap-2 text-amber-600 font-bold">
                    <i className="fa-solid fa-clock"></i>
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-4 leading-tight group-hover:text-amber-600 transition-colors">
                  {lang === 'bn' && event.titleBn ? event.titleBn : event.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-8 leading-relaxed line-clamp-3">
                  {lang === 'bn' && event.descriptionBn ? event.descriptionBn : event.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
                  <i className="fa-solid fa-location-dot text-amber-600"></i>
                  <span>{lang === 'bn' && event.locationBn ? event.locationBn : event.location}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={`/events/event-${event.id}.html`}
                    className="w-full py-3 border-2 border-amber-600 text-amber-600 rounded-xl font-black uppercase tracking-wide hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    {t.events.viewDetails}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
