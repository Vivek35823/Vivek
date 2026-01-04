import React, { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Library from './pages/Library';
import Demo from './pages/Demo';
import Scholarships from './pages/Scholarships';
import ScholarshipApplication from './pages/ScholarshipApplication';
import Membership from './pages/Membership';
import Donation from './pages/Donation';
import Admin from './pages/Admin';
import AdminPanel from './pages/AdminPanel';
import AdminDebug from './pages/AdminDebug';
import About from './pages/About';
import Contact from './pages/Contact';
import Prayers from './pages/Prayers';
import { Language } from './constants';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className={`min-h-screen flex flex-col ${lang === 'bn' ? 'bn' : ''}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/prayers" element={<Prayers />} />
            <Route path="/library" element={<Library />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/scholarship-apply" element={<ScholarshipApplication />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/admin-debug" element={<AdminDebug />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
