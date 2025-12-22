
import React, { useState, useEffect } from 'react';
import { dbService } from '../services/dbService';
import { Member, Donation, ScholarshipApplication } from '../types';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'members' | 'donations' | 'scholarships'>('members');
  
  const [members, setMembers] = useState<Member[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [apps, setApps] = useState<ScholarshipApplication[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'vivek123') { // Simple mock auth
      setIsLoggedIn(true);
    } else {
      alert('Invalid password');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        setMembers(await dbService.getMembers());
        setDonations(await dbService.getDonations());
        setApps(await dbService.getApplications());
      };
      fetchData();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-slate-200">
           <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-8">
              <i className="fa-solid fa-lock"></i>
           </div>
           <h2 className="text-2xl font-bold text-center mb-8">Admin Access</h2>
           <form onSubmit={handleLogin} className="space-y-4">
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password (hint: vivek123)" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
              <button type="submit" className="w-full py-3 bg-blue-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Login to Dashboard
              </button>
           </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h1 className="text-3xl font-black text-slate-900">Admin Dashboard</h1>
          <div className="flex bg-white rounded-xl p-1 border border-slate-200">
            <button 
              onClick={() => setActiveTab('members')}
              className={`px-4 py-2 rounded-lg font-bold text-sm ${activeTab === 'members' ? 'bg-blue-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Members
            </button>
            <button 
              onClick={() => setActiveTab('donations')}
              className={`px-4 py-2 rounded-lg font-bold text-sm ${activeTab === 'donations' ? 'bg-blue-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Donations
            </button>
            <button 
              onClick={() => setActiveTab('scholarships')}
              className={`px-4 py-2 rounded-lg font-bold text-sm ${activeTab === 'scholarships' ? 'bg-blue-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Scholarships
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            {activeTab === 'members' && (
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Email</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Country</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {members.length === 0 ? (
                    <tr><td colSpan={4} className="px-6 py-10 text-center text-slate-400">No members found</td></tr>
                  ) : (
                    members.map(m => (
                      <tr key={m.id}>
                        <td className="px-6 py-4 font-bold text-slate-800">{m.fullName}</td>
                        <td className="px-6 py-4 text-slate-600">{m.email}</td>
                        <td className="px-6 py-4 text-slate-600">{m.country}</td>
                        <td className="px-6 py-4 text-slate-400 text-sm">{new Date(m.appliedAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {activeTab === 'donations' && (
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Donor</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">TXN ID</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {donations.length === 0 ? (
                    <tr><td colSpan={4} className="px-6 py-10 text-center text-slate-400">No donations found</td></tr>
                  ) : (
                    donations.map(d => (
                      <tr key={d.id}>
                        <td className="px-6 py-4 font-bold text-slate-800">{d.donorName}</td>
                        <td className="px-6 py-4 text-green-600 font-bold">{d.amount}</td>
                        <td className="px-6 py-4 text-slate-500 font-mono text-xs">{d.transactionId}</td>
                        <td className="px-6 py-4 text-slate-400 text-sm">{new Date(d.date).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {activeTab === 'scholarships' && (
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Applicant</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Type</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Reason</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {apps.length === 0 ? (
                    <tr><td colSpan={4} className="px-6 py-10 text-center text-slate-400">No applications found</td></tr>
                  ) : (
                    apps.map(a => (
                      <tr key={a.id}>
                        <td className="px-6 py-4 font-bold text-slate-800">{a.applicantName}</td>
                        <td className="px-6 py-4"><span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded">{a.scholarshipType}</span></td>
                        <td className="px-6 py-4 text-slate-600 text-sm max-w-xs truncate">{a.reason}</td>
                        <td className="px-6 py-4 text-slate-400 text-sm">{new Date(a.appliedAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
