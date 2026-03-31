import React, { useState, useEffect } from "react";
import axios from "axios";
import { Download, Search, Filter, Calendar, User, Phone, Mail, Tag, Info } from "lucide-react";

const ManageEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSource, setFilterSource] = useState("all");
  const token = localStorage.getItem("token");

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://magicscale-backend.vercel.app/api/contact", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEnquiries(res.data);
    } catch (err) {
      console.error("Failed to fetch enquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const exportToCSV = () => {
    if (enquiries.length === 0) return;

    const headers = ["Date", "Name", "Phone", "Email", "Service", "Source", "Message", "Status"];
    const csvRows = enquiries.map(enq => [
      new Date(enq.createdAt).toLocaleString(),
      enq.name,
      enq.phone,
      enq.email || "-",
      enq.service,
      enq.source,
      enq.message || "-",
      enq.status
    ]);

    const csvContent = [headers, ...csvRows].map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `MagicScale_Enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEnquiries = enquiries.filter(enq => {
    const matchesSearch = 
      enq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.phone.includes(searchTerm) ||
      (enq.email && enq.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      enq.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSource = filterSource === "all" || enq.source === filterSource;

    return matchesSearch && matchesSource;
  });

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border dark:border-slate-800 transition-colors">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, phone, service..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all dark:text-white"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select 
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
            className="flex-1 md:w-48 px-4 py-2.5 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-gray-200"
          >
            <option value="all">All Sources</option>
            <option value="contact_form">Contact Form</option>
            <option value="enquiry_modal">Enquiry Modal</option>
          </select>

          <button 
            onClick={exportToCSV}
            disabled={filteredEnquiries.length === 0}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold rounded-xl shadow-lg shadow-green-200 dark:shadow-none transition-all active:scale-95"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl border dark:border-slate-800 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-slate-800/50 border-b dark:border-slate-800">
              <tr>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date & Time</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Contact</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Service</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Source</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-10 text-center text-gray-400">Loading enquiries...</td>
                </tr>
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-10 text-center text-gray-400">No enquiries found.</td>
                </tr>
              ) : (
                filteredEnquiries.map((enq) => (
                  <tr key={enq._id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{new Date(enq.createdAt).toLocaleDateString()}</span>
                        <span className="text-xs text-gray-400">{new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 text-sm font-bold">
                          {enq.name.charAt(0)}
                        </div>
                        <span className="text-sm font-bold dark:text-white">{enq.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Phone size={14} className="text-red-500" />
                          <span>{enq.phone}</span>
                        </div>
                        {enq.email && (
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-xs">
                            <Mail size={14} className="text-gray-400" />
                            <span>{enq.email}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-bold border border-indigo-100 dark:border-indigo-900/50">
                        {enq.service}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                        enq.source === 'enquiry_modal' 
                        ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/50' 
                        : 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50'
                      }`}>
                        {enq.source === 'enquiry_modal' ? 'Modal' : 'Form'}
                      </span>
                    </td>
                    <td className="p-4 max-w-xs">
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate group-hover:whitespace-normal line-clamp-2" title={enq.message}>
                        {enq.message || <span className="italic opacity-50">No message</span>}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEnquiries;
