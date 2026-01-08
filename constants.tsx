import React from 'react';
import { Event, LibraryItem, Scholarship } from './types';

export type Language = 'en' | 'bn';

export const TRANSLATIONS = {
  en: {
    nav: { home: 'Home', events: 'Events', library: 'Library', scholarships: 'Scholarships', join: 'Join Us', donate: 'Donate', about: 'About', prayers: 'Study Circle', aboutUs: 'About Us' },
    hero: { title: 'To Be Good', subtitle: '& To Do Good', tagline: 'A Global network initiatives to the way of our self consciousness...', desc: '"Arise, awake, and stop not until the goal is reached." Join the mission of strength and service.', heroParagraph: 'Join a global community inspired by Swami Vivekananda\'s timeless wisdom. Transform yourself and serve humanity through education, spirituality, and selfless service.', cta1: 'Become a Member', cta2: 'Our Philosophy' },
    prayers: { title: 'Global Sanctuary', subtitle: 'Collective Prayer', desc: 'Join our synchronized global sessions for peace and strength.', joinBtn: 'Join Meet', instructions: 'Please join 5 minutes early for technical setup.', schedule: 'Prayer Schedule', scheduleDesc: 'Synchronized sessions held weekly on Sundays.', techRequirements: 'Technical Requirements', techDesc: 'Stable internet, headphones, and a quiet environment are recommended for the best experience.', etiquette: 'Etiquette', etiquetteDesc: 'Please keep your microphone muted unless instructed otherwise. Cameras are optional but encouraged.', timeRemaining: 'Time Remaining', quote: '"Prayer is the highest strength a human can possess."', active: 'Active' },
    events: { pageTitle: 'Upcoming Events', subtitle: 'Events & Activities', desc: 'Join our international community in collective spiritual practices and educational workshops.', viewDetails: 'View Details', joinLink: 'Join Link', category: 'Category', date: 'Date', time: 'Time', location: 'Location', description: 'Description', virtualEventLink: 'Virtual Event Link', joinOnline: 'Join Online Prayer', close: 'Close', upcoming: 'Upcoming', ongoing: 'Ongoing' },
    library: { pageTitle: 'Digital Sanctuary', subtitle: 'The Vivek Archives', desc: 'Explore a curated collection of Swamiji\'s timeless wisdom, digitized for seekers in every corner of the globe.', all: 'All', letters: 'Letters', collectedWorks: 'Collected Works', otherWritings: 'Other Writings', author: 'Author', category: 'Category', doneReading: 'Done Reading', readMore: 'Read', fromArchives: 'From the archives of', editorialBoard: 'Vivek Editorial Board' },
    about: { pageTitle: 'About Us', subtitle: 'Organization Overview & Mission', orgDescription: 'Organization Description', orgName: 'Organization Name', nameEn: 'English: Vivekananda International Value and Education Centre—VIVEK', nameBn: 'Bengali: Vivekananda Vedanta Centre—Vivek', foundedDate: 'Founded Date', foundedDesc: 'After operating informally for approximately 13 years since 2011, the organization formally announced its official launch on January 1, 2024. Therefore, January 1 is celebrated as the organization\'s founding day.', address: 'Address', addressOnline: 'Online: Website: http://vivekfoundation.org', orgType: 'Organization Type', orgTypeDesc: 'Apolitical, Non-profit, Service-oriented Non-governmental Institution', ideology: 'Ideology & Objectives', ideologyTitle: 'Ideology', ideologyDesc: 'The life and teachings of Swami Vivekananda form the foundation of this organization. Guided by his principle "To be good and to do good—that is the whole of religion," we strive to develop ourselves as true human beings and help others become true human beings as well.', objectives: 'Objectives', objectivesDesc: 'While striving to develop ourselves as true humans, we aim to serve humanity for the welfare of ourselves and society. Some short and long-term objectives include:', objectiveList: [ 'Build a socially conscious and awakened youth community through service initiatives', 'Assist underprivileged and disadvantaged children to become responsible citizens', 'Provide support to all regardless of caste, creed, religion, age, or background in their journey to become true humans', 'Give special focus and priority to backward, homeless, disadvantaged, minority, and tribal communities' ], foundersTitle: 'Founders & Members', foundersDesc: 'This organization has no single founder. All individuals who work for the organization are important members. The organization maintains no significant titles or positions. While volunteers may be assigned various responsibilities and administrative titles may be used internally, all members publicly identify as "Vivekananda Devotees" and use no official titles in public engagement or interactions with the general public.', activitiesTitle: 'Organization Activities', activitiesDesc: 'The organization\'s work is divided into two main categories:', selfDevelopment: 'Self-Development Activities', selfDevelopmentList: [ 'Study circles (weekly or monthly)', 'Book reading programs', 'Educational courses, seminars, and workshops', 'Meditation, yoga, and other physical and mental wellness programs', 'Competitions for youth and children: drawing, quizzes, recitation, debates, olympiads, music, and other talents' ], serviceActivities: 'Service Activities', serviceActivitiesList: [ 'Education Services: Distribution of free educational materials', 'Medical Services: Free primary healthcare and medicine distribution', 'Festival Support: Distribution of new clothes during festivals', 'Disaster Relief & Emergency Support: Providing food and assistance during crises', 'Humanitarian Service: Participation in all human welfare activities' ] }
  },
  bn: {
    nav: { home: 'প্রচ্ছদ', events: 'অনুষ্ঠান', library: 'গ্রন্থাগার', scholarships: 'বৃত্তি', join: 'সদস্য হন', donate: 'দান করুন', about: 'আমাদের সম্পর্কে', prayers: 'প্রার্থনা', aboutUs: 'আমাদের সম্পর্কে' },
    hero: {
      title: 'ভালো চিন্তা',
      subtitle: 'ভালো কাজ',
      tagline: 'স্বামী বিবেকানন্দের আদর্শে অনুপ্রাণিত একটি বিশ্বব্যাপী সংগঠন',
      desc:
        '"ওঠো, জাগো এবং লক্ষ্যে না পৌঁছানো পর্যন্ত থেমো না।"\n' +
        'মানবতা, শিক্ষা ও সেবার এই মহৎ অভিযাত্রায় আমাদের সঙ্গে যুক্ত হোন।',
      heroParagraph: 'স্বামী বিবেকানন্দের চিরন্তন জ্ঞান দ্বারা অনুপ্রাণিত একটি বৈশ্বিক সম্প্রদায়ে যোগ দিন। শিক্ষা, আধ্যাত্মিকতা এবং নিঃস্বার্থ সেবার মাধ্যমে নিজেকে রূপান্তরিত করুন এবং মানবতার সেবা করুন।',
      cta1: 'সদস্যপদ গ্রহণ করুন',
      cta2: 'আমাদের আদর্শ জানুন'
    },
    prayers: { title: 'বিশ্বব্যাপী প্রার্থনা', subtitle: 'সম্মিলিত উপাসনা', desc: 'শান্তি ও শক্তির জন্য আমাদের নির্ধারিত বিশ্বব্যাপী প্রার্থনা সভায় যোগ দিন।', joinBtn: 'জুমে যোগ দিন', instructions: 'অনুগ্রহ করে ৫ মিনিট আগে যুক্ত হওয়ার চেষ্টা করুন।', schedule: 'প্রার্থনা সময়সূচী', scheduleDesc: 'প্রতি সপ্তাহের রবিবার নির্ধারিত প্রার্থনা সভা।', techRequirements: 'প্রযুক্তিগত প্রয়োজনীয়তা', techDesc: 'সর্বোত্তম অভিজ্ঞতার জন্য স্থিতিশীল ইন্টারনেট, হেডফোন এবং শান্ত পরিবেশ সুপারিশকৃত।', etiquette: 'আচরণ নীতি', etiquetteDesc: 'অনুগ্রহ করে আপনার মাইক্রোফোন নিঃশব্দ রাখুন যতক্ষণ না আপনাকে নির্দেশ দেওয়া হয়। ক্যামেরা ঐচ্ছিক কিন্তু উৎসাহিত।', timeRemaining: 'বাকি সময়', quote: '"প্রার্থনা হল মানুষের সর্বোচ্চ শক্তি।"', active: 'সক্রিয়' },
    events: { pageTitle: 'আসন্ন অনুষ্ঠান', subtitle: 'অনুষ্ঠান ও কার্যক্রম', desc: 'আমাদের আন্তর্জাতিক সম্প্রদায়ে যোগ দিন যেখানে সম্মিলিত আধ্যাত্মিক অনুশীলন এবং শিক্ষামূলক কর্মশালা আয়োজন করা হয়।', viewDetails: 'বিস্তারিত দেখুন', joinLink: 'যুক্ত হন', category: 'বিভাগ', date: 'তারিখ', time: 'সময়', location: 'স্থান', description: 'বর্ণনা', virtualEventLink: 'অনলাইন ইভেন্ট লিঙ্ক', joinOnline: 'অনলাইন প্রার্থনায় যোগ দিন', close: 'বন্ধ করুন', upcoming: 'আসন্ন', ongoing: 'চলমান' },
    library: { pageTitle: 'ডিজিটাল আশ্রয়স্থল', subtitle: 'বিবেক আর্কাইভস', desc: 'স্বামীজির নিরন্তর জ্ঞানের একটি নির্বাচিত সংগ্রহ অন্বেষণ করুন, বিশ্বের প্রতিটি কোণে সন্ধানকারীদের জন্য ডিজিটালভাবে সংরক্ষিত।', all: 'সব', letters: 'পত্র', collectedWorks: 'সংগৃহীত রচনা', otherWritings: 'অন্যান্য লেখা', author: 'লেখক', category: 'বিভাগ', doneReading: 'পড়া সম্পন্ন', readMore: 'পড়ুন', fromArchives: 'এর আর্কাইভ থেকে', editorialBoard: 'বিবেক সম্পাদনা বোর্ড' },
    about: { pageTitle: 'আমাদের সম্পর্কে', subtitle: 'সংগঠনের বিবরণ ও মিশন', orgDescription: 'সংগঠনের বিবরণ', orgName: 'সংগঠনের নাম', nameBn: 'বাংলায়: বিবেকানন্দ বেদান্ত কেন্দ্র—বিবেক', nameEn: 'ইংরেজিতে: বিবেকানন্দ আন্তর্জাতিক মূল্যবোধ ও শিক্ষা কেন্দ্র—বিবেক', foundedDate: 'প্রতিষ্ঠা দিবস', foundedDesc: 'প্রায় ১৩ বছর (२०१১ সাল থেকে) আনুষ্ঠানিকভাবে কার্যক্রম পরিচালনার পর २०२४ সালের ১ জানুয়ারি থেকে এই সংগঠন আনুষ্ঠানিক যাত্রা শুরু করে। সুতরাং প্রয়োজন হলে ১ জানুয়ারি সংগঠনের প্রতিষ্ঠা দিবস হিসেবে উদযাপিত হবে।', address: 'সংগঠনের ঠিকানা', addressOnline: 'অনলাইন: ওয়েবসাইট: http://vivekfoundation.org', orgType: 'সংগঠনের ধরন', orgTypeDesc: 'অরাজনৈতিক, অলাভজনক, সেবামূলক বেসরকারি প্রতিষ্ঠান', ideology: 'আদর্শ ও উদ্দেশ্য', ideologyTitle: 'আদর্শ', ideologyDesc: 'বিবেকানন্দের জীবন ও বাণী এই সংগঠনের আদর্শ। "ভালো মানুষ হও এবং অন্যকে ভালো মানুষ হতে সহায়তা করা"—স্বামী বিবেকানন্দের এই বাণীকে আদর্শ মেনে নিজেকে প্রকৃত মানুষ হিসেবে গড়ে তোলার চেষ্টা করা এবং অন্যদেরকে প্রকৃত মানুষ হিসেবে গড়ে উঠতে সহায়তা করা এই সংগঠনের প্রধান কাজ।', objectives: 'উদ্দেশ্য', objectivesDesc: 'নিজেকে প্রকৃত মানুষ হিসেবে গড়ে তোলার প্রচেষ্টার পাশাপাশি মানবসেবার মাধ্যমে নিজের এবং জগতের কল্যাণ করা এই সংগঠনের উদ্দেশ্য:', objectiveList: [ 'সেবাকার্যক্রমের মাধ্যমে কিছু জাগ্রত বিবেকের যুব-সমাজ গঠন করা', 'পিছিয়ে পড়া বা সুবিধাবঞ্চিত ছেলেমেয়েদের সুবিধা প্রদানের মাধ্যমে সুনাগরিক হিসেবে গড়ে উঠতে সহায়তা করা', 'প্রকৃত মানুষ হিসেবে গড়ে ওঠার প্রচেষ্টায় সমাজের সর্বস্তরের জাতি, ধর্ম, বর্ণ, বয়স নির্বিশেষে সকলকে সকল ধরনের সহযোগিতা প্রদান করা', 'মানব সেবার কার্যক্রমে পিছিয়ে পড়া, ছিন্নমূল, সুবিধা-বঞ্চিত, সংখ্যালঘু, উপজাতি সম্প্রদায়কে প্রাধান্য দিয়ে কাজ করা' ], foundersTitle: 'প্রতিষ্ঠাতা ও সদস্যদের পরিচয়', foundersDesc: 'এই সংগঠনের একক কোন প্রতিষ্ঠাতা নেই। সময়ের দাবিতে যারা এই সংগঠনের কাজ করবেন সকলেই এই সংগঠনের গুরুত্বপূর্ণ সদস্য। সংগঠনের কোন উল্লেখযোগ্য পদ-পদবী থাকবে না। নীতিমালা অনুযায়ী বিভিন্ন সময়ে বিভিন্ন স্বেচ্ছাসেবী কর্মীদের বিভিন্ন দায়িত্বে নিয়োগ করা হবে, তবে কোন সদস্য সমাজে কিংবা সাধারণ মানুষের কাছে দাপ্তরিক পদবী ব্যবহার বা প্রচার করতে পারবেন না। সংগঠনের প্রত্যেক স্বেচ্ছাসেবী সংগঠনের প্রতিনিধি হিসেবে নিজেকে একজন "বিবেকানুরাগী" হিসেবে পরিচয় প্রদান করবেন।', activitiesTitle: 'সংগঠনের কার্যক্রম', activitiesDesc: 'সংগঠনের কার্যক্রম প্রধানত দুই ভাগে বিভক্ত হয়:', selfDevelopment: 'আত্ম-উন্নয়নমূলক কার্যক্রম', selfDevelopmentList: [ 'পাঠচক্র (সাপ্তাহিক বা মাসিক)', 'বই পড়া কার্যক্রম', 'শিক্ষামূলক কোর্স, সেমিনার বা ওয়ার্কশপ আয়োজন', 'মেডিটেশন, যোগব্যায়াম ইত্যাদি শারীরিক ও মানসিক উন্নয়নের সহায়ক কার্যক্রম পরিচালনা', 'বিভিন্ন দিবস বা উৎসব উপলক্ষে শিশু-কিশোর, যুবকদের মাঝে আত্ম-বিকাশমূলক প্রতিযোগিতা যেমন: চিত্রাঙ্কন, কুইজ, আবৃত্তি, বিতর্ক, অলিম্পিয়াড, সংগীত ইত্যাদি আয়োজন' ], serviceActivities: 'সেবামূলক কার্যক্রম', serviceActivitiesList: [ 'শিক্ষা সেবা: বিনামূল্যে শিক্ষা উপকরণ বিতরণ', 'চিকিৎসা সেবা: বিনামূল্যে প্রাথমিক চিকিৎসা সেবা এবং ঔষধ বিতরণ', 'বিভিন্ন উৎসবে নতুন পোশাক বিতরণ', 'দুর্যোগ ও ত্রাণ ব্যবস্থা: প্রতিকূল অবস্থা বা অভুক্তদের খাদ্য ব্যবস্থা করা', 'যেকোনো মানবতা সেবা অংশগ্রহণ' ] }
  }
};

export const QUOTES = [ "Arise, awake, and stop not until the goal is reached.", "Strength is Life, Weakness is Death.", "Believe in yourself and the world will be at your feet.", "The greatest sin is to think yourself weak.", "You cannot believe in God until you believe in yourself.", "All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.", "Purity, patience, and perseverance are the three essentials to success and, above all, love." ];

export const MOCK_EVENTS: Event[] = [
  {    id: '4',
    title: "Vivekananda Charcha (Study Circle – 18)",
    titleBn: "বিবেকানন্দ চর্চা (পাঠচক্র–১৮)",
    date: 'Jan 11, 2026',
    time: `🇧🇩 BD Time: 6:30 PM
🇮🇳 India Time: 6:00 PM
🇦🇺 Australian Time: 11:30 AM
🇺🇸 US Time: 12:30 AM`,
    location: 'Virtual & In-person',
    locationBn: 'ভার্চুয়াল এবং সশরীরে',
    category: 'Event',
    description: `Dear Esteemed Well-wisher,

You are cordially invited to participate in the "Vivekananda Study Circle," organized by the Vivekananda Vedanta Centre (VIVEK).

🔰 Study Circle: Vivekananda Discussion – 18

📖 Topic: Challenges of Daily Life and Their Solutions in the Light of the Teachings of Swami Vivekananda

🎙️ Speaker: Swami Sthiratmanandaji

We warmly welcome your presence and active participation.`,

    descriptionBn: `সুপ্রিয় সুধী,

বিবেকানন্দ বেদান্ত কেন্দ্র (বিবেক) আয়োজিত "বিবেকানন্দ চর্চা (পাঠচক্র–১৮)" অনুষ্ঠানে অংশগ্রহণের জন্য আপনাকে আন্তরিক আমন্ত্রণ জানাচ্ছি।

🔰 পাঠচক্র: বিবেকানন্দ চর্চা – ১৮

📖 বিষয়: স্বামী বিবেকানন্দের জীবনবাণীর আলোকে দৈনন্দিন জীবনের সমস্যা ও তার সমাধান

🎙️ বক্তা: স্বামী স্থিরাত্মানন্দজী

আপনার উপস্থিতি আমাদের পরম আনন্দের বিষয় হবে।`,
    meetingLink: 'https://meet.google.com/wff-nhoe-fig',
    imageUrl: '/images/ff.jpeg'
  }
];


export const MOCK_LIBRARY: LibraryItem[] = [
  {
    id: 'l1',
    title: 'Letter to Alasinga Perumal',
    titleBn: 'অলাসিঙ্গা পেরুমালকে পত্র',
    category: 'Letters',
    description: 'A fundamental piece of correspondence regarding the future of India and the duty of the youth.',
    descriptionBn: 'ভারতের ভবিষ্যৎ এবং যুবকদের কর্তব্য সম্পর্কে একটি মৌলিক পত্র।',
    author: 'Swami Vivekananda',
    authorBn: 'স্বামী বিবেকানন্দ',
    content: '"Work on with even more energy. Be brave and face everything—come what may, have faith that you will succeed in the end. The great truths are the properties of all ages and all countries; the little things of each age and country are the veriest nonsense."',    contentBn: '"আরও শক্তি নিয়ে কাজ চালিয়ে যান। সাহসী হন এবং সবকিছুর মুখোমুখি হন—যা আসবে তাই আসুক, বিশ্বাস রাখুন যে আপনি শেষ পর্যন্ত সফল হবেন। মহান সত্যগুলি সমস্ত যুগ এবং সমস্ত দেশের সম্পত্তি; প্রতিটি যুগ এবং দেশের ছোট জিনিসগুলি সবচেয়ে নিরর্থক।"',    imageUrl: '/images/alas.jpg'
  },
  {
    id: 'l2',
    title: 'Karma-Yoga',
    titleBn: 'কর্ম-যোগ',
    category: 'Collected Works',
    description: 'A profound exploration of the yoga of action and its application in modern life.',
    descriptionBn: 'কর্মের যোগ এবং আধুনিক জীবনে এর প্রয়োগ সম্পর্কে গভীর অন্বেষণ।',
    author: 'Swami Vivekananda',
    authorBn: 'স্বামী বিবেকানন্দ',
    content: '"They alone live who live for others. The great secret of true success is to work, to work with all your heart and soul, work as the very salvation of your soul. This is the real socialism."',    contentBn: '"যারা অন্যদের জন্য বাঁচে তারাই বাঁচে। প্রকৃত সাফল্যের মহান রহস্য হল কাজ করা, সমস্ত হৃদয় এবং আত্মা দিয়ে কাজ করা, আপনার আত্মার মুক্তি হিসেবে কাজ করা। এটিই প্রকৃত সমাজতন্ত্র।"',
    imageUrl: '/images/karma.jpg'
  },
  {
    id: 'l3',
    title: 'Bhakti-Yoga',
    titleBn: 'ভক্তি-যোগ',
    category: 'Collected Works',
    description: 'The path of devotion and love in spiritual practice.',
    descriptionBn: 'আধ্যাত্মিক অনুশীলনে ভক্তি এবং ভালোবাসার পথ।',
    author: 'Swami Vivekananda',
    authorBn: 'স্বামী বিবেকানন্দ',
    content: '"Love is the greatest religion in the world. However, love must not be blind. It must be enlightened. When love is joined with knowledge, it becomes something divine."',    contentBn: '"ভালোবাসা হল পৃথিবীর সবচেয়ে বড় ধর্ম। তবে, ভালোবাসা অন্ধ হতে পারে না। এটি অবশ্যই জ্ঞাত হতে হবে। যখন ভালোবাসা জ্ঞানের সাথে যুক্ত হয়, তখন এটি কিছু দেবীয় হয়ে ওঠে।"',
    imageUrl: '/images/bhakti.jpg'
  },
  {
    id: 'l4',
    title: 'Raja-Yoga',
    titleBn: 'রাজ-যোগ',
    category: 'Collected Works',
    description: 'The science of mental discipline and meditative practices.',
    descriptionBn: 'মানসিক শৃঙ্খলা এবং ধ্যানমূলক অনুশীলনের বিজ্ঞান।',
    author: 'Swami Vivekananda',
    authorBn: 'স্বামী বিবেকানন্দ',
    content: '"Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal. Do this either by work, or worship, or psychic control, or philosophy."',    contentBn: '"প্রতিটি আত্মা সম্ভাব্যত দেবীয়। লক্ষ্য হল প্রকৃতিকে নিয়ন্ত্রণ করে, বাহ্যিক এবং আভ্যন্তরীণ উভয়ই, এই দেবীয়তাকে প্রকাশ করা। এটি করুন কাজ, বা পূজা, বা মানসিক নিয়ন্ত্রণ, বা দর্শনের মাধ্যমে।"',
    imageUrl: '/images/raja.jpg'
  },
  {
    id: 'l5',
    title: 'Addresses on Bhakti-Yoga',
    titleBn: 'ভক্তি-যোগ বক্তৃতা',
    category: 'Other Writings',
    description: 'Inspiring lectures on the practice of devotional yoga and its universal principles.',
    descriptionBn: 'ভক্তিমূলক যোগ এবং এর সার্বজনীন নীতি সম্পর্কে অনুপ্রেরণামূলক বক্তৃতা।',
    author: 'Swami Vivekananda',
    authorBn: 'স্বামী বিবেকানন্দ',
    content: '"Religions have numbers only on account of their weakness. When religion becomes strong, who cares for numbers? To the truly universal man, the whole world is his own."',    contentBn: '"ধর্মগুলির সংখ্যা শুধুমাত্র তাদের দুর্বলতার কারণে থাকে। যখন ধর্ম শক্তিশালী হয়, কে সংখ্যার পরোয়া করে? সত্যিকারের সর্বজনীন মানুষের কাছে, সারা বিশ্ব তার নিজের।"',
    imageUrl: '/images/bhaktii.jpg'
  },
  {
    id: 'l6',
    title: 'On Caste',
    titleBn: 'জাতি সম্পর্কে',
    category: 'Other Writings',
    description: 'Critical examination of caste system and its social implications.',
    descriptionBn: 'জাতি ব্যবস্থা এবং এর সামাজিক প্রভাব সম্পর্কে সমালোচনামূলক পরীক্ষা।',
    author: 'Swami Vivekananda',
    authorBn: 'স্বামী বিবেকানন্দ',
    content: '"Every nation has a tendency to think that it is the greatest nation in the world. The same is true about individuals. This is very natural. But we must not lose sight of the fact that the world is composed of many nations and individuals."',
    contentBn: '"প্রতিটি জাতির একটি প্রবণতা আছে যে এটি বিশ্বের সবচেয়ে মহান জাতি। ব্যক্তিদের ক্ষেত্রেও একই সত্য। এটি খুবই স্বাভাবিক। কিন্তু আমাদের অবশ্যই মাথায় রাখতে হবে যে পৃথিবী অনেক জাতি এবং ব্যক্তিদের দ্বারা গঠিত।"',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwD-2Vz0uw8ve9JYe1KXznQj2diFiv1Qd3Ig&s'
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'education-merit',
    name: "Vivek – Education & Merit Development Scholarship",
    nameBn: "'বিবেক'–শিক্ষা ও মেধাবিকাশ বৃত্তি",
    description: 'Supporting meritorious students with excellent academic performance who lack financial resources. This scholarship provides comprehensive educational support.',
    descriptionBn: 'চমৎকার একাডেমিক পারফরম্যান্স সম্পন্ন মেধাবী শিক্ষার্থীদের যারা আর্থিক সহায়তা প্রয়োজন তাদের সমর্থন করে। এই বৃত্তি ব্যাপক শিক্ষাগত সহায়তা প্রদান করে।',
    eligibility: 'Min --% academic performance, family income < ----/year, age --- years',
    eligibilityBn: 'ন্যূনতম -- একাডেমিক পারফরম্যান্স, পারিবারিক আয় < ----- /বছর, বয়স ---- বছর',
    amount: '---- - --- per year',
    amountBn: '------- প্রতি বছর',
    deadline: 'Rolling admissions',
    deadlineBn: 'সারা বছর আবেদন গ্রহণ',
    benefits: ['Full/Partial tuition support', 'Study materials allowance', 'Mentorship program', 'Career guidance'],
    benefitsBn: ['সম্পূর্ণ/আংশিক টিউশন সহায়তা', 'অধ্যয়ন সামগ্রী ভাতা', 'মেন্টরশিপ কর্মসূচি', 'ক্যারিয়ার নির্দেশনা']
  },
  {
    id: 'medical-service',
    name: "''Vivek'–Medical Service Scholarship",
    nameBn: "'বিবেক'–চিকিৎসা সেবা বৃত্তি",
    description: 'Supporting medical students and aspiring healthcare professionals to pursue their studies and serve the community. This scholarship focuses on those committed to healthcare service.',
    descriptionBn: 'চিকিৎসা শিক্ষার্থী এবং আকাঙ্ক্ষী স্বাস্থ্যসেবা পেশাদারদের তাদের অধ্যয়ন পরিচালনা এবং সম্প্রদায়কে সেবা দিতে সমর্থন করে। এই বৃত্তি স্বাস্থ্যসেবা সেবায় প্রতিশ্রুতিবদ্ধদের উপর দৃষ্টি নিবদ্ধ করে।',
    eligibility: 'qualified or pursuing medical studies, family income < -----/year, age ---- years',
    eligibilityBn: 'যোগ্য বা চিকিৎসা অধ্যয়নরত, পারিবারিক আয় < ----- /বছর, বয়স ----- বছর',
    amount: '------ per year',
    amountBn: '------ প্রতি বছর',
    deadline: 'Quarterly selection',
    deadlineBn: 'ত্রৈমাসিক নির্বাচন',
    benefits: ['Medical course tuition support', 'Books & practical expenses', 'Research opportunities', 'Internship stipend'],
    benefitsBn: ['চিকিৎসা কোর্স টিউশন সহায়তা', 'বই এবং ব্যবহারিক খরচ', 'গবেষণা সুযোগ', 'ইন্টার্নশিপ বৃত্তি']
  },
  {
    id: 'vivekananda-study',
    name: "Bibek Charcha Fund",
    nameBn: "বিবেকানন্দ চর্চা ফান্ড",
    description: 'Dedicated to students pursuing philosophy, spirituality, and Vedantic studies inspired by Swami Vivekananda. Supports research and academic work in these fields.',
    descriptionBn: 'স্বামী বিবেকানন্দ দ্বারা অনুপ্রাণিত দর্শন, আধ্যাত্মিকতা এবং বেদান্তিক অধ্যয়ন অনুসরণকারী শিক্ষার্থীদের জন্য নিবেদিত। এই ক্ষেত্রগুলিতে গবেষণা এবং একাডেমিক কাজকে সমর্থন করে।',
    eligibility: 'Philosophy/spirituality/Vedanta students, family income < ₹6,00,000/year, passionate about Swami Vivekananda\'s teachings',
    eligibilityBn: 'দর্শন/আধ্যাত্মিকতা/বেদান্ত শিক্ষার্থী, পারিবারিক আয় < -----/বছর, স্বামী বিবেকানন্দের শিক্ষার প্রতি আবেগপ্রবণ',
    amount: '------ per year',
    amountBn: '-------- প্রতি বছর',
    deadline: 'Rolling admissions',
    deadlineBn: 'সারা বছর আবেদন গ্রহণ',
    benefits: ['Study materials support', 'Research assistance', 'Spiritual mentorship', 'Publication support'],
    benefitsBn: ['অধ্যয়ন সামগ্রী সহায়তা', 'গবেষণা সহায়তা', 'আধ্যাত্মিক মেন্টরশিপ', 'প্রকাশনা সহায়তা']
  }
];
