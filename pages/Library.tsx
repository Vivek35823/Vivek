
import React, { useState } from 'react';
import { MOCK_LIBRARY } from '../constants';
import { LibraryItem } from '../types';

const Library: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);
  const categories = ['All', 'Letters', 'Collected Works', 'Other Writings'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MOCK_LIBRARY 
    : MOCK_LIBRARY.filter(item => item.category === activeCategory);

  return (
    <div className="py-32 bg-[#FCFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 items-end gap-10">
          <div>
            <span className="text-amber-600 font-black tracking-widest uppercase text-xs mb-4 block">The Vivek Archives</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1E1B4B] tracking-tighter leading-none mb-6">Digital <span className="serif italic text-amber-600">Sanctuary.</span></h1>
            <p className="text-slate-500 text-lg max-w-lg">
              Explore a curated collection of Swamiji's timeless wisdom, digitized for seekers in every corner of the globe.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
                  activeCategory === cat 
                    ? 'saffron-gradient text-white border-transparent shadow-lg' 
                    : 'bg-white text-slate-600 border-slate-100 hover:border-amber-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map(item => (
            <div key={item.id} className="group bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 saffron-gradient w-20 h-20 -mr-10 -mt-10 rounded-full opacity-5 group-hover:opacity-20 transition-opacity"></div>
              <div className="text-xs font-black text-amber-600 uppercase tracking-widest mb-6">
                {item.category}
              </div>
              <h3 className="text-3xl font-black text-[#1E1B4B] mb-4 leading-tight serif">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-10 flex-grow leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{item.author}</span>
                <button 
                  onClick={() => setSelectedItem(item)}
                  className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#1E1B4B] flex items-center justify-center hover:saffron-gradient hover:text-white transition-all transform hover:scale-105"
                >
                  <i className="fa-solid fa-book-open"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Reading Experience Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-indigo-950/80 backdrop-blur-xl">
          <div className="bg-white rounded-[4rem] max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
            <div className="px-10 py-8 flex justify-between items-center border-b border-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 saffron-gradient rounded-2xl flex items-center justify-center text-white text-xl">
                  <i className="fa-solid fa-feather-pointed"></i>
                </div>
                <div>
                   <span className="text-xs font-black text-amber-600 uppercase tracking-widest">{selectedItem.category}</span>
                   <h2 className="text-2xl font-black text-[#1E1B4B] tracking-tight serif">{selectedItem.title}</h2>
                </div>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-12 md:p-20 bg-[#FDFCFB]">
              <div className="max-w-2xl mx-auto">
                <div className="mb-12 border-l-4 border-amber-500 pl-6 italic text-slate-500 text-lg serif">
                  From the archives of {selectedItem.author}
                </div>
                <div className="serif text-xl md:text-2xl leading-[1.8] text-slate-800 whitespace-pre-wrap font-light first-letter:text-7xl first-letter:font-black first-letter:text-amber-600 first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                  {selectedItem.content}
                </div>
              </div>
            </div>

            <div className="bg-white px-10 py-8 border-t border-slate-50 flex items-center justify-between">
               <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Vivek Editorial Board</div>
               <button 
                onClick={() => setSelectedItem(null)}
                className="px-10 py-4 saffron-gradient text-white rounded-2xl font-black hover:shadow-xl transition-all"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
