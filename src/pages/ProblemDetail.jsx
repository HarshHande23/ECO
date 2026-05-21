import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Factory, Droplets, TreePine, ThermometerSun, Trash2, BatteryWarning } from 'lucide-react';

const problemsData = {
  "1": {
    title: 'Air Pollution',
    icon: <Factory className="h-16 w-16" />,
    color: 'from-gray-400 to-gray-600',
    causes: ['Industrial emissions', 'Vehicle exhaust', 'Burning of fossil fuels', 'Agricultural activities'],
    effects: ['Respiratory diseases', 'Global warming', 'Acid rain', 'Ozone depletion'],
    prevention: ['Use public transport', 'Switch to renewable energy', 'Plant trees', 'Support clean air laws'],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9cce?q=80&w=2070&auto=format&fit=crop'
  },
  "2": {
    title: 'Water Pollution',
    icon: <Droplets className="h-16 w-16" />,
    color: 'from-blue-400 to-blue-600',
    causes: ['Industrial waste disposal', 'Sewage and wastewater', 'Marine dumping', 'Oil spills'],
    effects: ['Destruction of biodiversity', 'Contamination of food chain', 'Lack of potable water', 'Diseases'],
    prevention: ['Proper waste disposal', 'Minimize use of pesticides', 'Treat sewage water', 'Beach cleanups'],
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073e0f?q=80&w=1974&auto=format&fit=crop'
  },
  "3": {
    title: 'Deforestation',
    icon: <TreePine className="h-16 w-16" />,
    color: 'from-green-400 to-green-600',
    causes: ['Agricultural expansion', 'Logging', 'Urbanization', 'Mining'],
    effects: ['Loss of habitat', 'Increased greenhouse gases', 'Soil erosion', 'Disruption of water cycle'],
    prevention: ['Plant trees', 'Use recycled paper', 'Support sustainable forestry', 'Reduce meat consumption'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1972&auto=format&fit=crop'
  },
  "4": {
    title: 'Global Warming',
    icon: <ThermometerSun className="h-16 w-16" />,
    color: 'from-orange-400 to-red-500',
    causes: ['Greenhouse gas emissions', 'Deforestation', 'Industrialization', 'Consumerism'],
    effects: ['Rising sea levels', 'Extreme weather events', 'Melting ice caps', 'Loss of species'],
    prevention: ['Reduce carbon footprint', 'Energy efficiency', 'Renewable energy', 'Sustainable transport'],
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a56?q=80&w=2070&auto=format&fit=crop'
  },
  "5": {
    title: 'Plastic Waste',
    icon: <Trash2 className="h-16 w-16" />,
    color: 'from-teal-400 to-teal-600',
    causes: ['Single-use plastics', 'Improper disposal', 'Overpackaging', 'Microplastics'],
    effects: ['Marine life death', 'Toxins in food chain', 'Landfill overflow', 'Polluted landscapes'],
    prevention: ['Use reusable bags', 'Recycle', 'Avoid single-use plastics', 'Participate in cleanups'],
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80fbea5?q=80&w=2070&auto=format&fit=crop'
  },
  "6": {
    title: 'E-Waste',
    icon: <BatteryWarning className="h-16 w-16" />,
    color: 'from-purple-400 to-purple-600',
    causes: ['Rapid technological advancement', 'Planned obsolescence', 'Lack of recycling facilities'],
    effects: ['Toxic heavy metal leakage', 'Soil contamination', 'Water pollution', 'Health hazards for workers'],
    prevention: ['Repair instead of replace', 'Donate old electronics', 'Use certified e-waste recyclers'],
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop'
  }
};

const ProblemDetail = () => {
  const { id } = useParams();
  const problem = problemsData[id];

  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2>Problem not found.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/problems" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Problems
      </Link>

      <div className="glass-card overflow-hidden">
        {/* Header Image */}
        <div className="w-full h-64 md:h-96 relative">
          <img src={problem.image} alt={problem.title} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1914] to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 w-full flex items-end">
            <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white mr-6 shadow-lg border border-white/20`}>
              {problem.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{problem.title}</h1>
              <div className={`h-1 w-32 bg-gradient-to-r ${problem.color} rounded-full`}></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Main Causes</h3>
              <ul className="space-y-4">
                {problem.causes.map((cause, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                    <span className="text-slate-300">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Major Effects</h3>
              <ul className="space-y-4">
                {problem.effects.map((effect, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                    <span className="text-slate-300">{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">How to Prevent It</h3>
              <ul className="space-y-4">
                {problem.prevention.map((prev, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-slate-300">{prev}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
