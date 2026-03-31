import React, { useState, useEffect } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import axios from "axios";
import BannerImg from "../../assets/Banner2.png";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [files, setFiles] = useState({});
  const [uploadError, setUploadError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const token = localStorage.getItem("token");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(res.data);
      setFormData({ name: res.data.name, phone: res.data.phone || "" });
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 1 * 1024 * 1024; // 1MB

    if (!allowedTypes.includes(file.type)) {
      setUploadError("Only JPG, PNG, or PDF files are allowed.");
      return;
    }

    if (file.size > maxSize) {
      setUploadError("File too large. Max allowed size is 1MB.");
      return;
    }

    setUploadError(null);
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadError(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    if (files.profilePhoto) data.append("profilePhoto", files.profilePhoto);
    if (files.aadharCard) data.append("aadharCard", files.aadharCard);
    if (files.panCard) data.append("panCard", files.panCard);

    try {
      await axios.put("http://localhost:3000/api/user/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      fetchProfile();
      alert("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error("Upload failed:", err.response?.data || err.message);
      const msg = err.response?.data?.message || "Error uploading files";
      setUploadError(msg);
    }
  };

  return (
    <div className="flex h-screen pt-[72px] overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className={`fixed top-[72px] bottom-0 right-0 z-50 w-72 transition-transform transform bg-white dark:bg-slate-900 shadow-2xl ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-30 z-30" onClick={closeSidebar} />}
      
      <div className="flex-1 flex flex-col w-full overflow-auto">
        <Topbar toggleSidebar={toggleSidebar} title="My Profile" />

        <div className="p-4 md:p-10 w-full flex justify-center">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 shadow-xl rounded-3xl p-6 md:p-10 border border-transparent dark:border-slate-800 transition-colors">
            
            {/* Header / Avatar */}
            <div className="flex flex-col items-center mb-8 border-b border-gray-100 dark:border-slate-800 pb-8 relative">
              <div className="relative">
                <img
                  src={
                    profile?.profilePhoto
                      ? `http://localhost:3000${profile.profilePhoto}`
                      : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                  }
                  alt="Profile"
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg dark:border-slate-800"
                />
                {editMode && (
                  <label className="absolute bottom-2 right-2 bg-red-500 p-2.5 rounded-full cursor-pointer text-white shadow-lg hover:bg-red-600 transition-colors transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    <input type="file" name="profilePhoto" className="hidden" onChange={handleFileChange} />
                  </label>
                )}
              </div>
              
              {!editMode ? (
                <>
                  <h2 className="mt-5 text-2xl md:text-3xl font-bold text-gray-800 dark:text-white capitalize tracking-tight">{profile?.name || "User Name"}</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium">{profile?.email || "No Email Provided"}</p>
                  <button
                    onClick={() => setEditMode(true)}
                    className="mt-6 px-8 py-2.5 bg-gray-900 dark:bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-red-500 transition-all shadow-md active:scale-95"
                  >
                    Edit Profile
                  </button>
                </>
              ) : (
                <div className="mt-5 w-full text-center">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">Editing Profile</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Update your personal details below.</p>
                </div>
              )}
            </div>

            {uploadError && (
              <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-lg mb-6 text-sm flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {uploadError}
              </div>
            )}

            {!editMode && profile && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-sm text-gray-400 dark:text-gray-500 font-medium mb-1">Phone Number</p>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold">{profile.phone || "Not Provided"}</p>
                  </div>
                  {/* Aadhar */}
                  <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-sm text-gray-400 dark:text-gray-500 font-medium mb-1">Aadhar Card</p>
                    {profile.aadharCard ? (
                      <a href={`http://localhost:3000${profile.aadharCard}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-red-400 dark:hover:text-red-300 font-semibold flex items-center gap-1 group">
                        View Document
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </a>
                    ) : (
                      <p className="text-gray-800 dark:text-gray-200 font-semibold">Not Uploaded</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {editMode && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-200 dark:border-slate-700 rounded-xl p-3 bg-gray-50 dark:bg-slate-800/50 text-gray-800 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-200 dark:border-slate-700 rounded-xl p-3 bg-gray-50 dark:bg-slate-800/50 text-gray-800 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 mb-1">Aadhar Card Verification</label>
                  <input
                    type="file"
                    name="aadharCard"
                    onChange={handleFileChange}
                    className="w-full text-sm text-gray-500 dark:text-gray-400
                      file:mr-4 file:py-3 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-red-50 file:text-red-600
                      dark:file:bg-slate-800 dark:file:text-red-400
                      hover:file:bg-red-100 dark:hover:file:bg-slate-700
                      cursor-pointer transition-colors"
                  />
                </div>

                <div className="pt-6 flex flex-wrap gap-4 border-t border-gray-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="flex-1 py-3 px-6 rounded-full font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-full font-semibold text-white bg-green-500 hover:bg-green-600 transition-all shadow-md shadow-green-500/20 active:scale-95"
                  >
                    Save Details
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
