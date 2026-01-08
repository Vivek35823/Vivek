
import React, { useState } from 'react';
import { useLanguage } from '../App';
import { MOCK_LIBRARY, TRANSLATIONS } from '../constants';
import { LibraryItem } from '../types';

const Library: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { key: 'All', label: lang === 'en' ? 'All' : 'সব' },
    { key: 'Letters', label: lang === 'en' ? 'Letters' : 'পত্র' },
    { key: 'Collected Works', label: lang === 'en' ? 'Collected Works' : 'সংগৃহীত রচনা' },
    { key: 'Other Writings', label: lang === 'en' ? 'Other Writings' : 'অন্যান্য লেখা' }
  ];

  const filteredItems = activeCategory === 'All' 
    ? MOCK_LIBRARY 
    : MOCK_LIBRARY.filter(item => item.category === activeCategory);

  const getTitle = (item: LibraryItem) => lang === 'en' ? item.title : (item.titleBn || item.title);
  const getAuthor = (item: LibraryItem) => lang === 'en' ? item.author : (item.authorBn || item.author);
  const getDescription = (item: LibraryItem) => lang === 'en' ? item.description : (item.descriptionBn || item.description);
  const getContent = (item: LibraryItem) => lang === 'en' ? item.content : (item.contentBn || item.content);

  return (
    <div className="pt-24 pb-20 overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pb-12 pt-8 min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl text-purple-300 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-white/20 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></span>
              📚 Digital Archives
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
              {t.library.pageTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl leading-relaxed font-light">
              {t.library.desc}
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all border transform hover:scale-105 ${
                    activeCategory === cat.key 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/50' 
                      : 'bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20 hover:border-white/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library Grid Section */}
      <section className="py-28 bg-gradient-to-br from-white via-indigo-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Library Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 flex flex-col relative"
              >
                {/* Top Gradient Bar */}
                <div className="h-2 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 group-hover:via-pink-400 transition-all"></div>

                {/* Image Section */}
                {item.imageUrl && (
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                    <img 
                      src={item.imageUrl} 
                      alt={getTitle(item)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 mb-5 self-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                    <span className="text-xs font-black text-purple-600 uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-[#1E1B4B] mb-4 leading-tight line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {getTitle(item)}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-grow line-clamp-3">
                    {getDescription(item)}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest truncate">
                      {getAuthor(item)}
                    </span>
                    <button 
                      onClick={() => window.location.href = `/library/library-${item.id}.html`}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 text-white flex items-center justify-center hover:scale-125 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                    >
                      <i className="fa-solid fa-arrow-right text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-20">
              <div className="text-6xl mb-6 text-purple-300">
                <i className="fa-solid fa-book"></i>
              </div>
              <p className="text-slate-400 text-lg font-medium">
                {lang === 'en' ? 'No items found in this category' : 'এই বিভাগে কোনো আইটেম নেই'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Explore the Wisdom</h2>
          <p className="text-indigo-100 text-lg mb-10 leading-relaxed">Each text opens a new dimension of understanding Swami Vivekananda's eternal philosophy</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="px-12 py-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-2xl hover:shadow-purple-500/50 transition-all hover:-translate-y-1 hover:scale-105">
              Read More <i className="fa-solid fa-book-open"></i>
            </a>
            <a href="/" className="px-12 py-6 bg-white/10 backdrop-blur text-white border border-white/30 rounded-2xl font-black inline-flex items-center gap-3 hover:bg-white/20 transition-all">
              Back Home <i className="fa-solid fa-arrow-left"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Modal - Kept but hidden */}
      {selectedItem && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-indigo-950/80 backdrop-blur-xl overflow-y-auto">
          <div className="bg-white rounded-[3rem] max-w-4xl w-full my-8 flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
            
            {/* Modal Header */}
            <div className="sticky top-0 px-8 md:px-12 py-8 bg-gradient-to-r from-[#1E1B4B] to-indigo-900 flex justify-between items-center z-50">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 saffron-gradient rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
                  <i className="fa-solid fa-book-open"></i>
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-widest block mb-1">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight serif truncate">
                    {getTitle(selectedItem)}
                  </h2>
                </div>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="ml-4 w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/20 transition-all"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto px-8 md:px-16 py-12 bg-[#FDFCFB]">
              <div className="max-w-2xl mx-auto">
                {/* Author Attribution */}
                <div className="mb-12 pb-8 border-b-2 border-amber-200">
                  <p className="text-sm text-amber-600 font-bold uppercase tracking-widest mb-2">
                    {t.library.fromArchives}
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-[#1E1B4B] serif">
                    {getAuthor(selectedItem)}
                  </p>
                </div>

                {/* Content with Decorative First Letter */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg md:text-xl leading-[1.9] text-slate-800 font-light whitespace-pre-wrap">
                    {getContent(selectedItem)}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-12 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                  <i className="fa-solid fa-feather-pointed text-amber-600 text-xl"></i>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-sm text-slate-500 italic">
                  <p>{t.library.editorialBoard}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 md:px-12 py-8 bg-white border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-600">
                <i className="fa-solid fa-bookmark text-lg"></i>
                <span className="text-sm font-bold uppercase tracking-widest">
                  {t.library.editorialBoard}
                </span>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="px-8 py-3 saffron-gradient text-white rounded-xl font-black hover:shadow-xl transition-all"
              >
                {t.library.doneReading}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
