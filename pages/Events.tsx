import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS, MOCK_EVENTS } from '../constants';

const Events: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang];
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Event', 'Prayer', 'Workshop'];
  const filteredEvents = activeCategory === 'All' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.category === activeCategory);

  return (
    <div className="pt-24 pb-20 overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pb-16 pt-8 min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-800">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl text-yellow-300 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></span>
              📅 Global Events
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tighter">
              {t.events.pageTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-yellow-50 mb-10 max-w-2xl leading-relaxed font-light mx-auto">
              {t.events.desc}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all border ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-transparent shadow-lg shadow-orange-500/30' 
                    : 'bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-28 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 flex flex-col h-full">
                {/* Gradient Bar */}
                <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 group-hover:via-pink-400 transition-all"></div>

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                  <img 
                    src={event.imageUrl} 
                    alt={lang === 'en' ? event.title : event.titleBn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg group-hover:scale-110 transition-transform">
                    {event.category}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                    {t.events.upcoming}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Date & Time */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-orange-600 font-bold">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>{event.date}</span>
                    </div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="flex items-center gap-2 text-orange-600 font-bold">
                      <i className="fa-solid fa-clock"></i>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black text-[#1E1B4B] mb-3 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                    {lang === 'en' ? event.title : (event.titleBn || event.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                    {lang === 'en' ? event.description : (event.descriptionBn || event.description)}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-8 text-sm text-slate-600 font-bold pb-6 border-b border-slate-200">
                    <i className="fa-solid fa-location-dot text-orange-500"></i>
                    <span>{lang === 'en' ? event.location : (event.locationBn || event.location)}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => navigate(`/events/${event.id}`)}
                      className="flex-1 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-black uppercase tracking-widest hover:shadow-xl hover:shadow-orange-400/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn"
                    >
                      {t.events.viewDetails} <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                    <a
                      href={event.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-orange-100 text-orange-600 rounded-xl font-bold hover:bg-orange-200 transition-all hover:scale-105"
                      title="Join Virtual Event"
                    >
                      <i className="fa-solid fa-video"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6 text-orange-200">
                <i className="fa-solid fa-calendar-xmark"></i>
              </div>
              <p className="text-slate-400 text-lg font-medium">
                {lang === 'en' ? 'No events found in this category' : 'এই বিভাগে কোনো ইভেন্ট নেই'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Features Section */}
      <section className="py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Why Join Our Events?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Experience spiritual growth and community connection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-globe', title: 'Global Community', desc: 'Connect with devotees worldwide' },
              { icon: 'fa-heart', title: 'Spiritual Growth', desc: 'Deepen your spiritual practice' },
              { icon: 'fa-users', title: 'Network', desc: 'Build meaningful relationships' },
              { icon: 'fa-lightbulb', title: 'Learning', desc: 'Gain wisdom from teachings' }
            ].map((feature, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Never Miss an Event</h2>
          <p className="text-orange-100 text-lg mb-10 leading-relaxed">Mark your calendar and join our upcoming spiritual gatherings and workshops</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-12 py-6 bg-white text-orange-600 rounded-2xl font-black inline-flex items-center gap-3 shadow-2xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105"
          >
            Explore Events <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;
