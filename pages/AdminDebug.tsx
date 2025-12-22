import React from 'react';

const AdminDebug: React.FC = () => {
  const membersData = localStorage.getItem('vivek_members');
  const donationsData = localStorage.getItem('vivek_donations');
  const applicationsData = localStorage.getItem('vivek_scholarships');

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 mb-8">Debug: LocalStorage Data</h1>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Members</h2>
            <pre className="bg-slate-50 p-4 rounded overflow-auto text-sm">
              {membersData ? JSON.stringify(JSON.parse(membersData), null, 2) : 'No data found'}
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Donations</h2>
            <pre className="bg-slate-50 p-4 rounded overflow-auto text-sm">
              {donationsData ? JSON.stringify(JSON.parse(donationsData), null, 2) : 'No data found'}
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Scholarship Applications</h2>
            <pre className="bg-slate-50 p-4 rounded overflow-auto text-sm">
              {applicationsData ? JSON.stringify(JSON.parse(applicationsData), null, 2) : 'No data found'}
            </pre>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>Go to <a href="/membership" className="underline text-blue-600">Membership</a> and add a member</li>
              <li>Go to <a href="/donation" className="underline text-blue-600">Donation</a> and make a donation</li>
              <li>Go to <a href="/scholarship-apply" className="underline text-blue-600">Scholarship</a> and submit an application</li>
              <li>Come back here to see the data, or go to <a href="/admin-panel" className="underline text-blue-600">Admin Panel</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDebug;
