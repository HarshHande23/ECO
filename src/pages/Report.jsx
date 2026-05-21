import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, AlertTriangle, Send } from 'lucide-react';

const Report = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    image: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would normally send the data to the backend
    console.log("Submitting report:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ title: '', location: '', description: '', image: null });
    }, 1000);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">Report an Environmental Issue</h1>
        <p className="text-slate-400">Help us track pollution, illegal dumping, or other environmental hazards in your area.</p>
      </div>

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center"
        >
          <div className="mx-auto w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-emerald-400 text-4xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Report Submitted Successfully!</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Thank you for taking action to protect our environment. Your report has been logged and will be reviewed by our team.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Submit Another Report
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Info Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass-card p-6">
              <div className="p-3 bg-emerald-500/20 rounded-xl inline-block mb-4">
                <AlertTriangle className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">What to Report?</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Illegal waste dumping</li>
                <li>• Severe air pollution/smoke</li>
                <li>• Contaminated water sources</li>
                <li>• Deforestation/Illegal logging</li>
                <li>• Wildlife endangerment</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 bg-emerald-900/10 border-emerald-500/20">
              <h3 className="text-emerald-400 font-semibold mb-2">Your Privacy</h3>
              <p className="text-sm text-slate-400">
                Your personal details will remain anonymous. Only the location and description will be publicly visible to raise awareness.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-slate-300 text-sm font-bold mb-2">Issue Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Illegal dumping near Riverside Park"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-bold mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-emerald-400" /> Location
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter address or coordinates"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-bold mb-2">Description</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Please describe the issue in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-bold mb-2 flex items-center">
                  <Camera className="h-4 w-4 mr-2 text-emerald-400" /> Upload Evidence
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-400">
                      {formData.image ? (
                        <p className="text-emerald-400 font-medium text-sm">{formData.image.name}</p>
                      ) : (
                        <>
                          <Camera className="h-8 w-8 mb-2 opacity-50" />
                          <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs">PNG, JPG, or WEBP (MAX. 5MB)</p>
                        </>
                      )}
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full flex justify-center items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <span>Submit Report</span>
                <Send className="h-5 w-5" />
              </button>

            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Report;
