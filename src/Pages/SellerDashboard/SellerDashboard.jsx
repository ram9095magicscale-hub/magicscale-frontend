

// // File: /pages/SellerDashboard
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // mport Sidebar from "../../components/userDashboard/Sidebar";
// // import Topbar from "../../components/userDashboard/Topbar";
// import Sidebar from "../../components/SellerDashboard/Sidebar";
// import Topbar from "../../components/SellerDashboard/Topbar";

// const SellerDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("https://magicscale-backend.vercel.app/api/admin/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Topbar />
//         <div className="p-6 overflow-auto">
//           <h2 className="text-2xl font-bold text-red-500 mb-4">All Customers</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto bg-white shadow rounded-xl">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Profile Photo</th>
//                   <th className="p-3 text-left">Aadhar</th>
//                   <th className="p-3 text-left">PAN</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user._id} className="border-t">
//                     <td className="p-3">{user.name}</td>
//                     <td className="p-3">{user.email}</td>
//                     <td className="p-3">
//                       {user.profilePhoto && (
//                         <img
//                           src={`https://magicscale-backend.vercel.app${user.profilePhoto}`}
//                           alt="Profile"
//                           className="h-12 w-12 rounded-full"
//                         />
//                       )}
//                     </td>
//                     <td className="p-3">
//                       {user.aadharCard ? (
//                         <a
//                           href={`https://magicscale-backend.vercel.app${user.aadharCard}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>
//                     <td className="p-3">
//                       {user.panCard ? (
//                         <a
//                           href={`https://magicscale-backend.vercel.app${user.panCard}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;











// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../../components/SellerDashboard/Sidebar";
// import Topbar from "../../components/SellerDashboard/Topbar";

// const SellerDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("https://magicscale-backend.vercel.app/api/admin/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Topbar />
//         <div className="p-6 overflow-auto">
//           <h2 className="text-2xl font-bold text-red-500 mb-4">All Customers</h2>

//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow rounded-xl">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Phone</th>
//                   <th className="p-3 text-left">Role</th>
//                   <th className="p-3 text-left">Profile Photo</th>
//                   <th className="p-3 text-left">Aadhar Card</th>
//                   <th className="p-3 text-left">PAN Card</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user._id} className="border-t hover:bg-gray-50">
//                     <td className="p-3">{user.name}</td>
//                     <td className="p-3">{user.email}</td>
//                     <td className="p-3">{user.phone || "-"}</td>
//                     <td className="p-3 capitalize">{user.role}</td>

//                     <td className="p-3">
//                       {user.profilePhoto ? (
//                         <img
//                           src={`https://magicscale-backend.vercel.app${user.profilePhoto}`}
//                           alt="Profile"
//                           className="h-12 w-12 rounded-full object-cover"
//                         />
//                       ) : (
//                         "-"
//                       )}
//                     </td>

//                     <td className="p-3">
//                       {user.aadharCard ? (
//                         <a
//                           href={`https://magicscale-backend.vercel.app${user.aadharCard}`}
//                            download 
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>

//                     <td className="p-3">
//                       {user.panCard ? (
//                         <a
//                           href={`https://magicscale-backend.vercel.app${user.panCard}`}
//                           download
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {users.length === 0 && (
//               <p className="text-center text-gray-500 py-10">No users found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;





import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../services/api";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import ManageJobs from "../../components/SellerDashboard/ManageJobs";
import ManageBlogs from "../../components/SellerDashboard/ManageBlogs";
import ManageEnquiries from "../../components/SellerDashboard/ManageEnquiries";

const SellerDashboard = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const [transactions, setTransactions] = useState([]);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("customers");
  const [applications, setApplications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) setActiveTab(tab);
  }, [location]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`${API_URL}/admin/transactions`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTransactions(res.data);
      } catch (err) {
        console.error("Failed to fetch transactions", err);
      }
    };

    const fetchApplications = async () => {
      try {
        const res = await axios.get(`${API_URL}/careers/applications`);
        setApplications(res.data || []);
      } catch (err) {
        console.error("Failed to fetch applications", err);
      }
    };

    fetchUsers();
    fetchApplications();
    fetchTransactions();
  }, [token]);

  const getDownloadUrl = (filePath) => {
    // If it's a resume path, it might be different or use the same download helper
    if (filePath.startsWith('/uploads/resumes/')) {
      const cleanPath = filePath.replace('/uploads/resumes/', 'resumes/');
      return `${API_URL}/download?path=${cleanPath}`;
    }
    const cleanPath = filePath.replace('/uploads/', '');
    return `${API_URL}/download?path=${cleanPath}`;
  };

  return (
    <div className="flex h-screen pt-[72px] overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className={`fixed top-[72px] bottom-0 right-0 z-50 w-72 transition-transform transform bg-white dark:bg-slate-900 shadow-2xl ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-30 z-30" onClick={closeSidebar} />}
      
      <div className="flex-1 flex flex-col w-full overflow-auto">
        <Topbar toggleSidebar={toggleSidebar} title="Admin Dashboard" />
        <div className="p-4 md:p-6 overflow-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex bg-white dark:bg-slate-900 p-1 rounded-2xl border dark:border-slate-800 shadow-sm flex-wrap gap-2">
              <button 
                onClick={() => setActiveTab('customers')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'customers' 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                All Customers
              </button>
              <button 
                onClick={() => setActiveTab('transactions')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'transactions' 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                Transactions
              </button>
              <button 
                onClick={() => setActiveTab('enquiries')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'enquiries' 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                Contact Enquiries
              </button>
              <button 
                onClick={() => setActiveTab('applications')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'applications' 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                Applications
              </button>
              <button 
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'jobs' 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                Manage Jobs
              </button>
              <button 
                onClick={() => setActiveTab('blogs')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'blogs' 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                Manage Blogs
              </button>
            </div>
          </div>

          {activeTab === 'customers' && (
            <>
              <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4 transition-colors">All Customers</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-slate-900 shadow rounded-xl transition-colors">
                  <thead className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 transition-colors">
                    <tr>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Phone</th>
                      <th className="p-3 text-left">Role</th>
                      <th className="p-3 text-left">Profile Photo</th>
                      <th className="p-3 text-left">Aadhar Card</th>
                      <th className="p-3 text-left">PAN Card</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300 transition-colors">
                    {users.map((user) => (
                      <tr key={user._id} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-3">{user.name}</td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">{user.phone || '-'}</td>
                        <td className="p-3 capitalize">{user.role}</td>
                        <td className="p-3">
                          {user.profilePhoto ? (
                            <img
                              src={`${API_URL.replace('/api', '')}${user.profilePhoto}`}
                              alt="Profile"
                              className="h-12 w-12 rounded-full object-cover border dark:border-slate-700"
                            />
                          ) : (
                            '-'
                          )}
                        </td>
                        <td className="p-3 text-blue-500 hover:underline">
                          {user.aadharCard && (
                            <a href={getDownloadUrl(user.aadharCard)}>Download</a>
                          )}
                        </td>
                        <td className="p-3 text-blue-500 hover:underline">
                          {user.panCard && (
                            <a href={getDownloadUrl(user.panCard)}>Download</a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'transactions' && (
            <>
              <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4 transition-colors">All Transactions</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-slate-900 shadow rounded-xl transition-colors">
                  <thead className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 transition-colors">
                    <tr>
                      <th className="p-3 text-left">Customer</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Plan</th>
                      <th className="p-3 text-left">Amount</th>
                      <th className="p-3 text-left">Duration</th>
                      <th className="p-3 text-left">Order ID</th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300 transition-colors">
                    {transactions.map((txn) => (
                      <tr key={txn._id} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-3 font-bold">{txn.user?.name || 'Guest'}</td>
                        <td className="p-3">{txn.user?.email || '-'}</td>
                        <td className="p-3 font-medium capitalize">{txn.plan}</td>
                        <td className="p-3 font-bold text-green-600 dark:text-green-400">₹{txn.amount}</td>
                        <td className="p-3">{txn.duration} Mo</td>
                        <td className="p-3 text-xs opacity-70">#{txn.orderId?.substring(0, 10).toUpperCase() || "N/A"}</td>
                        <td className="p-3 text-sm">{new Date(txn.timestamp).toLocaleDateString()}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-md text-xs font-bold uppercase">
                            {txn.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {transactions.length === 0 && (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-10 transition-colors">No transactions found.</p>
                )}
              </div>
            </>
          )}

          {activeTab === 'enquiries' && <ManageEnquiries />}

          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white transition-colors tracking-tight">Recent Job Applications</h2>
                <div className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800">
                  {applications.length} Candidates
                </div>
              </div>
              <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden transition-all">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 border-b border-slate-50 dark:border-slate-800 transition-colors">
                      <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Candidate</th>
                      <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Applied For</th>
                      <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Experience</th>
                      <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Applied On</th>
                      <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest">Contact / CV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 dark:divide-slate-800 transition-colors">
                    {applications.length > 0 ? applications.map((app) => (
                      <tr key={app._id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all cursor-default">
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="font-black text-slate-800 dark:text-slate-100 tracking-tight">{app.fullName}</span>
                            <span className="text-xs text-slate-400 font-medium">{app.email}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg text-[10px] font-black uppercase tracking-wider">
                            {app.jobTitle}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-sm text-slate-500 dark:text-slate-400 font-bold tracking-tight">
                          {app.experience}
                        </td>
                        <td className="px-8 py-6 text-sm text-slate-400 font-medium font-mono">
                          {new Date(app.appliedAt).toLocaleDateString()}
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <a 
                              href={`tel:${app.phone}`}
                              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110 shadow-sm"
                              title={app.phone}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </a>
                            <a 
                              href={getDownloadUrl(app.resumePath)}
                              className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-all shadow-lg shadow-slate-200 dark:shadow-none active:scale-95"
                            >
                              View CV
                            </a>
                          </div>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="5" className="py-24 text-center">
                          <div className="flex flex-col items-center gap-3 opacity-40">
                             <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center text-slate-400 mb-2">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                             </div>
                            <p className="font-bold text-slate-400">No candidate applications yet.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'enquiries' && <ManageEnquiries />}

          {activeTab === "jobs" && <ManageJobs />}
          {activeTab === "blogs" && <ManageBlogs />}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
