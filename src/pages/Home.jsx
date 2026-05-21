import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Wind, Droplets, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { icon: <Wind className="h-8 w-8 text-emerald-400" />, value: "400+", label: "PPM CO2 Level", desc: "Highest in 2 million years" },
    { icon: <TreePine className="h-8 w-8 text-emerald-400" />, value: "10M+", label: "Hectares Lost", desc: "Forests destroyed annually" },
    { icon: <Droplets className="h-8 w-8 text-emerald-400" />, value: "8M+", label: "Tons of Plastic", desc: "Entering oceans every year" },
    { icon: <Globe className="h-8 w-8 text-emerald-400" />, value: "1.1°C", label: "Temp Rise", desc: "Since the pre-industrial era" }
  ];

  return (
    <div className="relative w-full">
      {/* Background ambient glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-teal-600/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300">Our Planet Needs You</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Protect Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Future Today
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                Join the movement to understand, track, and reduce our environmental footprint. 
                Explore data, calculate your impact, and discover real solutions for a sustainable tomorrow.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <button className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    <span>Explore Data</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
                <Link to="/calculator">
                  <button className="flex items-center space-x-2 glass-card hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all">
                    <span>Calculate Footprint</span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                {/* Abstract animated globe representation */}
                <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-teal-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-emerald-400/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-900/40 rounded-full backdrop-blur-[2px] flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                  <Globe className="h-32 w-32 md:h-48 md:w-48 text-emerald-400/50" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-[#0a1914]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-200">The Reality of Our Climate</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">The numbers speak for themselves. We are at a critical juncture in Earth's history, and immediate action is required.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:bg-white/10 transition-colors"
              >
                <div className="mb-4 p-3 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-emerald-400 font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-slate-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-slate-300 mb-10">
            Small changes in our daily lives can lead to massive global impacts. Start your journey towards a greener lifestyle today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/problems">
              <button className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all">
                Learn About Issues
              </button>
            </Link>
            <Link to="/quiz">
              <button className="w-full sm:w-auto border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-4 rounded-full font-bold transition-all">
                Take the Eco Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
