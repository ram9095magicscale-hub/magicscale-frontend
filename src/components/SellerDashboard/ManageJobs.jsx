import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "Full-time",
    description: "",
    requirements: ""
  });
  const token = localStorage.getItem("token");

  const fetchJobs = async () => {
    try {
      const res = await axios.get("https://magicscale-backend.vercel.app/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://magicscale-backend.vercel.app/api/jobs", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFormData({ title: "", location: "", type: "Full-time", description: "", requirements: "" });
      fetchJobs();
    } catch (err) {
      console.error("Failed to create job", err);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await axios.delete(`https://magicscale-backend.vercel.app/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchJobs();
    } catch (err) {
      console.error("Failed to delete job", err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border dark:border-slate-800">
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Post a New Job</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" required className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white" />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location (e.g. Remote, Delhi)" required className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white" />
            <select name="type" value={formData.type} onChange={handleChange} className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white">
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description" required className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white" rows="3"></textarea>
            <textarea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Requirements" required className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white" rows="3"></textarea>
          </div>
          <button type="submit" className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-md transition-all">Publish Job</button>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Active Job Postings</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-slate-900 shadow rounded-xl">
            <thead className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Date Posted</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-300">
              {jobs.map((job) => (
                <tr key={job._id} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50">
                  <td className="p-3 font-semibold">{job.title}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">{job.type}</span></td>
                  <td className="p-3 text-sm">{new Date(job.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">
                    <button onClick={() => handleDelete(job._id)} className="text-red-500 hover:underline font-bold text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">No active job postings.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
