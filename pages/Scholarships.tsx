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
  const scholarshipBenefits = lang === 'bn' && selectedScholarship.benefitsBn ? selectedScholarship.benefitsBn : selectedScholarship.benefits;

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
            {lang === 'bn' ? 'আমাদের সমর্থন' : 'Support & Opportunities'}
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-[#1E1B4B] mb-6 tracking-tighter">
            {lang === 'bn' ? 'বৃত্তি কর্মসূচি' : 'Scholarship Programs'}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            {lang === 'bn' 
              ? 'আমরা মেধাবী এবং অসচ্ছল শিক্ষার্থীদের তাদের স্বপ্ন অনুসরণ করতে সহায়তা করি।'
              : 'We support talented and deserving students in pursuing their educational dreams.'}
          </p>
        </div>

        {/* Scholarship Selector Section */}
        <div className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl border-2 border-amber-300 shadow-lg">
          <div className="mb-8">
            <label className="block text-2xl font-black text-[#1E1B4B] mb-4">
              {lang === 'bn' ? 'বৃত্তি প্রকার নির্বাচন করুন' : 'Select Scholarship Type'}
            </label>
            <select
              value={selectedScholarship.id}
              onChange={handleSelectChange}
              className="w-full px-6 py-4 text-lg border-3 border-amber-600 rounded-xl font-bold text-[#1E1B4B] focus:outline-none focus:ring-4 focus:ring-amber-400 transition-all"
            >
              {SCHOLARSHIPS.map(scholarship => (
                <option key={scholarship.id} value={scholarship.id}>
                  {lang === 'bn' && scholarship.nameBn ? scholarship.nameBn : scholarship.name}
                </option>
              ))}
            </select>
          </div>

          {/* Scholarship Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Main Info */}
            <div>
              <h2 className="text-3xl font-black text-[#1E1B4B] mb-6">{scholarshipName}</h2>
              
              {/* Description */}
              <div className="mb-8">
                <h4 className="font-black text-[#1E1B4B] mb-3 text-lg">
                  {lang === 'bn' ? 'বর্ণনা' : 'Description'}
                </h4>
                <p className="text-slate-700 leading-relaxed text-lg">{scholarshipDesc}</p>
              </div>

              {/* Deadline */}
              <div className="bg-white p-4 rounded-xl border-2 border-amber-300 mb-8">
                <p className="text-sm font-black text-amber-600 mb-2">
                  {lang === 'bn' ? 'সময়সীমা' : 'Deadline'}
                </p>
                <p className="text-lg font-black text-[#1E1B4B]">{scholarshipDeadline}</p>
              </div>
            </div>

            {/* Right Column - Benefits & Eligibility */}
            <div>
              {/* Eligibility */}
              <div className="mb-8">
                <h4 className="font-black text-[#1E1B4B] mb-4 text-lg">
                  {lang === 'bn' ? 'যোগ্যতা' : 'Eligibility'}
                </h4>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-300">
                  <p className="text-slate-700 leading-relaxed">{scholarshipEligibility}</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-black text-[#1E1B4B] mb-4 text-lg">
                  {lang === 'bn' ? 'সুবিধা' : 'Benefits'}
                </h4>
                <ul className="space-y-3">
                  {scholarshipBenefits && scholarshipBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="text-amber-600 font-black text-lg mt-1">✓</span>
                      <span className="text-lg font-semibold">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button - Navigate to detailed form */}
              <button
                onClick={handleApplyClick}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-black uppercase tracking-wide hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <i className="fa-solid fa-paper-plane mr-3"></i>
                {lang === 'bn' ? 'এখনই আবেদন করুন' : 'Apply Now'}
              </button>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-star text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-black text-[#1E1B4B] mb-3">
              {lang === 'bn' ? 'মান নির্বাচন' : 'Selection Process'}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'bn' 
                ? 'আমাদের দল যত্ন সহকারে প্রতিটি আবেদন পর্যালোচনা করে এবং সবচেয়ে যোগ্য প্রার্থীদের নির্বাচন করে।'
                : 'Our team carefully reviews each application and selects the most deserving candidates.'}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-clock text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-black text-[#1E1B4B] mb-3">
              {lang === 'bn' ? 'প্রক্রিয়াকরণ সময়' : 'Processing Time'}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'bn' 
                ? 'আবেদনগুলি সাধারণত ৩০ দিনের মধ্যে প্রক্রিয়া করা হয় এবং ফলাফল জানানো হয়।'
                : 'Applications are typically processed within 30 days and results are communicated.'}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-heart text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-black text-[#1E1B4B] mb-3">
              {lang === 'bn' ? 'চলমান সহায়তা' : 'Ongoing Support'}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'bn' 
                ? 'আমরা শুধু আর্থিক সহায়তা নয়, ব্যক্তিগত মেন্টরশিপও প্রদান করি।'
                : 'We provide not just financial support, but also personal mentorship and guidance.'}
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 pt-12 border-t-2 border-slate-200 text-center">
          <h2 className="text-3xl font-black text-[#1E1B4B] mb-4">
            {lang === 'bn' ? 'প্রশ্ন আছে?' : 'Have Questions?'}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {lang === 'bn' 
              ? 'আমাদের সাথে যোগাযোগ করুন এবং আমরা আপনাকে সাহায্য করব।'
              : 'Contact us and we\'ll help you with all your inquiries.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:scholarships@vivekfoundation.org"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-black uppercase tracking-wide hover:bg-blue-700 transition-all"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              {lang === 'bn' ? 'ইমেইল করুন' : 'Email Us'}
            </a>
            <a
              href="tel:+1234567890"
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-black uppercase tracking-wide hover:bg-green-700 transition-all"
            >
              <i className="fa-solid fa-phone mr-2"></i>
              {lang === 'bn' ? 'কল করুন' : 'Call Us'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
