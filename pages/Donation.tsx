import React, { useState } from 'react';
import { useLanguage } from '../App';
import { dbService } from '../services/dbService';

const Donation: React.FC = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    amount: '',
    transactionId: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    accountName: 'VIVEK Foundation',
    bankName: 'Global Bank',
    accountNumber: 'xxxx-xxxx-xxxx-xxxx',
    swiftCode: 'VIVEKXYZ'
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await dbService.addDonation(formData);
      setSuccess(true);
      setFormData({ donorName: '', email: '', amount: '', transactionId: '', notes: '' });
    } catch (err) {
      alert('Error submitting donation details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero Section - Minimal, Focused */}
      <section className="relative px-4 pb-20 pt-12 min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/50"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 w-full px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl text-emerald-300 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20 shadow-xl mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 animate-pulse"></span>
            💝 {lang === 'bn' ? 'দান করুন এবং পরিবর্তন করুন' : 'Give & Create Change'}
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-[0.95] tracking-tighter">
            {lang === 'bn' ? 'আমাদের ভিশন সমর্থন করুন' : 'Support Our Vision'}
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-light max-w-3xl mx-auto">
            {lang === 'bn'
              ? 'আপনার অবদান প্রকৃত মানুষ গঠন এবং মানবসেবার আমাদের মিশনকে শক্তিশালী করে। প্রতিটি দান সরাসরি শিক্ষা, স্বাস্থ্য এবং আধ্যাত্মিক বৃদ্ধিকে সমর্থন করে।'
              : 'Your contribution empowers our mission to develop true human beings and serve humanity. Every donation directly supports education, healthcare, and spiritual growth.'}
          </p>

          <button 
            onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-10 px-10 py-5 bg-gradient-to-r from-emerald-400 to-green-500 text-white rounded-2xl font-black text-lg transition-all hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
          >
            <i className="fa-solid fa-heart"></i>
            {lang === 'en' ? 'Donate Now' : 'এখনই দান করুন'}
          </button>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-28 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-200">
              📊 {lang === 'en' ? 'Fund Allocation' : 'তহবিল বরাদ্দ'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">
              {lang === 'en' ? 'Where Your Donation Makes Impact' : 'আপনার দান কোথায় প্রভাব ফেলে'}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {lang === 'en' 
                ? 'Every rupee donated directly supports our three core mission areas. Your contribution creates measurable, lasting change.'
                : 'প্রতিটি দান সরাসরি আমাদের তিনটি মূল মিশন এলাকাকে সমর্থন করে। আপনার অবদান পরিমাপযোগ্য, দীর্ঘস্থায়ী পরিবর্তন সৃষ্টি করে।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: lang === 'en' ? 'Education & Scholarships' : 'শিক্ষা ও বৃত্তি', 
                percentage: '40%', 
                desc: lang === 'en' ? 'Funding schools, scholarships, and learning programs for underprivileged youth' : 'অসুবিধাপ্রাপ্ত যুবকদের জন্য স্কুল, বৃত্তি এবং শিক্ষা কর্মসূচি',
                icon: 'fa-graduation-cap',
                color: 'from-blue-400 to-cyan-500',
                impact: lang === 'en' ? '5000+ Students Reached' : '৫০০০+ শিক্ষার্থী'
              },
              { 
                title: lang === 'en' ? 'Healthcare & Wellness' : 'স্বাস্থ্যসেবা ও সুস্থতা', 
                percentage: '35%', 
                desc: lang === 'en' ? 'Medical camps, health awareness, and emergency relief programs' : 'চিকিৎসা শিবির, স্বাস্থ্য সচেতনতা এবং জরুরি ত্রাণ কর্মসূচি',
                icon: 'fa-heart-pulse',
                color: 'from-red-400 to-pink-500',
                impact: lang === 'en' ? '10000+ Lives Touched' : '১০০০০+ জীবন স্পর্শ করা'
              },
              { 
                title: lang === 'en' ? 'Spiritual Growth' : 'আধ্যাত্মিক বৃদ্ধি', 
                percentage: '25%', 
                desc: lang === 'en' ? 'Study circles, meditation programs, and community gatherings' : 'অধ্যয়ন সমাবেশ, ধ্যান কর্মসূচি এবং সম্প্রদায় সমাবেশ',
                icon: 'fa-om',
                color: 'from-purple-400 to-indigo-500',
                impact: lang === 'en' ? '3000+ Members' : '৩০০০+ সদস্য'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`relative bg-gradient-to-br ${item.color} bg-opacity-5 rounded-3xl p-10 border-2 border-white/60 group-hover:border-opacity-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-[#1E1B4B] mb-2">{item.title}</h3>
                  <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">{item.impact}</p>
                  <p className="text-slate-700 text-sm leading-relaxed flex-grow mb-6">{item.desc}</p>
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <span className="text-2xl font-black text-[#1E1B4B]">{item.percentage}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{lang === 'en' ? 'of Every Donation' : 'প্রতিটি দান'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h3 className="text-xl font-black text-[#1E1B4B] mb-8 text-center">
              {lang === 'en' ? 'This Year\'s Progress' : 'এই বছরের অগ্রগতি'}
            </h3>
            <div className="space-y-6">
              {[
                { label: lang === 'en' ? 'Education' : 'শিক্ষা', percent: 75, color: 'from-blue-400 to-cyan-500' },
                { label: lang === 'en' ? 'Healthcare' : 'স্বাস্থ্যসেবা', percent: 60, color: 'from-red-400 to-pink-500' },
                { label: lang === 'en' ? 'Spiritual Programs' : 'আধ্যাত্মিক কর্মসূচি', percent: 85, color: 'from-purple-400 to-indigo-500' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-slate-700">{item.label}</span>
                    <span className="text-sm font-bold text-slate-600">{item.percent}%</span>
                  </div>
                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section - MAIN FOCUS */}
      <section id="donation-form" className="py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-10 w-40 h-40 bg-emerald-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-200">
              ✨ {lang === 'en' ? 'Ready to Give?' : 'দান করতে প্রস্তুত?'}
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1E1B4B] mb-6 tracking-tight">
              {lang === 'en' ? 'Make Your Donation' : 'আপনার দান করুন'}
            </h2>
            <p className="text-slate-700 text-xl max-w-2xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'Two simple steps to make a direct impact on lives'
                : 'জীবনে সরাসরি প্রভাব ফেলার জন্য দুটি সহজ ধাপ'}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Step 1: Bank Details */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-12 border-2 border-emerald-100 group-hover:border-emerald-300 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white text-3xl shadow-lg">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1E1B4B]">{lang === 'en' ? 'Step 1' : 'ধাপ ১'}</h3>
                    <p className="text-emerald-700 text-xs font-bold uppercase tracking-widest">{lang === 'en' ? 'Bank Details' : 'ব্যাংক বিবরণ'}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-12">
                  {[
                    { label: lang === 'en' ? 'Account Name' : 'অ্যাকাউন্ট নাম', value: bankDetails.accountName, key: 'name' },
                    { label: lang === 'en' ? 'Bank Name' : 'ব্যাংকের নাম', value: bankDetails.bankName, key: 'bank' },
                    { label: lang === 'en' ? 'Account Number' : 'অ্যাকাউন্ট নম্বর', value: bankDetails.accountNumber, key: 'acc' },
                    { label: 'SWIFT / IFSC Code', value: bankDetails.swiftCode, key: 'swift' }
                  ].map((detail) => (
                    <div key={detail.key} className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex justify-between items-center group/item hover:bg-emerald-100 hover:border-emerald-300 transition-all">
                      <div>
                        <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{detail.label}</div>
                        <div className="text-lg font-bold text-[#1E1B4B]">{detail.value}</div>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(detail.value, detail.key)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${copiedField === detail.key ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500 hover:bg-emerald-500 hover:text-white'}`}
                      >
                        <i className={`fa-solid ${copiedField === detail.key ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-emerald-100 rounded-2xl border border-emerald-200 flex gap-4">
                  <i className="fa-solid fa-lightbulb text-emerald-700 text-xl flex-shrink-0 mt-1"></i>
                  <div>
                    <h4 className="font-black text-emerald-900 text-sm mb-2">{lang === 'en' ? 'How to Send' : 'কিভাবে পাঠাবেন'}</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      {lang === 'en'
                        ? 'Use your bank app or online banking to transfer money to these details. Save your transaction ID after the transfer - you\'ll need it in Step 2.'
                        : 'আপনার ব্যাংক অ্যাপ বা অনলাইন ব্যাংকিং ব্যবহার করে এই বিবরণে অর্থ স্থানান্তর করুন। স্থানান্তরের পরে আপনার লেনদেন আইডি সংরক্ষণ করুন - ধাপ ২-তে এটি প্রয়োজন হবে।'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Verification Form */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`relative bg-white rounded-3xl p-12 border-2 border-green-100 group-hover:border-green-300 hover:shadow-2xl transition-all duration-300 ${success ? 'hidden' : ''}`}>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-3xl shadow-lg">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1E1B4B]">{lang === 'en' ? 'Step 2' : 'ধাপ ২'}</h3>
                    <p className="text-green-700 text-xs font-bold uppercase tracking-widest">{lang === 'en' ? 'Verify & Submit' : 'যাচাই ও জমা দিন'}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">{lang === 'en' ? 'Full Name' : 'সম্পূর্ণ নাম'}</label>
                    <input
                      required
                      value={formData.donorName}
                      onChange={e => setFormData({...formData, donorName: e.target.value})}
                      type="text" 
                      className="w-full px-5 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all font-semibold" 
                      placeholder={lang === 'en' ? 'Your name' : 'আপনার নাম'}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">{lang === 'en' ? 'Email Address' : 'ইমেল ঠিকানা'}</label>
                    <input
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      type="email" 
                      className="w-full px-5 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all font-semibold" 
                      placeholder={lang === 'en' ? 'your@email.com' : 'আপনার@ইমেইল.কম'}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">{lang === 'en' ? 'Amount ($)' : 'পরিমাণ ($)'}</label>
                      <input
                        required
                        value={formData.amount}
                        onChange={e => setFormData({...formData, amount: e.target.value})}
                        type="text" 
                        className="w-full px-5 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all font-semibold" 
                        placeholder="100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">{lang === 'en' ? 'Transaction ID' : 'লেনদেন আইডি'}</label>
                      <input
                        required
                        value={formData.transactionId}
                        onChange={e => setFormData({...formData, transactionId: e.target.value})}
                        type="text" 
                        className="w-full px-5 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all font-semibold" 
                        placeholder="Ref #12345"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">{lang === 'en' ? 'Message (Optional)' : 'বার্তা (ঐচ্ছিক)'}</label>
                    <textarea
                      value={formData.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-5 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none transition-all font-semibold" 
                      rows={2} 
                      placeholder={lang === 'en' ? 'Why are you giving? (optional)' : 'কেন দিচ্ছেন? (ঐচ্ছিক)'}
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-black text-lg uppercase tracking-wide shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        {lang === 'en' ? 'Processing...' : 'প্রক্রিয়াকরণ...'}
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-heart"></i>
                        {lang === 'en' ? 'Confirm Donation' : 'দান নিশ্চিত করুন'}
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Success State */}
              {success && (
                <div className="relative bg-white rounded-3xl p-12 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 border-2 border-green-200 shadow-2xl">
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-3xl flex items-center justify-center text-5xl shadow-2xl">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-black text-[#1E1B4B] mb-3 tracking-tight">
                    {lang === 'bn' ? 'ধন্যবাদ!' : 'Thank You!'}
                  </h2>
                  <p className="text-slate-600 text-base mb-8 leading-relaxed max-w-xs">
                    {lang === 'bn'
                      ? 'আপনার দানের জন্য ধন্যবাদ। আপনি একটি বাস্তব পার্থক্য তৈরি করছেন।'
                      : 'Your donation has been received! You\'re making a real difference.'}
                  </p>
                  
                  <div className="bg-green-50 px-6 py-3 rounded-xl border border-green-200 mb-8">
                    <span className="text-xs font-black text-green-600 uppercase tracking-widest">
                      {lang === 'bn' ? 'রসিদ ইমেলে পাঠানো হয়েছে' : 'Receipt Sent to Email'}
                    </span>
                  </div>

                  <button 
                    onClick={() => setSuccess(false)} 
                    className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-black hover:bg-emerald-600 transition-all"
                  >
                    {lang === 'en' ? 'Make Another Donation' : 'আরও দান করুন'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-emerald-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-200">
              ❓ {lang === 'en' ? 'FAQ' : 'প্রায়শই জিজ্ঞাসিত প্রশ্ন'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-6 tracking-tight">
              {lang === 'en' ? 'Common Questions' : 'সাধারণ প্রশ্নাবলী'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: lang === 'en' ? 'Is my donation secure?' : 'আমার দান কি নিরাপদ?',
                a: lang === 'en' ? 'Yes, we use direct bank transfers which are secure and encrypted. You maintain full control of the transaction.' : 'হ্যাঁ, আমরা সরাসরি ব্যাংক স্থানান্তর ব্যবহার করি যা নিরাপদ এবং এনক্রিপ্ট করা। আপনি লেনদেনের সম্পূর্ণ নিয়ন্ত্রণ বজায় রাখেন।'
              },
              {
                q: lang === 'en' ? 'Can I get a receipt?' : 'আমি কি রসিদ পেতে পারি?',
                a: lang === 'en' ? 'Yes, a detailed receipt will be sent to your email immediately after verification.' : 'হ্যাঁ, যাচাইয়ের পরে আপনার ইমেলে একটি বিস্তারিত রসিদ পাঠানো হবে।'
              },
              {
                q: lang === 'en' ? 'How do I track my donation?' : 'আমি আমার দান কীভাবে ট্র্যাক করব?',
                a: lang === 'en' ? 'After verification, you\'ll receive regular updates about how your donation is being used.' : 'যাচাইয়ের পরে, আপনি আপনার দান কীভাবে ব্যবহার করা হচ্ছে সে সম্পর্কে নিয়মিত আপডেট পাবেন।'
              },
              {
                q: lang === 'en' ? 'Can I donate in other currencies?' : 'আমি কি অন্য মুদ্রায় দান করতে পারি?',
                a: lang === 'en' ? 'Yes, most banks support international transfers. Your bank will automatically convert at the current rate.' : 'হ্যাঁ, বেশিরভাগ ব্যাংক আন্তর্জাতিক স্থানান্তর সমর্থন করে। আপনার ব্যাংক বর্তমান হারে স্বয়ংক্রিয়ভাবে রূপান্তরিত হবে।'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-100 group-hover:border-emerald-300 hover:shadow-2xl transition-all duration-300">
                  <h4 className="font-black text-emerald-600 text-lg mb-4 flex items-start gap-3">
                    <span className="text-emerald-500 text-2xl">✓</span>
                    {item.q}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            {lang === 'en' ? 'Be Part of the Change' : 'পরিবর্তনের অংশ হন'}
          </h2>
          <p className="text-emerald-100 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'Your contribution transforms lives and strengthens our global mission of developing true human beings.'
              : 'আপনার অবদান জীবন রূপান্তরিত করে এবং প্রকৃত মানুষ গঠনের আমাদের বৈশ্বিক মিশনকে শক্তিশালী করে।'}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-gradient-to-r from-emerald-400 to-green-500 text-white rounded-2xl font-black transition-all hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
            >
              {lang === 'en' ? 'Donate Now' : 'এখনই দান করুন'} <i className="fa-solid fa-arrow-right"></i>
            </button>
            <a 
              href="/"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-black transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
            >
              {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
