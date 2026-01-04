import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { SCHOLARSHIPS } from '../constants';
import { Scholarship } from '../types';

const Scholarships: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship>(SCHOLARSHIPS[0]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const scholarship = SCHOLARSHIPS.find(s => s.id === e.target.value);
    if (scholarship) {
      setSelectedScholarship(scholarship);
    }
  };

  const handleApplyClick = () => {
    navigate(`/scholarship-apply?scholarship=${selectedScholarship.id}`);
  };

  const scholarshipName = lang === 'bn' && selectedScholarship.nameBn ? selectedScholarship.nameBn : selectedScholarship.name;
  const scholarshipDesc = lang === 'bn' && selectedScholarship.descriptionBn ? selectedScholarship.descriptionBn : selectedScholarship.description;
  const scholarshipEligibility = lang === 'bn' && selectedScholarship.eligibilityBn ? selectedScholarship.eligibilityBn : selectedScholarship.eligibility;
  const scholarshipDeadline = lang === 'bn' && selectedScholarship.deadlineBn ? selectedScholarship.deadlineBn : selectedScholarship.deadline;
  const scholarshipAmount = lang === 'bn' && selectedScholarship.amountBn ? selectedScholarship.amountBn : selectedScholarship.amount;
  const scholarshipBenefits = lang === 'bn' && selectedScholarship.benefitsBn ? selectedScholarship.benefitsBn : selectedScholarship.benefits;
  
  return (
    <div className="pt-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pb-12 pt-8 min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full px-6">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl text-cyan-300 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 animate-pulse"></span>
              🎓 Educational Excellence
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tighter">
                Scholarship Programs
              </h1>
              <p className="text-lg md:text-xl text-cyan-100 leading-relaxed font-light max-w-2xl">
                Empowering talented students through comprehensive financial and educational support to achieve their dreams.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#scholarships" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-green-500 text-white rounded-xl font-black transition-all hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 hover:scale-105"
              >
                Explore Programs <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <a 
                href="#apply" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-black transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-gradient-to-br from-cyan-400/20 via-green-400/20 to-blue-400/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 aspect-square">
              <img 
                src="\images\britti.png" 
                alt="Educational Scholarships"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Programs Section */}
      <section id="scholarships" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-10 w-40 h-40 bg-cyan-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-cyan-200">
              📚 Available Scholarships
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">
              {lang === 'bn' ? 'বৃত্তি কর্মসূচি' : 'Our Scholarship Programs'}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {lang === 'bn' 
                ? 'আমরা মেধাবী এবং অসচ্ছল শিক্ষার্থীদের তাদের স্বপ্ন অনুসরণ করতে সহায়তা করি।'
                : 'We support talented and deserving students in pursuing their educational dreams.'}
            </p>
          </div>

          {/* Scholarship Selector */}
          <div className="mb-16">
            <label className="block text-xl font-black text-[#1E1B4B] mb-6">
              {lang === 'bn' ? 'বৃত্তি প্রকার নির্বাচন করুন' : 'Select Scholarship Type'}
            </label>
            <select
              value={selectedScholarship.id}
              onChange={handleSelectChange}
              className="w-full px-6 py-4 text-lg border-3 border-cyan-500 rounded-2xl font-bold text-[#1E1B4B] focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all hover:border-cyan-700 bg-white shadow-md"
            >
              {SCHOLARSHIPS.map(scholarship => (
                <option key={scholarship.id} value={scholarship.id}>
                  {lang === 'bn' && scholarship.nameBn ? scholarship.nameBn : scholarship.name}
                </option>
              ))}
            </select>
          </div>

          {/* Scholarship Details Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-cyan-50 to-green-50 rounded-3xl p-12 border-2 border-white/60 group-hover:border-cyan-300 hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <h3 className="text-3xl font-black text-[#1E1B4B] mb-6">{scholarshipName}</h3>
                  
                  {/* Description */}
                  <div className="mb-10">
                    <p className="text-lg text-slate-700 leading-relaxed font-light mb-6">{scholarshipDesc}</p>
                  </div>

                  {/* Amount Box */}
                  <div className="bg-gradient-to-br from-cyan-500 to-green-600 p-8 rounded-2xl mb-8 text-white shadow-lg">
                    <p className="text-sm font-black mb-2 opacity-90 uppercase tracking-widest">
                      {lang === 'bn' ? 'বার্ষিক বৃত্তি' : 'Annual Amount'}
                    </p>
                    <p className="text-3xl font-black">{scholarshipAmount}</p>
                  </div>

                  {/* Deadline Box */}
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white shadow-lg">
                    <p className="text-sm font-black mb-2 opacity-90 uppercase tracking-widest">
                      {lang === 'bn' ? 'আবেদন সময়সীমা' : 'Application Deadline'}
                    </p>
                    <p className="text-2xl font-black">{scholarshipDeadline}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Eligibility */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-black text-[#1E1B4B] mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-check-circle text-cyan-600"></i>
                      {lang === 'bn' ? 'যোগ্যতার মানদণ্ড' : 'Eligibility'}
                    </h4>
                    <div className="bg-white p-6 rounded-2xl border-2 border-cyan-200 shadow-md">
                      <p className="text-slate-700 leading-relaxed font-medium">{scholarshipEligibility}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-black text-[#1E1B4B] mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-gift text-green-600"></i>
                      {lang === 'bn' ? 'প্রদত্ত সুবিধা' : 'Benefits'}
                    </h4>
                    <ul className="space-y-3">
                      {scholarshipBenefits && scholarshipBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-700 group/item">
                          <span className="text-cyan-600 font-black text-xl mt-0 group-hover/item:scale-125 transition-transform flex-shrink-0">✓</span>
                          <span className="text-base font-semibold group-hover/item:text-cyan-700 transition-colors">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={handleApplyClick}
                    className="w-full py-5 bg-gradient-to-r from-cyan-500 to-green-600 text-white rounded-2xl font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-lg hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                    {lang === 'bn' ? 'এখনই আবেদন করুন' : 'Apply Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-green-200">
              ℹ️ How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">
              {lang === 'bn' ? 'বৃত্তি প্রক্রিয়া' : 'Scholarship Process'}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {lang === 'bn' 
                ? 'আমাদের সহজ এবং স্বচ্ছ আবেদন প্রক্রিয়া সম্পর্কে জানুন'
                : 'Learn about our simple and transparent application process'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Selection */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl border-2 border-white/60 group-hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">
                  {lang === 'bn' ? 'যোগ্যতা মূল্যায়ন' : 'Evaluation'}
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium flex-grow">
                  {lang === 'bn' 
                    ? 'আমাদের দল যত্ন সহকারে প্রতিটি আবেদন পর্যালোচনা করে এবং যোগ্যতা অনুযায়ী মূল্যায়ন করে।'
                    : 'Our team carefully reviews each application and evaluates based on merit and need.'}
                </p>
              </div>
            </div>

            {/* Card 2 - Processing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-white/60 group-hover:border-green-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">
                  {lang === 'bn' ? 'দ্রুত প্রক্রিয়াকরণ' : 'Fast Processing'}
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium flex-grow">
                  {lang === 'bn' 
                    ? 'আবেদনগুলি সাধারণত ৩০ দিনের মধ্যে প্রক্রিয়া করা হয় এবং ফলাফল জানানো হয়।'
                    : 'Applications are typically processed within 30 days with results communicated.'}
                </p>
              </div>
            </div>

            {/* Card 3 - Support */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-white/60 group-hover:border-purple-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">
                  {lang === 'bn' ? 'চলমান সহায়তা' : 'Ongoing Support'}
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium flex-grow">
                  {lang === 'bn' 
                    ? 'আর্থিক সহায়তার পাশাপাশি ব্যক্তিগত মেন্টরশিপ এবং নির্দেশনা প্রদান করি।'
                    : 'Beyond financial aid, we provide mentorship, guidance, and personal support.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-28 bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to Apply?</h2>
          <p className="text-cyan-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            {lang === 'bn' 
              ? 'আপনার স্বপ্ন অনুসরণ করুন। আমরা আপনার সাথে আছি প্রতিটি পদক্ষেপে।'
              : 'Pursue your dreams. We\'re with you every step of the way.'}
          </p>
          <button
            onClick={handleApplyClick}
            className="px-12 py-6 bg-gradient-to-r from-cyan-400 to-green-500 text-white rounded-2xl font-black inline-flex items-center gap-3 shadow-2xl hover:shadow-cyan-500/50 transition-all hover:-translate-y-1 hover:scale-105 text-lg uppercase tracking-widest"
          >
            <i className="fa-solid fa-arrow-right-long"></i>
            {lang === 'bn' ? 'এখনই আবেদন করুন' : 'Apply Now'}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#1E1B4B] mb-4">
            {lang === 'bn' ? 'প্রশ্ন আছে?' : 'Have Questions?'}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            {lang === 'bn' 
              ? 'আমাদের সাথে যোগাযোগ করুন এবং আমরা আপনার সব প্রশ্নের উত্তর দেব।'
              : 'Contact us and we\'ll help you with all your inquiries.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:scholarships@vivekfoundation.org"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-600 text-white rounded-2xl font-black uppercase tracking-widest hover:shadow-xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <i className="fa-solid fa-envelope"></i>
              {lang === 'bn' ? 'ইমেইল করুন' : 'Email Us'}
            </a>
            <a
              href="tel:+1234567890"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest hover:shadow-xl hover:shadow-green-500/50 transition-all transform hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <i className="fa-solid fa-phone"></i>
              {lang === 'bn' ? 'কল করুন' : 'Call Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
