
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">V</div>
              <span className="text-xl font-black tracking-tighter">VIVEK</span>
            </div>
            <p className="text-slate-400 text-sm">
              An organization formed by devotees of Swami Vivekananda from different countries to spread his message of universal brotherhood and strength.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors">Constitution & Objectives</Link></li>
              <li><Link to="/library" className="hover:text-white transition-colors">Vivek Library</Link></li>
              <li><Link to="/scholarships" className="hover:text-white transition-colors">Scholarship Programs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/admin-panel" className="hover:text-white transition-colors text-orange-400 font-semibold">Admin Panel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><i className="fa-solid fa-envelope"></i>vivek.foundation.org@gmail.com</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-phone"></i>----------</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-location-dot"></i> Global Presence</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Newsletter</h4>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-800 border-none rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500 outline-none" 
              />
              <button className="bg-orange-600 hover:bg-orange-700 transition-colors text-white py-2 rounded text-sm font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Vivek Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
