
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { dbService } from '../services/dbService';
import { useLanguage } from '../App';

const Contact: React.FC = () => {
  const { lang } = useLanguage();

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const translations = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      description: 'Have questions about our programs or want to start a local chapter? We\'d love to hear from you. Reach out to us through any of the channels below.',
      email: 'Email',
      emailAddress: 'info@vivek-global.org',
      phone: 'Phone',
      phoneNumber: '+1 (234) 567-8900',
      location: 'Registered Office',
      locationAddress: 'Global Head Office, Bangalore, India',
      followUs: 'Follow Us',
      form: {
        name: 'Your Name',
        namePlaceholder: 'John Doe',
        email: 'Email Address',
        emailPlaceholder: 'john@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'How can we help?',
        message: 'Message',
        messagePlaceholder: 'Type your message here...',
        submit: 'Send Message',
        sending: 'Sending...',
      },
      success: {
        title: 'Message Sent!',
        description: 'Thank you for reaching out. We will get back to you shortly.',
        button: 'Send Another',
      },
      businessHours: 'Business Hours',
      monday: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
      saturday: 'Saturday: 10:00 AM - 4:00 PM IST',
      sunday: 'Sunday: Closed',
      faqs: 'Frequently Asked Questions',
      response: 'We typically respond within 24-48 hours during business days.',
    },
    bn: {
      title: 'আমাদের সাথে যোগাযোগ করুন',
      subtitle: 'আমাদের সাথে যোগাযোগ করুন',
      description: 'আমাদের কর্মসূচি সম্পর্কে প্রশ্ন আছে বা একটি স্থানীয় অধ্যায় শুরু করতে চান? আমরা আপনার কথা শুনতে চাই। নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন।',
      email: 'ইমেইল',
      emailAddress: 'info@vivek-global.org',
      phone: 'ফোন',
      phoneNumber: '+১ (२३४) ५६७-८९००',
      location: 'নিবন্ধিত অফিস',
      locationAddress: 'গ্লোবাল হেড অফিস, ব্যাঙ্গালোর, ভারত',
      followUs: 'আমাদের অনুসরণ করুন',
      form: {
        name: 'আপনার নাম',
        namePlaceholder: 'জন ডো',
        email: 'ইমেইল ঠিকানা',
        emailPlaceholder: 'john@example.com',
        subject: 'বিষয়',
        subjectPlaceholder: 'আমরা কীভাবে সাহায্য করতে পারি?',
        message: 'বার্তা',
        messagePlaceholder: 'আপনার বার্তা এখানে টাইপ করুন...',
        submit: 'বার্তা পাঠান',
        sending: 'পাঠাচ্ছে...',
      },
      success: {
        title: 'বার্তা পাঠানো হয়েছে!',
        description: 'আমাদের কাছে পৌঁছানোর জন্য ধন্যবাদ। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
        button: 'আরও একটি পাঠান',
      },
      businessHours: 'ব্যবসায়িক সময়',
      monday: 'সোমবার - শুক্রবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০ IST',
      saturday: 'শনিবার: সকাল ১০:०० - বিকেল ४:०० IST',
      sunday: 'রবিবার: বন্ধ',
      faqs: 'সাধারণত জিজ্ঞাসিত প্রশ্ন',
      response: 'আমরা সাধারণত কাজের দিনে ২৪-४८ ঘণ্টার মধ্যে সাড়া দিই।',
    },
  };

  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: 'info@vivek-global.org',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        }
      );

      // Also save to database
      await dbService.addMessage(formData);

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const errorMsg = lang === 'en' 
        ? 'Error sending message. Please try again later.' 
        : 'বার্তা পাঠাতে ত্রুটি হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।';
      setError(errorMsg);
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
            {t.description}
          </p>
          <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-orange-200">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 text-2xl">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.email}</h3>
            <p className="text-slate-600 mb-4">{t.emailAddress}</p>
            <p className="text-sm text-slate-500 mb-4">{t.faqs}</p>
            <a 
              href={`mailto:${t.emailAddress}`}
              className="inline-block px-6 py-2 bg-orange-100 text-orange-600 rounded-lg font-semibold hover:bg-orange-200 transition-all"
            >
              {lang === 'en' ? 'Send Email' : 'ইমেইল পাঠান'}
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-blue-200">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 text-2xl">
              <i className="fa-solid fa-phone"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.phone}</h3>
            <p className="text-slate-600 mb-4">{t.phoneNumber}</p>
            <p className="text-sm text-slate-500 mb-4">{t.businessHours}</p>
            <a 
              href={`tel:${t.phoneNumber}`}
              className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-200 transition-all"
            >
              {lang === 'en' ? 'Call Now' : 'এখনই কল করুন'}
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-green-200">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6 text-2xl">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.location}</h3>
            <p className="text-slate-600 mb-4">{t.locationAddress}</p>
            <p className="text-sm text-slate-500 mb-4">{t.businessHours}</p>
            <button 
              className="inline-block px-6 py-2 bg-green-100 text-green-600 rounded-lg font-semibold hover:bg-green-200 transition-all"
            >
              {lang === 'en' ? 'Get Directions' : 'দিকনির্দেশনা পান'}
            </button>
          </div>
        </div>

        {/* Business Hours & FAQs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              <i className="fa-solid fa-clock text-blue-600 mr-3"></i>
              {t.businessHours}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="font-semibold text-slate-700">{lang === 'en' ? 'Monday - Friday' : 'সোমবার - শুক্রবার'}</span>
                <span className="text-slate-600">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="font-semibold text-slate-700">{lang === 'en' ? 'Saturday' : 'শনিবার'}</span>
                <span className="text-slate-600">10:00 AM - 4:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-700">{lang === 'en' ? 'Sunday' : 'রবিবার'}</span>
                <span className="text-red-600 font-semibold">{lang === 'en' ? 'Closed' : 'বন্ধ'}</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              <i className="fa-solid fa-circle-question text-orange-600 mr-3"></i>
              {t.faqs}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-700 mb-2">
                  {lang === 'en' ? 'Response Time' : 'প্রতিক্রিয়া সময়'}
                </p>
                <p className="text-slate-600">{t.response}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-2">
                  {lang === 'en' ? 'Multiple Channels' : 'একাধিক চ্যানেল'}
                </p>
                <p className="text-slate-600">
                  {lang === 'en' 
                    ? 'Contact us via email, phone, or this form.'
                    : 'ইমেইল, ফোন বা এই ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-slate-200">
            {success ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.success.title}</h2>
                <p className="text-lg text-slate-600 mb-8">{t.success.description}</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  {t.success.button}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">
                  {lang === 'en' ? 'Send us a Message' : 'আমাদের একটি বার্তা পাঠান'}
                </h3>

                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <p className="text-red-700 font-semibold">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      {t.form.name}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder={t.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      {t.form.email}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      type="email"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder={t.form.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    {t.form.subject}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    required
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    placeholder={t.form.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    {t.form.message}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none resize-none transition-all"
                    rows={6}
                    placeholder={t.form.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-xl font-bold transition-all shadow-lg shadow-orange-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <i className={`fa-solid ${isSubmitting ? 'fa-spinner animate-spin' : 'fa-paper-plane'}`}></i>
                  {isSubmitting ? t.form.sending : t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.followUs}</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl hover:bg-blue-200 transition-all transform hover:scale-110">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-xl hover:bg-sky-200 transition-all transform hover:scale-110">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xl hover:bg-pink-200 transition-all transform hover:scale-110">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl hover:bg-red-200 transition-all transform hover:scale-110">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
