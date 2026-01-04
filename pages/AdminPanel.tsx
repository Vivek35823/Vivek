import React, { useState, useEffect } from 'react';
import { dbService } from '../services/dbService';
import { supabase } from '../services/supabaseClient';
import { Member, ScholarshipApplication, Donation } from '../types';

type TabType = 'members' | 'donations' | 'applications';

interface AdminPanelState {
  isAuthenticated: boolean;
  email: string;
  password: string;
  errorMessage: string;
  isLoading: boolean;
}

const AdminPanel: React.FC = () => {
  const [authState, setAuthState] = useState<AdminPanelState>({
    isAuthenticated: false,
    email: '',
    password: '',
    errorMessage: '',
    isLoading: false
  });

  const [activeTab, setActiveTab] = useState<TabType>('members');
  const [members, setMembers] = useState<Member[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [applications, setApplications] = useState<ScholarshipApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<ScholarshipApplication | null>(null);

  useEffect(() => {
    if (authState.isAuthenticated) {
      loadData();
    }
  }, [authState.isAuthenticated]);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthState(prev => ({ ...prev, isLoading: true, errorMessage: '' }));
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: authState.email,
        password: authState.password
      });

      if (error) {
        setAuthState(prev => ({ 
          ...prev, 
          errorMessage: error.message || 'Login failed. Check your credentials.',
          isLoading: false 
        }));
        return;
      }

      if (data.user) {
        setAuthState({ 
          isAuthenticated: true, 
          email: '', 
          password: '', 
          errorMessage: '',
          isLoading: false 
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during login';
      setAuthState(prev => ({ ...prev, errorMessage: errorMessage, isLoading: false }));
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setAuthState({ 
        isAuthenticated: false, 
        email: '', 
        password: '', 
        errorMessage: '',
        isLoading: false 
      });
      setMembers([]);
      setDonations([]);
      setApplications([]);
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Loading admin data...');
      const [membersData, donationsData, applicationsData] = await Promise.all([
        dbService.getMembers(),
        dbService.getDonations(),
        dbService.getApplications()
      ]);
      console.log('Members data:', membersData);
      console.log('Donations data:', donationsData);
      console.log('Applications data:', applicationsData);
      
      // dbService already handles snake_case to camelCase conversion
      // Just use the data as-is
      const mappedMembers = (membersData || []).map((m: any) => ({
        id: m.id || '',
        fullName: m.full_name || m.fullName || '',
        email: m.email || '',
        country: m.country || '',
        occupation: m.occupation || '',
        appliedAt: m.applied_at || m.appliedAt || new Date().toISOString()
      }));
      
      const mappedDonations = (donationsData || []).map((d: any) => ({
        id: d.id || '',
        donorName: d.donor_name || d.donorName || '',
        email: d.email || '',
        amount: String(d.amount || 0),
        transactionId: d.transaction_id || d.transactionId || '',
        date: d.date || new Date().toISOString(),
        notes: d.message || d.notes || ''
      }));
      
      // Use applications data as-is since dbService already converts it
      const mappedApplications = applicationsData || [];
      
      console.log('Mapped members:', mappedMembers);
      console.log('Mapped donations:', mappedDonations);
      console.log('Mapped applications:', mappedApplications);
      
      setMembers(mappedMembers);
      setDonations(mappedDonations);
      setApplications(mappedApplications);
    } catch (err) {
      console.error('Error loading data:', err);
      setError(`Failed to load data: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = members.filter(m => {
    const name = (m.fullName || '').toLowerCase();
    const email = (m.email || '').toLowerCase();
    const search = searchTerm.toLowerCase();
    return name.includes(search) || email.includes(search);
  });

  const filteredDonations = donations.filter(d => {
    const name = (d.donorName || '').toLowerCase();
    const email = (d.email || '').toLowerCase();
    const search = searchTerm.toLowerCase();
    return name.includes(search) || email.includes(search);
  });

  const filteredApplications = applications.filter(a => {
    const name = (a.applicantName || '').toLowerCase();
    const email = (a.email || '').toLowerCase();
    const search = searchTerm.toLowerCase();
    return name.includes(search) || email.includes(search);
  });

  const totalDonations = donations.reduce((sum, d) => sum + parseFloat(d.amount || '0'), 0);

  // LOGIN SCREEN
  if (!authState.isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">V</div>
              <h1 className="text-3xl font-black text-slate-900 mb-2">VIVEK Admin</h1>
              <p className="text-slate-600">Secure Administration Panel</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Admin Email</label>
                <input
                  type="email"
                  value={authState.email}
                  onChange={(e) => setAuthState(prev => ({ ...prev, email: e.target.value, errorMessage: '' }))}
                  placeholder="Enter your admin email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  disabled={authState.isLoading}
                  autoFocus
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Password</label>
                <input
                  type="password"
                  value={authState.password}
                  onChange={(e) => setAuthState(prev => ({ ...prev, password: e.target.value, errorMessage: '' }))}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  disabled={authState.isLoading}
                  required
                />
              </div>
              {authState.errorMessage && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{authState.errorMessage}</div>}
              <button 
                type="submit" 
                disabled={authState.isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 text-white font-bold py-3 rounded-lg transition-colors"
              >
                {authState.isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Admin Panel</h1>
            <p className="text-slate-600">Manage members, donations, and scholarship applications</p>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg">Logout</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <p className="text-slate-600 text-sm font-semibold">Total Members</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{members?.length || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <p className="text-slate-600 text-sm font-semibold">Total Donations</p>
            <p className="text-3xl font-black text-slate-900 mt-1">${totalDonations.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
            <p className="text-slate-600 text-sm font-semibold">Applications</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{applications?.length || 0}</p>
          </div>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">{error}</div>}

        {loading && <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mb-6">Loading data...</div>}

        <div className="bg-white rounded-lg shadow mb-6 sticky top-0 z-10">
          <div className="flex border-b border-slate-200 flex-wrap">
            <button onClick={() => setActiveTab('members')} className={`flex-1 py-4 px-6 font-semibold text-center ${activeTab === 'members' ? 'border-b-2 border-orange-600 text-orange-600' : 'text-slate-600'}`}>Members ({members?.length || 0})</button>
            <button onClick={() => setActiveTab('donations')} className={`flex-1 py-4 px-6 font-semibold text-center ${activeTab === 'donations' ? 'border-b-2 border-orange-600 text-orange-600' : 'text-slate-600'}`}>Donations ({donations?.length || 0})</button>
            <button onClick={() => setActiveTab('applications')} className={`flex-1 py-4 px-6 font-semibold text-center ${activeTab === 'applications' ? 'border-b-2 border-orange-600 text-orange-600' : 'text-slate-600'}`}>Applications ({applications?.length || 0})</button>
          </div>
        </div>

        <div className="mb-6">
          <input type="text" placeholder={`Search ${activeTab}...`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
        </div>

        {loading ? <div className="text-center py-16"><p className="text-slate-600">Loading...</p></div> : (
          <>
            {activeTab === 'members' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {filteredMembers.length === 0 ? <div className="text-center py-12"><p className="text-slate-500">No members found</p></div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr><th className="text-left px-6 py-4">Name</th><th className="text-left px-6 py-4">Email</th><th className="text-left px-6 py-4">Country</th><th className="text-left px-6 py-4">Occupation</th><th className="text-left px-6 py-4">Joined</th></tr>
                      </thead>
                      <tbody>{filteredMembers.map((m, i) => (<tr key={m.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}><td className="px-6 py-4">{m.fullName}</td><td className="px-6 py-4">{m.email}</td><td className="px-6 py-4">{m.country}</td><td className="px-6 py-4">{m.occupation || '-'}</td><td className="px-6 py-4 text-sm">{new Date(m.appliedAt).toLocaleDateString()}</td></tr>))}</tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'donations' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {filteredDonations.length === 0 ? <div className="text-center py-12"><p className="text-slate-500">No donations found</p></div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr><th className="text-left px-6 py-4">Donor</th><th className="text-left px-6 py-4">Email</th><th className="text-left px-6 py-4">Amount</th><th className="text-left px-6 py-4">Transaction ID</th><th className="text-left px-6 py-4">Date</th></tr>
                      </thead>
                      <tbody>{filteredDonations.map((d, i) => (<tr key={d.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}><td className="px-6 py-4">{d.donorName}</td><td className="px-6 py-4">{d.email}</td><td className="px-6 py-4 text-green-600 font-semibold">${parseFloat(d.amount || '0').toFixed(2)}</td><td className="px-6 py-4 text-sm">{d.transactionId}</td><td className="px-6 py-4 text-sm">{new Date(d.date).toLocaleDateString()}</td></tr>))}</tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-4">
                {filteredApplications.length === 0 ? <div className="bg-white rounded-lg shadow text-center py-12"><p className="text-slate-500">No applications found</p></div> : (
                  filteredApplications.map((app) => (
                    <div
                      key={app.id}
                      onClick={() => setSelectedApplication(app)}
                      className="bg-white rounded-lg shadow p-6 hover:shadow-lg hover:cursor-pointer transition-all hover:border-orange-300 border-2 border-transparent"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-slate-500 font-semibold">APPLICANT</p>
                          <p className="text-lg font-bold text-orange-600 hover:underline">{app.applicantName}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-semibold">SCHOLARSHIP</p>
                          <p className="text-lg font-bold">{app.scholarshipType}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-semibold">STATUS</p>
                          <p className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : app.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{app.status || 'pending'}</p>
                        </div>
                      </div>
                      <div className="text-sm text-slate-600">
                        <p><strong>Email:</strong> {app.email}</p>
                        <p><strong>Academic:</strong> {app.academicPercentage || '-'}%</p>
                        <p><strong>Income:</strong> ${app.familyAnnualIncome || '-'}</p>
                      </div>
                      <p className="text-xs text-slate-400 mt-3">👉 Click to view full details</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}

        {/* APPLICATION DETAILS MODAL */}
        {selectedApplication && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-orange-700 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedApplication.applicantName}</h2>
                  <p className="text-orange-100 text-sm mt-1">{selectedApplication.scholarshipType} Scholarship Application</p>
                </div>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-white hover:bg-orange-800 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-8">
                {/* Quick Info Section */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Status</p>
                      <p className={`inline-block px-3 py-1 rounded-full text-sm font-bold mt-2 ${
                        selectedApplication.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : selectedApplication.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedApplication.status || 'pending'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Applied Date</p>
                      <p className="text-sm font-semibold text-slate-900 mt-2">
                        {new Date(selectedApplication.appliedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Academic %</p>
                      <p className="text-sm font-semibold text-slate-900 mt-2">{selectedApplication.academicPercentage || '-'}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Family Income</p>
                      <p className="text-sm font-semibold text-slate-900 mt-2">${selectedApplication.familyAnnualIncome || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Full Name</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.applicantName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Email</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Phone Number</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.phoneNumber || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Date of Birth</p>
                      <p className="text-slate-900 font-semibold mt-1">
                        {selectedApplication.dateOfBirth
                          ? new Date(selectedApplication.dateOfBirth).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })
                          : '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Gender</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.gender || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Family Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Family Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Father's Name</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.fatherName || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Mother's Name</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.motherName || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Guardian Name</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.guardianName || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Guardian Relation</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.guardianRelation || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <p className="text-xs text-slate-600 font-semibold uppercase">Address</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.address || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">City</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.city || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Postal Code</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.postalCode || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">State</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.state || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Country</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.country || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Academic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Academic Percentage</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.academicPercentage || '-'}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Current Grade/Class</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.currentGrade || '-'}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-xs text-slate-600 font-semibold uppercase">School/Institution</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.school || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Financial Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Financial Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Family Annual Income</p>
                      <p className="text-slate-900 font-semibold mt-1">${selectedApplication.familyAnnualIncome || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Monthly Expenses</p>
                      <p className="text-slate-900 font-semibold mt-1">${selectedApplication.monthlyExpenses || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Bank Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Bank Name</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.bankName || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Account Holder Name</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.accountHolderName || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Account Number</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.bankAccountNumber || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">IFSC Code</p>
                      <p className="text-slate-900 font-semibold mt-1">{selectedApplication.ifscCode || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Additional Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Essay / Motivation</p>
                      <p className="text-slate-900 mt-2 bg-slate-50 p-4 rounded-lg">{selectedApplication.essay || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Achievements</p>
                      <p className="text-slate-900 mt-2 bg-slate-50 p-4 rounded-lg">{selectedApplication.achievements || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Extracurricular Activities</p>
                      <p className="text-slate-900 mt-2 bg-slate-50 p-4 rounded-lg">{selectedApplication.extracurricular || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Reason for Application</p>
                      <p className="text-slate-900 mt-2 bg-slate-50 p-4 rounded-lg">{selectedApplication.reasonForApplication || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-600">Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 font-semibold uppercase">Documents Submitted</p>
                      <p className={`text-sm font-bold mt-2 px-3 py-2 rounded-lg inline-block ${
                        selectedApplication.documentsSubmitted
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedApplication.documentsSubmitted ? '✓ Yes' : '✗ No'}
                      </p>
                    </div>
                    {selectedApplication.documentDescription && (
                      <div className="md:col-span-2">
                        <p className="text-xs text-slate-600 font-semibold uppercase">Document Description</p>
                        <p className="text-slate-900 mt-2 bg-slate-50 p-4 rounded-lg">{selectedApplication.documentDescription}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-6 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="px-6 py-2 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <button onClick={loadData} disabled={loading} className="px-6 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 text-white font-semibold rounded-lg">Refresh Data</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
