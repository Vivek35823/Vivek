import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS, MOCK_EVENTS } from '../constants';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang];

  const event = MOCK_EVENTS.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="pt-32 pb-20 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#1E1B4B] mb-4">
            {lang === 'bn' ? 'অনুষ্ঠান খুঁজে পাওয়া যায়নি' : 'Event not found'}
          </h1>
          <button
            onClick={() => navigate('/events')}
            className="px-8 py-3 bg-amber-600 text-white rounded-xl font-black uppercase tracking-wide hover:bg-amber-700 transition-all duration-300"
          >
            {lang === 'bn' ? 'অনুষ্ঠানে ফিরুন' : 'Back to Events'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <button
          onClick={() => navigate('/events')}
          className="flex items-center gap-2 text-amber-600 font-black uppercase tracking-wide hover:text-amber-700 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>{lang === 'bn' ? 'অনুষ্ঠানে ফিরুন' : 'Back to Events'}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Image & Key Info */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="h-96 rounded-3xl overflow-hidden shadow-2xl mb-12">
              <img
                src={event.imageUrl}
                alt={lang === 'bn' && event.titleBn ? event.titleBn : event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Date/Time */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-slate-200">
                <div className="flex items-center gap-2 text-amber-600 font-black text-lg">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>{event.date}</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="flex items-center gap-2 text-amber-600 font-black text-lg">
                  <i className="fa-solid fa-clock"></i>
                  <span>{event.time}</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-[#1E1B4B] mb-8 leading-tight">
                {lang === 'bn' && event.titleBn ? event.titleBn : event.title}
              </h1>

              {/* Category & Location */}
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <div className="px-4 py-2 bg-amber-600 text-white rounded-full text-xs font-black uppercase tracking-widest">
                  {event.category}
                </div>
                <div className="flex items-center gap-3 text-slate-600 font-semibold">
                  <i className="fa-solid fa-location-dot text-amber-600 text-xl"></i>
                  <span>{lang === 'bn' && event.locationBn ? event.locationBn : event.location}</span>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-[#1E1B4B] mb-6">
                {t.events.description}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {lang === 'bn' && event.descriptionBn ? event.descriptionBn : event.description}
              </p>
            </div>

            {/* Key Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Date Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <h3 className="font-black text-[#1E1B4B] mb-3 text-lg flex items-center gap-2">
                  <i className="fa-solid fa-calendar text-blue-600"></i>
                  {lang === 'bn' ? 'তারিখ' : 'Date'}
                </h3>
                <p className="text-slate-700 font-semibold text-lg">{event.date}</p>
              </div>

              {/* Time Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                <h3 className="font-black text-[#1E1B4B] mb-3 text-lg flex items-center gap-2">
                  <i className="fa-solid fa-clock text-purple-600"></i>
                  {lang === 'bn' ? 'সময়' : 'Time'}
                </h3>
                <p className="text-slate-700 font-semibold text-lg">{event.time}</p>
              </div>

              {/* Location Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <h3 className="font-black text-[#1E1B4B] mb-3 text-lg flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-green-600"></i>
                  {lang === 'bn' ? 'স্থান' : 'Location'}
                </h3>
                <p className="text-slate-700 font-semibold text-lg">
                  {lang === 'bn' && event.locationBn ? event.locationBn : event.location}
                </p>
              </div>

              {/* Category Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-2xl border border-amber-200">
                <h3 className="font-black text-[#1E1B4B] mb-3 text-lg flex items-center gap-2">
                  <i className="fa-solid fa-tag text-amber-600"></i>
                  {lang === 'bn' ? 'বিভাগ' : 'Category'}
                </h3>
                <p className="text-slate-700 font-semibold text-lg">{event.category}</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - CTA & Additional Info */}
          <div className="lg:col-span-1">
            {/* CTA Card */}
            <div className="sticky top-32 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border-2 border-amber-300 shadow-lg">
              <h3 className="text-2xl font-black text-[#1E1B4B] mb-6">
                {lang === 'bn' ? 'এই অনুষ্ঠানে যোগ দিন' : 'Join This Event'}
              </h3>

              {/* Availability Status */}
              <div className="mb-8 pb-8 border-b-2 border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-black text-slate-700 text-sm">
                    {lang === 'bn' ? 'নিবন্ধন উন্মুক্ত' : 'Registration Open'}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'এই অনুষ্ঠানে যোগ দেওয়ার জন্য এখনও সময় রয়েছে।' : 'There is still time to register for this event.'}
                </p>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-amber-600 text-white rounded-xl font-black uppercase tracking-wide hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 mb-4">
                <i className="fa-solid fa-check-circle mr-2"></i>
                {lang === 'bn' ? 'এখনই নিবন্ধন করুন' : 'Register Now'}
              </button>

              {/* Secondary Action */}
              {event.meetingLink && (
                <button className="w-full py-3 border-2 border-amber-600 text-amber-600 rounded-xl font-black uppercase tracking-wide hover:bg-amber-600 hover:text-white transition-all duration-300">
                  <i className="fa-solid fa-video mr-2"></i>
                  {lang === 'bn' ? 'অনলাইনে যোগ দিন' : 'Join Online'}
                </button>
              )}

              {/* Event Details */}
              <div className="mt-8 pt-8 border-t-2 border-amber-200">
                <h4 className="font-black text-[#1E1B4B] mb-4">
                  {lang === 'bn' ? 'অনুষ্ঠানের বিবরণ' : 'Event Details'}
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-amber-600 mt-1 flex-shrink-0"></i>
                    <span>{lang === 'bn' ? 'অনলাইন এবং ব্যক্তিগত উভয় অপশন' : 'Online & In-person Options'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-amber-600 mt-1 flex-shrink-0"></i>
                    <span>{lang === 'bn' ? 'বিনামূল্যে অংশগ্রহণ' : 'Free Participation'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-amber-600 mt-1 flex-shrink-0"></i>
                    <span>{lang === 'bn' ? 'সার্টিফিকেট প্রদান করা হবে' : 'Certificate Provided'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-black text-[#1E1B4B] mb-4 text-sm">
                {lang === 'bn' ? 'শেয়ার করুন' : 'Share Event'}
              </h4>
              <div className="flex gap-3">
                <button className="flex-1 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" title="Share on Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button className="flex-1 p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors" title="Share on Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </button>
                <button className="flex-1 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" title="Share on WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Information Section */}
        <div className="mt-20 pt-12 border-t-2 border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What to Expect */}
            <div>
              <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">
                {lang === 'bn' ? 'প্রত্যাশা করুন' : 'What to Expect'}
              </h3>
              <ul className="space-y-3 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-black">✓</span>
                  <span>{lang === 'bn' ? 'অনুপ্রেরণামূলক বক্তৃতা' : 'Inspiring Discourse'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-black">✓</span>
                  <span>{lang === 'bn' ? 'সক্রিয় আলোচনা ও প্রশ্নোত্তর' : 'Interactive Q&A'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-black">✓</span>
                  <span>{lang === 'bn' ? 'নেটওয়ার্কিং সুযোগ' : 'Networking Opportunities'}</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">
                {lang === 'bn' ? 'প্রয়োজনীয়তা' : 'Requirements'}
              </h3>
              <ul className="space-y-3 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-black">•</span>
                  <span>{lang === 'bn' ? 'স্থিতিশীল ইন্টারনেট সংযোগ' : 'Stable Internet Connection'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-black">•</span>
                  <span>{lang === 'bn' ? 'ওয়েব ব্রাউজার বা মোবাইল অ্যাপ' : 'Web Browser or Mobile App'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-black">•</span>
                  <span>{lang === 'bn' ? '৫ মিনিট আগে যোগ দিন' : 'Join 5 Minutes Early'}</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">
                {lang === 'bn' ? 'প্রশ্ন?' : 'Questions?'}
              </h3>
              <p className="text-slate-600 mb-4">
                {lang === 'bn' ? 'আমাদের দলের সাথে যোগাযোগ করুন যদি আপনার কোন প্রশ্ন থাকে।' : 'Reach out to our team if you have any questions.'}
              </p>
              <div className="space-y-2">
                <a href="mailto:info@vivekfoundation.org" className="flex items-center gap-2 text-amber-600 font-bold hover:underline">
                  <i className="fa-solid fa-envelope"></i>
                  info@vivekfoundation.org
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-amber-600 font-bold hover:underline">
                  <i className="fa-solid fa-phone"></i>
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
