

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
import ManageGallery from "../../components/SellerDashboard/ManageGallery";
import ManageEnquiries from "../../components/SellerDashboard/ManageEnquiries";
import PaymentGatewaysPortal from "../../components/SellerDashboard/PaymentGatewaysPortal";

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

  // Pagination for transactions
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
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
        const res = await axios.get(`${API_URL}/careers/applications`, {
          headers: { Authorization: `Bearer ${token}` },
        });
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
    if (!filePath) return "#"; // Safety check for missing files

    // If it's a resume path, it might be different or use the same download helper
    if (filePath.startsWith('/uploads/resumes/')) {
      const cleanPath = filePath.replace('/uploads/resumes/', 'resumes/');
      return `${API_URL}/download?path=${cleanPath}`;
    }
    const cleanPath = filePath.replace('/uploads/', '');
    return `${API_URL}/download?path=${cleanPath}`;
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#0B1120] font-sans overflow-hidden selection:bg-indigo-500/30">
      
      {/* Permanent Left Sidebar (Desktop) */}
      <aside className="hidden lg:flex flex-col w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full relative z-20 shadow-2xl shadow-slate-200/50 dark:shadow-none">
        <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
           <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
             <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center">
               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             MagicAdmin
           </h2>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-4 mb-3">Main Navigation</div>
          {[
            { id: 'customers', label: 'All Customers', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
            { id: 'transactions', label: 'Transactions', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { id: 'paylinks', label: 'Payment Links', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all ${activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <svg className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon}></path></svg>
              {tab.label}
            </button>
          ))}
          
          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-4 mt-8 mb-3">Management</div>
          {[
            { id: 'enquiries', label: 'Enquiries', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { id: 'applications', label: 'Applications', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'jobs', label: 'Manage Jobs', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { id: 'blogs', label: 'Manage Blogs', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
            { id: 'gallery', label: 'Manage Gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all ${activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <svg className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon}></path></svg>
              {tab.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-[#0B1120] relative">
        <Topbar toggleSidebar={toggleSidebar} title="" />
        
        {/* Mobile Sidebar Overlay */}
        <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'visible' : 'invisible'}`}>
          <div className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeSidebar} />
          <div className={`absolute inset-y-0 right-0 w-72 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             <Sidebar closeSidebar={closeSidebar} />
          </div>
        </div>

        <div className="flex-1 overflow-x-hidden overflow-y-auto scroll-smooth p-6 lg:p-10">
          <div className="max-w-7xl mx-auto space-y-8">

            {activeTab === 'customers' && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">All Customers</h2>
                  <div className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800">
                    {users.length} Users
                  </div>
                </div>
                <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700">
                      <tr>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Name</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Email</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Phone</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Role</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Profile</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Aadhar</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">PAN</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300 transition-colors">
                      {users.map((user) => (
                        <tr key={user._id} className="border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{user.name}</td>
                          <td className="px-6 py-4 text-sm text-slate-500">{user.email}</td>
                          <td className="px-6 py-4 text-sm font-medium">{user.phone || '-'}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-[10px] font-black uppercase">{user.role}</span>
                          </td>
                          <td className="px-6 py-4">
                            {user.profilePhoto ? (
                              <img src={`${API_URL.replace('/api', '')}${user.profilePhoto}`} alt="Profile" className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
                            ) : '-'}
                          </td>
                          <td className="px-6 py-4">
                            {user.aadharCard && (
                              <a href={getDownloadUrl(user.aadharCard)} className="text-[10px] font-black uppercase text-indigo-600 hover:text-indigo-800 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg transition-colors">Download</a>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {user.panCard && (
                              <a href={getDownloadUrl(user.panCard)} className="text-[10px] font-black uppercase text-indigo-600 hover:text-indigo-800 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg transition-colors">Download</a>
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
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">All Transactions</h2>
                  <div className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800">
                    {transactions.length} Records
                  </div>
                </div>
                <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700">
                      <tr>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Customer</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Email</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Gateway</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Plan</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Amount</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Order ID</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Date</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300 transition-colors">
                      {currentTransactions.map((txn) => (
                        <tr key={txn._id} className="border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{txn.name || txn.user?.name || 'Guest'}</td>
                          <td className="px-6 py-4 text-sm text-slate-500">{txn.email || txn.user?.email || '-'}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${txn.gateway === 'razorpay' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                              {txn.gateway || 'Cashfree'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium capitalize">{txn.plan}</td>
                          <td className="px-6 py-4 font-black text-emerald-600 dark:text-emerald-400">₹{txn.amount}</td>
                          <td className="px-6 py-4 font-mono text-xs text-slate-400">#{txn.orderId?.substring(0, 10).toUpperCase() || "N/A"}</td>
                          <td className="px-6 py-4 text-sm font-medium">{new Date(txn.timestamp).toLocaleDateString()}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-[10px] font-black uppercase">
                              {txn.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {transactions.length === 0 && (
                    <div className="py-24 text-center">
                      <div className="flex flex-col items-center gap-3 opacity-40">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center text-slate-400 mb-2">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p className="font-bold text-slate-400">No transactions found.</p>
                      </div>
                    </div>
                  )}
                  {totalPages > 1 && (
                    <div className="flex justify-between items-center p-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-sm text-slate-500">
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, transactions.length)} of {transactions.length} Entries
                      </span>
                      <div className="flex gap-2">
                        <button
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(prev => prev - 1)}
                          className="px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 disabled:opacity-50 hover:bg-slate-200"
                        >
                          Prev
                        </button>
                        <button
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(prev => prev + 1)}
                          className="px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 disabled:opacity-50 hover:bg-slate-200"
                        >
                          Next
                        </button>
                      </div>
                    </div>
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


            {activeTab === "paylinks" && <PaymentGatewaysPortal />}
            {activeTab === "jobs" && <ManageJobs />}
            {activeTab === "blogs" && <ManageBlogs />}
            {activeTab === "gallery" && <ManageGallery />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
