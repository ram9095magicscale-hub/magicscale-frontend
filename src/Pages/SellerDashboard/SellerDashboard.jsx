

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
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState("customers"); // customers, applications, enquiries, etc.

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

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

    const fetchApplications = async () => {
      try {
        const res = await axios.get(`${API_URL}/careers/applications`);
        setApplications(res.data);
      } catch (err) {
        console.error("Failed to fetch applications", err);
      }
    };

    fetchUsers();
    fetchApplications();
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
                Job Applications
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

          {activeTab === 'enquiries' && <ManageEnquiries />}

          {activeTab === 'applications' && (
            <>
              <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4 transition-colors">Recent Job Applications</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-slate-900 shadow rounded-xl transition-colors">
                  <thead className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 transition-colors">
                    <tr>
                      <th className="p-3 text-left">Candidate Name</th>
                      <th className="p-3 text-left">Applied For</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Phone</th>
                      <th className="p-3 text-left">Experience</th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Resume</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300 transition-colors">
                    {applications.map((app) => (
                      <tr key={app._id} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-3 font-bold">{app.fullName}</td>
                        <td className="p-3"><span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md text-xs">{app.jobTitle}</span></td>
                        <td className="p-3">{app.email}</td>
                        <td className="p-3">{app.phone}</td>
                        <td className="p-3">{app.experience}</td>
                        <td className="p-3 text-sm">{new Date(app.appliedAt).toLocaleDateString()}</td>
                        <td className="p-3">
                          <a 
                            href={`${API_URL}/download?path=${app.resumePath.replace('/uploads/', '')}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-bold hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors border dark:border-slate-700"
                          >
                            View CV
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {applications.length === 0 && (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-10 transition-colors">No applications found.</p>
                )}
              </div>
            </>
          )}

          {activeTab === "jobs" && <ManageJobs />}
          {activeTab === "blogs" && <ManageBlogs />}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
