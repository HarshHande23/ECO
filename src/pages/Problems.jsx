import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Droplets, TreePine, ThermometerSun, Trash2, BatteryWarning } from 'lucide-react';
import { Link } from 'react-router-dom';

const Problems = () => {
  const problems = [
    { id: 1, title: 'Air Pollution', icon: <Factory />, desc: 'Emissions from industries and vehicles causing severe health and environmental impacts.', color: 'from-gray-400 to-gray-600' },
    { id: 2, title: 'Water Pollution', icon: <Droplets />, desc: 'Contamination of water bodies affecting marine life and human water supply.', color: 'from-blue-400 to-blue-600' },
    { id: 3, title: 'Deforestation', icon: <TreePine />, desc: 'Massive clearing of Earth\'s forests, destroying habitats and accelerating climate change.', color: 'from-green-400 to-green-600' },
    { id: 4, title: 'Global Warming', icon: <ThermometerSun />, desc: 'The long-term heating of Earth\'s climate system observed since the pre-industrial period.', color: 'from-orange-400 to-red-500' },
    { id: 5, title: 'Plastic Waste', icon: <Trash2 />, desc: 'Accumulation of plastic products in the environment that adversely affects wildlife.', color: 'from-teal-400 to-teal-600' },
    { id: 6, title: 'E-Waste', icon: <BatteryWarning />, desc: 'Discarded electronic appliances causing toxic heavy metal leakage into soil.', color: 'from-purple-400 to-purple-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Critical Environmental Issues</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Understanding the problems is the first step towards finding solutions. Explore the major challenges our planet faces today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((prob, index) => (
          <motion.div
            key={prob.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${prob.color}`} />
            <div className="p-8">
              <div className={`p-4 inline-block rounded-2xl bg-white/5 mb-6 text-white`}>
                {React.cloneElement(prob.icon, { className: 'h-8 w-8' })}
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{prob.title}</h2>
              <p className="text-slate-400 mb-6 line-clamp-3">{prob.desc}</p>
              
              <Link to={`/problems/${prob.id}`}>
                <button className="text-emerald-400 font-medium hover:text-emerald-300 flex items-center transition-colors">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
