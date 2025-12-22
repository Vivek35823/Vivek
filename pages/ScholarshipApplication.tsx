import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../App';
import { SCHOLARSHIPS } from '../constants';
import { dbService } from '../services/dbService';

const ScholarshipApplication: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scholarshipId = searchParams.get('scholarship');
  
  const selectedScholarship = SCHOLARSHIPS.find(s => s.id === scholarshipId) || SCHOLARSHIPS[0];
  
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    email: '',
    
    // Family Information
    fatherName: '',
    motherName: '',
    guardianName: '',
    guardianRelation: '',
    
    // Address Information
    address: '',
    city: '',
    postalCode: '',
    state: '',
    country: '',
    
    // Academic Information
    academicPercentage: '',
    currentGrade: '',
    school: '',
    
    // Financial Information
    familyAnnualIncome: '',
    monthlyExpenses: '',
    
    // Bank Details
    bankAccountNumber: '',
    bankName: '',
    accountHolderName: '',
    ifscCode: '',
    
    // Additional Information
    essay: '',
    achievements: '',
    extracurricular: '',
    reasonForApplication: '',
    
    // Documents
    documentsSubmitted: false,
    documentDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন' : 'Please fill all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // Save to database
      const applicationData = {
        scholarshipType: selectedScholarship.id,
        applicantName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        dateOfBirth: formData.dateOfBirth || undefined,
        gender: formData.gender || undefined,
        fatherName: formData.fatherName || undefined,
        motherName: formData.motherName || undefined,
        guardianName: formData.guardianName || undefined,
        guardianRelation: formData.guardianRelation || undefined,
        address: formData.address || undefined,
        city: formData.city || undefined,
        postalCode: formData.postalCode || undefined,
        state: formData.state || undefined,
        country: formData.country || undefined,
        academicPercentage: formData.academicPercentage || undefined,
        currentGrade: formData.currentGrade || undefined,
        school: formData.school || undefined,
        familyAnnualIncome: formData.familyAnnualIncome || undefined,
        monthlyExpenses: formData.monthlyExpenses || undefined,
        bankAccountNumber: formData.bankAccountNumber || undefined,
        bankName: formData.bankName || undefined,
        accountHolderName: formData.accountHolderName || undefined,
        ifscCode: formData.ifscCode || undefined,
        essay: formData.essay || undefined,
        achievements: formData.achievements || undefined,
        extracurricular: formData.extracurricular || undefined,
        reasonForApplication: formData.reasonForApplication || undefined,
        documentsSubmitted: formData.documentsSubmitted,
        documentDescription: formData.documentDescription || undefined
      };

      console.log('Submitting scholarship application:', applicationData);
      await dbService.addApplication(applicationData);

      setSubmitSuccess(true);
      setTimeout(() => {
        navigate('/scholarships');
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert(lang === 'bn' ? 'আবেদন জমা দিতে ত্রুটি হয়েছে' : 'Error submitting application');
      setIsSubmitting(false);
    }
  };

  const scholarshipName = lang === 'bn' && selectedScholarship.nameBn 
    ? selectedScholarship.nameBn 
    : selectedScholarship.name;

  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Success Message */}
        {submitSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-check text-white text-3xl"></i>
              </div>
              <h2 className="text-3xl font-black text-[#1E1B4B] mb-4">
                {lang === 'bn' ? 'আবেদন সফল!' : 'Application Submitted!'}
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                {lang === 'bn' 
                  ? 'আপনার আবেদন সফলভাবে জমা দেওয়া হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'
                  : 'Your application has been successfully submitted. We will contact you soon.'}
              </p>
              <button
                onClick={() => navigate('/scholarships')}
                className="px-8 py-3 bg-amber-600 text-white rounded-xl font-black hover:bg-amber-700 transition-all"
              >
                {lang === 'bn' ? 'বৃত্তি পৃষ্ঠায় ফিরুন' : 'Back to Scholarships'}
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/scholarships')}
            className="flex items-center gap-2 text-amber-600 font-black uppercase tracking-wide hover:text-amber-700 mb-8"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>{lang === 'bn' ? 'বৃত্তিতে ফিরুন' : 'Back to Scholarship'}</span>
          </button>

          <div className="text-center mb-12">
            <span className="text-amber-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
              {lang === 'bn' ? 'বিস্তারিত আবেদন ফর্ম' : 'Detailed Application Form'}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-[#1E1B4B] mb-6 tracking-tighter">
              {scholarshipName}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {lang === 'bn' 
                ? 'আপনার সম্পূর্ণ তথ্য সহ আবেদন ফর্ম পূরণ করুন'
                : 'Fill out the application form with your complete information'}
            </p>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          
          {/* SECTION 1: Personal Information */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '১. ব্যক্তিগত তথ্য' : '1. Personal Information'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'পূর্ণ নাম *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'আপনার সম্পূর্ণ নাম' : 'Enter your full name'}
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'জন্মতারিখ *' : 'Date of Birth *'}
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'লিঙ্গ *' : 'Gender *'}
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                >
                  <option value="">{lang === 'bn' ? 'নির্বাচন করুন' : 'Select'}</option>
                  <option value="male">{lang === 'bn' ? 'পুরুষ' : 'Male'}</option>
                  <option value="female">{lang === 'bn' ? 'মহিলা' : 'Female'}</option>
                  <option value="other">{lang === 'bn' ? 'অন্যান্য' : 'Other'}</option>
                </select>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'ফোন নম্বর *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? '+৮৮০০০০০০০০০' : '+880000000000'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'ইমেইল *' : 'Email *'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'আপনার ইমেইল' : 'your@email.com'}
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Family Information */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '২. পারিবারিক তথ্য' : '2. Family Information'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Father's Name */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'পিতার নাম' : "Father's Name"}
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'পিতার নাম' : 'Father name'}
                />
              </div>

              {/* Mother's Name */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'মাতার নাম' : "Mother's Name"}
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'মাতার নাম' : 'Mother name'}
                />
              </div>

              {/* Guardian Name (if applicable) */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'অভিভাবকের নাম' : "Guardian's Name"}
                </label>
                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'অভিভাবকের নাম' : 'Guardian name'}
                />
              </div>

              {/* Guardian Relation */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'অভিভাবকের সম্পর্ক' : 'Guardian Relation'}
                </label>
                <input
                  type="text"
                  name="guardianRelation"
                  value={formData.guardianRelation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'চাচা, খালা, ইত্যাদি' : 'Uncle, Aunt, etc.'}
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Address Information */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '३. ঠিকানা তথ্য' : '3. Address Information'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'সম্পূর্ণ ঠিকানা *' : 'Full Address *'}
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'আপনার সম্পূর্ণ ঠিকানা' : 'Enter full address'}
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'শহর *' : 'City *'}
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'পোস্টাল কোড' : 'Postal Code'}
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>

              {/* State/Province */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'রাজ্য/অঞ্চল' : 'State/Province'}
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'দেশ' : 'Country'}
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>
            </div>
          </div>

          {/* SECTION 4: Academic Information */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '४. একাডেমিক তথ্য' : '4. Academic Information'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Academic Percentage */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'একাডেমিক শতাংশ (%) *' : 'Academic Percentage (%) *'}
                </label>
                <input
                  type="number"
                  name="academicPercentage"
                  value={formData.academicPercentage}
                  onChange={handleInputChange}
                  required
                  min="0"
                  max="100"
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? '৮৫.৫০' : '85.50'}
                />
              </div>

              {/* Current Grade/Class */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'বর্তমান শ্রেণী' : 'Current Grade/Class'}
                </label>
                <input
                  type="text"
                  name="currentGrade"
                  value={formData.currentGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'ক্লাস ১০' : 'Grade 10'}
                />
              </div>

              {/* School/College Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'স্কুল/কলেজ নাম' : 'School/College Name'}
                </label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? 'আপনার স্কুল/কলেজের নাম' : 'Enter school/college name'}
                />
              </div>
            </div>
          </div>

          {/* SECTION 5: Financial Information */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '५. আর্থিক তথ্য' : '5. Financial Information'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Family Annual Income */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'পারিবারিক বার্ষিক আয় (টাকা) *' : 'Family Annual Income (₹) *'}
                </label>
                <input
                  type="number"
                  name="familyAnnualIncome"
                  value={formData.familyAnnualIncome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? '৩,০০,०००' : '300000'}
                />
              </div>

              {/* Monthly Expenses */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'মাসিক ব্যয় (টাকা)' : 'Monthly Expenses (₹)'}
                </label>
                <input
                  type="number"
                  name="monthlyExpenses"
                  value={formData.monthlyExpenses}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' ? '२५,०००' : '25000'}
                />
              </div>
            </div>
          </div>

          {/* SECTION 6: Bank Details */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '६. ব্যাংক বিবরণ' : '6. Bank Details'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Holder Name */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'অ্যাকাউন্ট হোল্ডারের নাম' : 'Account Holder Name'}
                </label>
                <input
                  type="text"
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>

              {/* Bank Account Number */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'ব্যাংক অ্যাকাউন্ট নম্বর' : 'Bank Account Number'}
                </label>
                <input
                  type="text"
                  name="bankAccountNumber"
                  value={formData.bankAccountNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>

              {/* Bank Name */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'ব্যাংক নাম' : 'Bank Name'}
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                />
              </div>

              {/* IFSC Code */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'IFSC কোড' : 'IFSC Code'}
                </label>
                <input
                  type="text"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  maxLength="11"
                  placeholder="SBIN0001234"
                />
              </div>
            </div>
          </div>

          {/* SECTION 7: Additional Information */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '७. অতিরিক্ত তথ্য' : '7. Additional Information'}
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {/* Essay/Statement */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'আপনার সম্পর্কে একটি সংক্ষিপ্ত প্রবন্ধ (৫০০ শব্দ পর্যন্ত)' : 'Essay about yourself (up to 500 words)'}
                </label>
                <textarea
                  name="essay"
                  value={formData.essay}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' 
                    ? 'আপনার পটভূমি, লক্ষ্য এবং কেন এই বৃত্তি প্রয়োজন তা ব্যাখ্যা করুন'
                    : 'Describe your background, goals, and why you need this scholarship'}
                />
              </div>

              {/* Achievements */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'অর্জন এবং পুরস্কার' : 'Achievements and Awards'}
                </label>
                <textarea
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' 
                    ? 'আপনার অর্জন এবং পুরস্কারগুলি উল্লেখ করুন'
                    : 'List your achievements and awards'}
                />
              </div>

              {/* Extracurricular Activities */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'পাঠ্যক্রম বহিরাগত কার্যক্রম' : 'Extracurricular Activities'}
                </label>
                <textarea
                  name="extracurricular"
                  value={formData.extracurricular}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' 
                    ? 'আপনার অংশগ্রহণ করা কার্যক্রম'
                    : 'Describe your activities'}
                />
              </div>

              {/* Reason for Application */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'এই বৃত্তির জন্য আবেদনের কারণ' : 'Reason for Scholarship Application'}
                </label>
                <textarea
                  name="reasonForApplication"
                  value={formData.reasonForApplication}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' 
                    ? 'কেন এই বৃত্তি আপনার জন্য গুরুত্বপূর্ণ'
                    : 'Why is this scholarship important to you'}
                />
              </div>
            </div>
          </div>

          {/* SECTION 8: Documents */}
          <div className="mb-12 pb-12 border-b-2 border-slate-200">
            <h2 className="text-3xl font-black text-[#1E1B4B] mb-8">
              {lang === 'bn' ? '८. ডকুমেন্ট' : '8. Documents'}
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {/* Documents Submitted */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="documentsSubmitted"
                    checked={formData.documentsSubmitted}
                    onChange={handleInputChange}
                    className="w-6 h-6 cursor-pointer accent-amber-600"
                  />
                  <span className="font-black text-[#1E1B4B]">
                    {lang === 'bn' ? 'আমি সমস্ত প্রয়োজনীয় ডকুমেন্ট জমা দিয়েছি' : 'I have submitted all required documents'}
                  </span>
                </label>
              </div>

              {/* Document Description */}
              <div>
                <label className="block text-sm font-black text-[#1E1B4B] mb-2">
                  {lang === 'bn' ? 'ডকুমেন্ট বর্ণনা' : 'Document Description-Please give this documents to our mail also.'}
                </label>
                <textarea
                  name="documentDescription"
                  value={formData.documentDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={lang === 'bn' 
                    ? 'যে ডকুমেন্টগুলি জমা দিয়েছেন তা তালিকাভুক্ত করুন'
                    : 'List documents you have submitted'}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/scholarships')}
              className="flex-1 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-black uppercase tracking-wide hover:bg-slate-100 transition-all duration-300"
            >
              {lang === 'bn' ? 'বাতিল করুন' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-black uppercase tracking-wide hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                  {lang === 'bn' ? 'জমা দিচ্ছি...' : 'Submitting...'}
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  {lang === 'bn' ? 'আবেদন জমা দিন' : 'Submit Application'}
                </>
              )}
            </button>
          </div>
        </form>

        {/* Information Footer */}
        <div className="mt-12 p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-300">
          <h3 className="text-2xl font-black text-[#1E1B4B] mb-4">
            {lang === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact Us'}
          </h3>
          <p className="text-slate-600 mb-4">
            {lang === 'bn' 
              ? 'যদি আপনার কোন প্রশ্ন থাকে তবে আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।'
              : 'If you have any questions, please feel free to contact us.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:info@vivekfoundation.org" className="flex items-center gap-2 text-amber-600 font-black hover:text-amber-700">
              <i className="fa-solid fa-envelope"></i>
              info@vivekfoundation.org
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-amber-600 font-black hover:text-amber-700">
              <i className="fa-solid fa-phone"></i>
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipApplication;
