
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
    accountName: 'abc',
    bankName: 'abc bank',
    accountNumber: 'xxxxxxxx',
    swiftCode: 'yyyyyyy'
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
    <div className="py-24 bg-[#FCFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block animate-fade-in">
            {lang === 'bn' ? 'সেবা এবং অবদান' : 'Seva & Contribution'}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1E1B4B] mb-6 tracking-tighter">
            {lang === 'bn' ? 'আমাদের ভিশন সমর্থন করুন' : 'Support Our Vision.'}
            <span className="serif italic text-amber-600 underline decoration-amber-200 underline-offset-8 ml-2">{lang === 'bn' ? '' : ''}</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {lang === 'bn'
              ? '"যারা অন্যদের জন্য বাঁচেন শুধু তারাই প্রকৃত প্রাণবন্ত, বাকিরা তো আর বেশি কিছুই নয়।" — স্বামী বিবেকানন্দ'
              : '"They only live who live for others, the rest are more dead than alive." — Swami Vivekananda'}
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-sm border border-slate-100">
            <div className="flex items-center gap-2">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${success ? 'bg-emerald-500 text-white' : 'saffron-gradient text-white'}`}>1</span>
              <span className="text-sm font-bold text-slate-600">{lang === 'bn' ? 'তহবিল স্থানান্তর করুন' : 'Transfer Funds'}</span>
            </div>
            <div className="w-12 h-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${success ? 'saffron-gradient text-white' : 'bg-slate-100 text-slate-400'}`}>2</span>
              <span className={`text-sm font-bold ${success ? 'text-slate-600' : 'text-slate-400'}`}>{lang === 'bn' ? 'লেনদেন যাচাই করুন' : 'Verify Transaction'}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Step 1: Bank Details Card */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 saffron-gradient opacity-5 rounded-bl-[100%]"></div>
             
             <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl shadow-inner">
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#1E1B4B]">{lang === 'bn' ? 'ধাপ ১: ব্যাংক বিবরণ' : 'Step 1: Bank Details'}</h2>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{lang === 'bn' ? 'বৈশ্বিক সরাসরি স্থানান্তর' : 'Global Direct Transfer'}</p>
                </div>
             </div>

             <div className="space-y-4 mb-10">
                {[
                  { label: lang === 'bn' ? 'অ্যাকাউন্ট নাম' : 'Account Name', value: bankDetails.accountName, key: 'name' },
                  { label: lang === 'bn' ? 'ব্যাংক নাম' : 'Bank Name', value: bankDetails.bankName, key: 'bank' },
                  { label: lang === 'bn' ? 'অ্যাকাউন্ট সংখ্যা' : 'Account Number', value: bankDetails.accountNumber, key: 'acc' },
                  { label: lang === 'bn' ? 'SWIFT / IFSC কোড' : 'SWIFT / IFSC Code', value: bankDetails.swiftCode, key: 'swift' }
                ].map((detail) => (
                  <div key={detail.key} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex justify-between items-center group/item hover:bg-white hover:border-amber-200 transition-all">
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{detail.label}</div>
                      <div className="text-base font-bold text-slate-800">{detail.value}</div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(detail.value, detail.key)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${copiedField === detail.key ? 'bg-emerald-500 text-white' : 'bg-slate-200/50 text-slate-500 hover:bg-amber-600 hover:text-white'}`}
                    >
                      <i className={`fa-solid ${copiedField === detail.key ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                    </button>
                  </div>
                ))}
             </div>
             
             <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 flex gap-4">
                <i className="fa-solid fa-circle-info text-indigo-600 mt-1"></i>
                <div>
                  <h4 className="font-black text-indigo-900 text-sm mb-1">{lang === 'bn' ? 'নির্দেশাবলী' : 'Instructions'}</h4>
                  <p className="text-xs text-indigo-700 leading-relaxed">
                    {lang === 'bn'
                      ? 'আপনার ব্যাংকিং অ্যাপ ব্যবহার করে স্থানান্তর করুন। সম্পন্ন হওয়ার পর, একটি স্ক্রিনশট নিন বা '
                      : 'Make your transfer using your banking app. Once completed, take a screenshot or note down the '}
                    <strong>{lang === 'bn' ? 'লেনদেন আইডি' : 'Transaction ID'}</strong>. 
                    {lang === 'bn' 
                      ? ' যাচাইকরণ ফর্মের জন্য এটি প্রয়োজন হবে।'
                      : ' You will need it for the verification form.'}
                  </p>
                </div>
             </div>
          </div>

          {/* Step 2: Submission Form */}
          <div className="relative">
             <div className={`bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl text-white transition-all duration-700 ${success ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 text-amber-500 flex items-center justify-center text-2xl shadow-inner">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black">{lang === 'bn' ? 'ধাপ ২: যাচাইকরণ' : 'Step 2: Verification'}</h2>
                    <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">{lang === 'bn' ? 'আমাদের আপনার উপহার সম্পর্কে অবহিত করুন' : 'Inform us of your gift'}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">{lang === 'bn' ? 'দাতার নাম' : 'Donor Name'}</label>
                    <input
                      required
                      value={formData.donorName}
                      onChange={e => setFormData({...formData, donorName: e.target.value})}
                      type="text" 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600 font-bold" 
                      placeholder={lang === 'bn' ? 'আপনার সম্পূর্ণ নাম' : 'Your Full Name'} 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">{lang === 'bn' ? 'ইমেল' : 'Email'}</label>
                    <input
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      type="email" 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600 font-bold" 
                      placeholder={lang === 'bn' ? 'আপনার ইমেল' : 'Your Email'} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">{lang === 'bn' ? 'পরিমাণ' : 'Amount'}</label>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 font-black">$</span>
                        <input
                          required
                          value={formData.amount}
                          onChange={e => setFormData({...formData, amount: e.target.value})}
                          type="text" 
                          className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600 font-bold" 
                          placeholder="0.00" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">{lang === 'bn' ? 'লেনদেন আইডি' : 'Transaction ID'}</label>
                      <input
                        required
                        value={formData.transactionId}
                        onChange={e => setFormData({...formData, transactionId: e.target.value})}
                        type="text" 
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600 font-bold" 
                        placeholder="Ref #12345" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">{lang === 'bn' ? 'অতিরিক্ত নোট' : 'Additional Notes'}</label>
                    <textarea
                      value={formData.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none resize-none transition-all placeholder:text-slate-600 font-bold" 
                      rows={3} 
                      placeholder={lang === 'bn' ? 'ঐচ্ছিক বার্তা...' : 'Optional message...'}
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-5 saffron-gradient text-white rounded-[1.5rem] font-black text-lg shadow-2xl shadow-orange-900/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shine-effect disabled:opacity-50"
                  >
                    {isSubmitting ? (lang === 'bn' ? 'প্রক্রিয়াকরণ...' : 'Processing...') : (lang === 'bn' ? 'দান সম্পূর্ণ করুন' : 'Complete Donation')}
                    <i className="fa-solid fa-paper-plane text-sm"></i>
                  </button>
                </form>
             </div>

             {/* Success View */}
             {success && (
               <div className="absolute inset-0 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 border border-emerald-100">
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-emerald-100 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-emerald-500 text-white rounded-[2.5rem] flex items-center justify-center text-5xl shadow-xl shadow-emerald-200 transform -rotate-6">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-black text-[#1E1B4B] mb-4 tracking-tight">
                    {lang === 'bn' ? 'ঐশ্বিক কৃতজ্ঞতা!' : 'Divine Gratitude!'}
                  </h2>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-sm">
                    {lang === 'bn'
                      ? 'আপনার নিঃস্বার্থ অবদানের জন্য ধন্যবাদ। আপনার সমর্থন সরাসরি আমাদের শক্তি এবং সেবার মিশনকে ক্ষমতায়িত করে।'
                      : 'Thank you for your selfless contribution. Your support directly empowers our mission of strength and service.'}
                  </p>
                  
                  <div className="bg-emerald-50 px-8 py-4 rounded-2xl border border-emerald-100 mb-10">
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em]">
                      {lang === 'bn' ? 'স্বীকৃতি রসিদ পাঠানো হয়েছে' : 'Acknowledgment Receipt Sent'}
                    </span>
                  </div>

                  <button 
                    onClick={() => setSuccess(false)} 
                    className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-amber-600 transition-all shadow-xl hover:shadow-orange-200"
                  >
                    {lang === 'bn' ? 'বাড়িতে ফিরুন' : 'Return to Home'}
                  </button>
               </div>
             )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
           <h3 className="text-2xl font-black text-[#1E1B4B] mb-8 text-center serif">
             {lang === 'bn' ? 'সাধারণ প্রশ্ন' : 'Common Questions'}
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                 <h4 className="font-black text-amber-600 text-sm uppercase mb-3">
                   {lang === 'bn' ? 'আমার আইডি কোথায়?' : 'Where is my ID?'}
                 </h4>
                 <p className="text-sm text-slate-500 leading-relaxed">
                   {lang === 'bn'
                     ? 'বেশিরভাগ ব্যাংক সফল স্থানান্তরের পরে অবিলম্বে "রেফারেন্স নম্বর" বা "লেনদেন আইডি" প্রদান করে। এটি আপনার লেনদেনের ইতিহাসেও পাওয়া যায়।'
                     : 'Most banks provide a "Reference Number" or "Transaction ID" immediately after a successful transfer. It is also found in your transaction history.'}
                 </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                 <h4 className="font-black text-amber-600 text-sm uppercase mb-3">
                   {lang === 'bn' ? 'এটি নিরাপদ?' : 'Is it Secure?'}
                 </h4>
                 <p className="text-sm text-slate-500 leading-relaxed">
                   {lang === 'bn'
                     ? 'সরাসরি ব্যাংক হস্তান্তর ব্যবহার করে, আপনি আপনার ব্যাংকের নিরাপদ ইকোসিস্টেমের মধ্যে আপনার লেনদেনের সম্পূর্ণ নিয়ন্ত্রণ বজায় রাখেন। আমরা শুধুমাত্র যাচাইকরণ ডেটা সংরক্ষণ করি।'
                     : 'By using direct bank transfers, you maintain full control of your transaction within your bank\'s secure ecosystem. We only store the verification data.'}
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
