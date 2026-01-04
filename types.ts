
export interface Event {
  id: string;
  title: string;
  titleBn?: string;
  date: string;
  time: string;
  location: string;
  locationBn?: string;
  description: string;
  descriptionBn?: string;
  category: 'Event' | 'Prayer';
  meetingLink?: string;
  imageUrl: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  titleBn?: string;
  category: 'Letters' | 'Collected Works' | 'Other Writings';
  description: string;
  descriptionBn?: string;
  content: string;
  contentBn?: string;
  author: string;
  authorBn?: string;
  date?: string;
  imageUrl?: string;
}

export interface Scholarship {
  id: string;
  name: string;
  nameBn?: string;
  description: string;
  descriptionBn?: string;
  eligibility: string;
  eligibilityBn?: string;
  amount?: string;
  amountBn?: string;
  deadline?: string;
  deadlineBn?: string;
  benefits?: string[];
  benefitsBn?: string[];
}

export interface Member {
  id: string;
  fullName: string;
  email: string;
  country: string;
  occupation: string;
  appliedAt: string;
}

export interface ScholarshipApplication {
  id: string;
  scholarshipType: string;
  applicantName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth?: string;
  gender?: string;
  
  // Family Information
  fatherName?: string;
  motherName?: string;
  guardianName?: string;
  guardianRelation?: string;
  
  // Address Information
  address?: string;
  city?: string;
  postalCode?: string;
  state?: string;
  country?: string;
  
  // Academic Information
  academicPercentage?: string;
  currentGrade?: string;
  school?: string;
  
  // Financial Information
  familyAnnualIncome?: string;
  monthlyExpenses?: string;
  
  // Bank Details
  bankAccountNumber?: string;
  bankName?: string;
  accountHolderName?: string;
  ifscCode?: string;
  
  // Additional Information
  essay?: string;
  achievements?: string;
  extracurricular?: string;
  reasonForApplication?: string;
  
  // Documents
  documentsSubmitted?: boolean;
  documentDescription?: string;
  
  appliedAt: string;
  status?: string;
}

export interface Donation {
  id: string;
  donorName: string;
  email: string;
  amount: string;
  transactionId: string;
  date: string;
  notes?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: string;
}
