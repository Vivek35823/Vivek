
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].about;

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-amber-100">
            <span className="w-2 h-2 rounded-full saffron-gradient"></span>
            {t.subtitle}
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            {t.pageTitle}
          </h1>
        </div>

        <div className="space-y-16">
          {/* Organization Description */}
          <section className="bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-3">
              <i className="fa-solid fa-building text-orange-600 text-2xl"></i>
              {t.orgDescription}
            </h2>
            
            <div className="space-y-8">
              {/* Organization Name */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{t.orgName}</h3>
                <p className="text-slate-600 mb-2">{lang === 'en' ? t.nameEn : t.nameBn}</p>
                <p className="text-slate-600">{lang === 'en' ? t.nameBn : t.nameEn}</p>
              </div>

              {/* Founded Date */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{t.foundedDate}</h3>
                <p className="text-slate-600 leading-relaxed">{t.foundedDesc}</p>
              </div>

              {/* Address */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{t.address}</h3>
                <p className="text-slate-600">{t.addressOnline}</p>
              </div>

              {/* Organization Type */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{t.orgType}</h3>
                <p className="text-slate-600">{t.orgTypeDesc}</p>
              </div>
            </div>
          </section>

          {/* Ideology & Objectives */}
          <section className="bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-3">
              <i className="fa-solid fa-lightbulb text-orange-600 text-2xl"></i>
              {t.ideology}
            </h2>

            <div className="space-y-10">
              {/* Ideology */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 pb-3 border-b border-slate-200">{t.ideologyTitle}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{t.ideologyDesc}</p>
              </div>

              {/* Objectives */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 pb-3 border-b border-slate-200">{t.objectives}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t.objectivesDesc}</p>
                <ul className="space-y-3">
                  {t.objectiveList.map((objective, index) => (
                    <li key={index} className="flex gap-4 text-slate-700">
                      <span className="saffron-gradient text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Founders & Members */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 md:p-16 rounded-3xl border-2 border-orange-200">
            <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-3">
              <i className="fa-solid fa-users text-orange-600 text-2xl"></i>
              {t.foundersTitle}
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-orange-100">
              <p className="text-slate-700 leading-relaxed text-lg">{t.foundersDesc}</p>
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <i className="fa-solid fa-tasks text-orange-600 text-2xl"></i>
              {t.activitiesTitle}
            </h2>
            <p className="text-slate-600 mb-12">{t.activitiesDesc}</p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Self-Development Activities */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-person-hiking text-indigo-600"></i>
                  {t.selfDevelopment}
                </h3>
                <ul className="space-y-3">
                  {t.selfDevelopmentList.map((activity, index) => (
                    <li key={index} className="flex gap-3 text-slate-700">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Activities */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-orange-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-heart text-orange-600"></i>
                  {t.serviceActivities}
                </h3>
                <ul className="space-y-3">
                  {t.serviceActivitiesList.map((activity, index) => (
                    <li key={index} className="flex gap-3 text-slate-700">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Join Our Mission</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Become part of a global movement dedicated to developing true human beings and serving humanity.'
                : 'প্রকৃত মানুষ গঠন এবং মানবসেবার এই বৈশ্বিক মিশনের অংশীদার হন।'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/membership"
                className="px-8 py-3 saffron-gradient text-white rounded-xl font-bold hover:shadow-lg transition-all inline-block"
              >
                {lang === 'en' ? 'Become a Member' : 'সদস্য হন'}
              </Link>
              <Link 
                to="/"
                className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-all inline-block"
              >
                {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
