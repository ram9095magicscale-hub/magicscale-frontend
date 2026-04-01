import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../services/api";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: ""
  });
  const [coverImage, setCoverImage] = useState(null);
  const token = localStorage.getItem("token");

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_URL}/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("author", formData.author);
    data.append("category", formData.category);
    if (coverImage) {
      data.append("coverImage", coverImage);
    }

    try {
      await axios.post(`${API_URL}/blogs`, data, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data" 
        }
      });
      setFormData({ title: "", content: "", author: "", category: "" });
      setCoverImage(null);
      document.getElementById("coverImageInput").value = "";
      fetchBlogs();
    } catch (err) {
      console.error("Failed to post blog", err);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      await axios.delete(`${API_URL}/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBlogs();
    } catch (err) {
      console.error('Failed to delete blog', err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border dark:border-slate-800">
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Publish a New Blog</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Blog Title" required className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white" />
            <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author Name" required className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white" />
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category (e.g. Technology)" className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white" />
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">Cover Image</label>
              <input id="coverImageInput" type="file" name="coverImage" onChange={handleFileChange} accept="image/*" className="p-2 border dark:border-slate-700 rounded-lg dark:text-gray-300 bg-gray-50 dark:bg-slate-800" />
            </div>
            <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Blog Content (Markdown or Plaintext)" required className="p-3 rounded-lg border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500 w-full outline-none dark:text-white md:col-span-2" rows="6"></textarea>
          </div>
          <button type="submit" className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-md transition-all">Publish Blog</button>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Published Blogs</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-slate-900 shadow rounded-xl">
            <thead className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="p-3 text-left">Cover</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Author</th>
                <th className="p-3 text-left">Date Posted</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-300">
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50">
                  <td className="p-3">
                    {blog.coverImage ? (
                      <img src={`${API_URL.replace('/api', '')}${blog.coverImage}`} alt="Cover" className="h-12 w-16 object-cover rounded shadow-sm" />
                    ) : (
                      <div className="h-12 w-16 bg-gray-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">No Img</div>
                    )}
                  </td>
                  <td className="p-3 font-semibold">{blog.title}</td>
                  <td className="p-3">{blog.author}</td>
                  <td className="p-3 text-sm">{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">
                    <button onClick={() => handleDelete(blog._id)} className="text-red-500 hover:underline font-bold text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">No published blogs found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
