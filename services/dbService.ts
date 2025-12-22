
import { Member, ScholarshipApplication, Donation, ContactMessage } from '../types';
import { supabase } from './supabaseClient';

// Fallback to localStorage if Supabase is not configured
const USE_SUPABASE = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;

const STORAGE_KEYS = {
  MEMBERS: 'vivek_members',
  APPLICATIONS: 'vivek_scholarships',
  DONATIONS: 'vivek_donations',
  MESSAGES: 'vivek_messages'
};

const getLocal = <T,>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const saveLocal = <T,>(key: string, data: T[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Helper function to convert snake_case from database to camelCase for TypeScript
const convertSnakeToCamel = (obj: any): ScholarshipApplication => {
  return {
    id: obj.id?.toString() || '',
    scholarshipType: obj.scholarship_type || '',
    applicantName: obj.applicant_name || '',
    email: obj.email || '',
    phoneNumber: obj.phone_number || '',
    dateOfBirth: obj.date_of_birth || '',
    gender: obj.gender || '',
    fatherName: obj.father_name || '',
    motherName: obj.mother_name || '',
    guardianName: obj.guardian_name || '',
    guardianRelation: obj.guardian_relation || '',
    address: obj.address || '',
    city: obj.city || '',
    postalCode: obj.postal_code || '',
    state: obj.state || '',
    country: obj.country || '',
    academicPercentage: obj.academic_percentage ? obj.academic_percentage.toString() : '',
    currentGrade: obj.current_grade || '',
    school: obj.school || '',
    familyAnnualIncome: obj.family_annual_income ? obj.family_annual_income.toString() : '',
    monthlyExpenses: obj.monthly_expenses ? obj.monthly_expenses.toString() : '',
    bankAccountNumber: obj.bank_account_number || '',
    bankName: obj.bank_name || '',
    accountHolderName: obj.account_holder_name || '',
    ifscCode: obj.ifsc_code || '',
    essay: obj.essay || '',
    achievements: obj.achievements || '',
    extracurricular: obj.extracurricular || '',
    reasonForApplication: obj.reason_for_application || '',
    documentsSubmitted: obj.documents_submitted || false,
    documentDescription: obj.document_description || '',
    appliedAt: obj.applied_at || new Date().toISOString(),
    status: obj.status || 'pending'
  };
};

export const dbService = {
  // Members
  addMember: async (member: Omit<Member, 'id' | 'appliedAt'>) => {
    console.log('addMember called, USE_SUPABASE:', USE_SUPABASE);
    if (!USE_SUPABASE) {
      const members = getLocal<Member>(STORAGE_KEYS.MEMBERS);
      const newMember: Member = {
        ...member,
        id: Math.random().toString(36).substr(2, 9),
        appliedAt: new Date().toISOString()
      };
      saveLocal(STORAGE_KEYS.MEMBERS, [...members, newMember]);
      return newMember;
    }

    // Convert camelCase to snake_case for database
    const dbMember = {
      full_name: member.fullName,
      email: member.email,
      country: member.country,
      occupation: member.occupation
    };

    console.log('Inserting member data:', dbMember);

    const { data, error } = await supabase
      .from('members')
      .insert([dbMember]);

    if (error) {
      console.error('Supabase error adding member - Full error:', JSON.stringify(error, null, 2));
      console.error('Error details:', {
        message: error.message,
        code: error.code
      });
      throw new Error(`Failed to add member: ${error.message} (${error.code})`);
    }
    
    console.log('Member added successfully');
    // Since we removed .select(), we need to return a constructed object
    const newMember: Member = {
      id: 'temp-id',
      fullName: member.fullName,
      email: member.email,
      country: member.country,
      occupation: member.occupation,
      appliedAt: new Date().toISOString()
    };
    return newMember;
  },

  getMembers: async () => {
    if (!USE_SUPABASE) {
      return getLocal<Member>(STORAGE_KEYS.MEMBERS);
    }

    const { data, error } = await supabase
      .from('members')
      .select('*');

    if (error) throw error;
    return data || [];
  },

  // Scholarships
  addApplication: async (app: Omit<ScholarshipApplication, 'id' | 'appliedAt'>) => {
    if (!USE_SUPABASE) {
      const apps = getLocal<ScholarshipApplication>(STORAGE_KEYS.APPLICATIONS);
      const newApp: ScholarshipApplication = {
        ...app,
        id: Math.random().toString(36).substr(2, 9),
        appliedAt: new Date().toISOString()
      };
      saveLocal(STORAGE_KEYS.APPLICATIONS, [...apps, newApp]);
      return newApp;
    }

    // Convert camelCase to snake_case for database
    const dbApp = {
      scholarship_type: app.scholarshipType,
      applicant_name: app.applicantName,
      email: app.email,
      phone_number: app.phoneNumber,
      date_of_birth: app.dateOfBirth || null,
      gender: app.gender || null,
      father_name: app.fatherName || null,
      mother_name: app.motherName || null,
      guardian_name: app.guardianName || null,
      guardian_relation: app.guardianRelation || null,
      address: app.address || null,
      city: app.city || null,
      postal_code: app.postalCode || null,
      state: app.state || null,
      country: app.country || null,
      academic_percentage: app.academicPercentage ? parseFloat(app.academicPercentage) : null,
      current_grade: app.currentGrade || null,
      school: app.school || null,
      family_annual_income: app.familyAnnualIncome ? parseFloat(app.familyAnnualIncome) : null,
      monthly_expenses: app.monthlyExpenses ? parseFloat(app.monthlyExpenses) : null,
      bank_account_number: app.bankAccountNumber || null,
      bank_name: app.bankName || null,
      account_holder_name: app.accountHolderName || null,
      ifsc_code: app.ifscCode || null,
      essay: app.essay || null,
      achievements: app.achievements || null,
      extracurricular: app.extracurricular || null,
      reason_for_application: app.reasonForApplication || null,
      documents_submitted: app.documentsSubmitted || false,
      document_description: app.documentDescription || null,
      status: 'pending'
    };

    const { data, error } = await supabase
      .from('scholarship_applications')
      .insert([dbApp]);

    if (error) {
      console.error('Error inserting scholarship application:', error);
      throw error;
    }
    
    // Return constructed object since we removed .select()
    const newApp: ScholarshipApplication = {
      id: 'temp-id',
      ...app,
      appliedAt: new Date().toISOString(),
      status: 'pending'
    };
    return newApp;
  },

  getApplications: async () => {
    if (!USE_SUPABASE) {
      return getLocal<ScholarshipApplication>(STORAGE_KEYS.APPLICATIONS);
    }

    const { data, error } = await supabase
      .from('scholarship_applications')
      .select('*');

    if (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
    
    // Convert snake_case from database to camelCase
    const mappedData = (data || []).map(convertSnakeToCamel);
    console.log('Fetched and converted applications:', mappedData);
    return mappedData;
  },

  // Donations
  addDonation: async (donation: Omit<Donation, 'id' | 'date'>) => {
    if (!USE_SUPABASE) {
      const donations = getLocal<Donation>(STORAGE_KEYS.DONATIONS);
      const newDonation: Donation = {
        ...donation,
        id: Math.random().toString(36).substr(2, 9),
        date: new Date().toISOString()
      };
      saveLocal(STORAGE_KEYS.DONATIONS, [...donations, newDonation]);
      return newDonation;
    }

    // Convert camelCase to snake_case for database
    const dbDonation = {
      donor_name: donation.donorName,
      email: donation.email,
      amount: donation.amount,
      currency: 'USD',
      transaction_id: donation.transactionId,
      message: donation.notes || ''
    };

    const { data, error } = await supabase
      .from('donations')
      .insert([dbDonation]);

    if (error) {
      console.error('Supabase error adding donation - Full error:', JSON.stringify(error, null, 2));
      console.error('Error details:', {
        message: error.message,
        code: error.code
      });
      throw new Error(`Failed to add donation: ${error.message} (${error.code})`);
    }
    
    console.log('Donation added successfully');
    // Return constructed object since we removed .select()
    const newDonation: Donation = {
      id: 'temp-id',
      donorName: donation.donorName,
      email: donation.email,
      amount: donation.amount,
      transactionId: donation.transactionId,
      date: new Date().toISOString(),
      notes: donation.notes
    };
    return newDonation;
  },

  getDonations: async () => {
    if (!USE_SUPABASE) {
      return getLocal<Donation>(STORAGE_KEYS.DONATIONS);
    }

    const { data, error } = await supabase
      .from('donations')
      .select('*');

    if (error) throw error;
    return data || [];
  },

  // Contact
  addMessage: async (msg: Omit<ContactMessage, 'id' | 'sentAt'>) => {
    if (!USE_SUPABASE) {
      const messages = getLocal<ContactMessage>(STORAGE_KEYS.MESSAGES);
      const newMessage: ContactMessage = {
        ...msg,
        id: Math.random().toString(36).substr(2, 9),
        sentAt: new Date().toISOString()
      };
      saveLocal(STORAGE_KEYS.MESSAGES, [...messages, newMessage]);
      return newMessage;
    }

    // Convert camelCase to snake_case for database
    const dbMsg = {
      name: msg.name,
      email: msg.email,
      subject: msg.subject,
      message: msg.message
    };

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([dbMsg]);

    if (error) throw error;
    
    // Return constructed object since we removed .select()
    const newMsg: ContactMessage = {
      id: 'temp-id',
      name: msg.name,
      email: msg.email,
      subject: msg.subject,
      message: msg.message,
      sentAt: new Date().toISOString()
    };
    return newMsg;
  },

  getMessages: async () => {
    if (!USE_SUPABASE) {
      return getLocal<ContactMessage>(STORAGE_KEYS.MESSAGES);
    }

    const { data, error } = await supabase
      .from('contact_messages')
      .select('*');

    if (error) throw error;
    return data || [];
  }
};
