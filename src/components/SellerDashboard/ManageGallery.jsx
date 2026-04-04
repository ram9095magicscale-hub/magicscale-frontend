import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../services/api";
import { Camera, Trash2, Edit2, Plus, Image as ImageIcon } from "lucide-react";

const ManageGallery = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    size: "small",
    order: 0,
    description: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${API_URL}/gallery`);
      setItems(res.data);
    } catch (err) {
      console.error("Failed to fetch gallery items", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    // Auto-detect dimensions and suggest size
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const ratio = width / height;

        let suggestedSize = "small";
        if (ratio > 1.5) suggestedSize = "wide";
        else if (ratio < 0.7) suggestedSize = "tall";
        else if (width > 1200 && height > 800) suggestedSize = "large";
        else if (width > 800) suggestedSize = "medium";

        setFormData(prev => ({ ...prev, size: suggestedSize }));
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      category: item.category,
      size: item.size || "small",
      order: item.order || 0,
      description: item.description || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ 
      title: "", 
      category: "", 
      size: "small", 
      order: 0,
      description: "" 
    });
    setImageFile(null);
    const fileInput = document.getElementById("galleryImageInput");
    if (fileInput) fileInput.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("size", formData.size);
    data.append("order", formData.order);
    data.append("description", formData.description);
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/gallery/${editingId}`, data, {
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data" 
          }
        });
      } else {
        await axios.post(`${API_URL}/gallery`, data, {
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data" 
          }
        });
      }
      resetForm();
      fetchGallery();
    } catch (err) {
      console.error("Failed to save gallery item", err);
      alert("Error saving gallery item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm('Are you sure you want to delete this photo?')) return;
    try {
      await axios.delete(`${API_URL}/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchGallery();
    } catch (err) {
      console.error('Failed to delete item', err);
    }
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Form Section */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6 font-black text-slate-800 dark:text-white text-xl">
          <div className="p-2 bg-indigo-500 rounded-xl text-white">
            <Camera size={20} />
          </div>
          {editingId ? "Edit Photo" : "Add New Gallery Photo"}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Photo Title</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                placeholder="e.g. Modern Cloud Kitchen" 
                required 
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Category</label>
              <input 
                type="text" 
                name="category" 
                value={formData.category} 
                onChange={handleChange} 
                placeholder="e.g. Infrastructure" 
                required 
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Display Size (Bento Grid)</label>
              <select 
                name="size" 
                value={formData.size} 
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold appearance-none"
              >
                <option value="small">Small (1x1)</option>
                <option value="medium">Medium (1x1 - Balanced)</option>
                <option value="wide">Wide (2x1 - Horizontal)</option>
                <option value="tall">Tall (1x2 - Vertical)</option>
                <option value="large">Large (2x2 - Spans 4 Slots)</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Success Story / Description</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Describe the success story, metrics, or transformation details..." 
                rows="4"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Upload Photo</label>
              <div className="relative group">
                <input 
                  id="galleryImageInput" 
                  type="file" 
                  name="image" 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  required={!editingId}
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-indigo-500 file:text-white hover:file:bg-indigo-600" 
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow-xl shadow-indigo-200 dark:shadow-none transition-all transform active:scale-95 disabled:opacity-50 flex items-center gap-2 uppercase tracking-widest text-xs"
            >
              {loading ? "Processing..." : editingId ? "Update Photo" : "Upload to Gallery"}
              {!loading && <Plus size={16} />}
            </button>
            {editingId && (
              <button 
                type="button" 
                onClick={resetForm}
                className="px-10 py-4 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-black rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all uppercase tracking-widest text-xs"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Active Gallery Photos</h3>
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest">
            {items.length} Photos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item._id} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={`${API_URL.replace('/api', '')}${item.image}`} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                   <span className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                     {item.size}
                   </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col mb-4">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">{item.category}</span>
                  <h4 className="font-black text-slate-800 dark:text-white tracking-tight">{item.title}</h4>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <button 
                    onClick={() => handleEdit(item)} 
                    className="flex-1 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <Edit2 size={14} /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(item._id)} 
                    className="flex-1 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 font-bold text-xs hover:bg-rose-100 dark:hover:bg-rose-900/40 flex items-center justify-center gap-2 transition-all"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="col-span-full py-20 flex flex-col items-center gap-4 opacity-40">
               <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-[2rem]">
                  <ImageIcon size={40} className="text-slate-400" />
               </div>
               <p className="font-black text-slate-500 uppercase tracking-widest text-sm">No photos in gallery yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;
