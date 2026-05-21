import React from 'react';
import { Leaf, Mail, Heart, MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a1914]/80 backdrop-blur-md pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <Leaf className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                EcoAware
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Empowering individuals with knowledge and tools to create a sustainable future for our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Info className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/problems" className="hover:text-emerald-400 transition-colors">Environmental Issues</Link></li>
              <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Data Dashboard</Link></li>
              <li><Link to="/calculator" className="hover:text-emerald-400 transition-colors">Carbon Calculator</Link></li>
              <li><Link to="/quiz" className="hover:text-emerald-400 transition-colors">Eco Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Articles & News</Link></li>
              <li><Link to="/facts" className="hover:text-emerald-400 transition-colors">Did You Know?</Link></li>
              <li><Link to="/report" className="hover:text-emerald-400 transition-colors">Report Pollution</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest eco-news.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-emerald-500 text-sm text-slate-200"
              />
              <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-r-lg text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 EcoAware. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-emerald-500 mx-1" /> for the Earth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
