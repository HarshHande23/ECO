import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';

const Dashboard = () => {
  // Sample Data
  const co2Data = [
    { year: '1990', emission: 22 },
    { year: '1995', emission: 24 },
    { year: '2000', emission: 25 },
    { year: '2005', emission: 29 },
    { year: '2010', emission: 33 },
    { year: '2015', emission: 35 },
    { year: '2020', emission: 34 },
    { year: '2023', emission: 37 },
  ];

  const tempRiseData = [
    { year: '1880', temp: -0.16 },
    { year: '1920', temp: -0.27 },
    { year: '1960', temp: -0.02 },
    { year: '2000', temp: 0.39 },
    { year: '2020', temp: 1.02 },
    { year: '2023', temp: 1.18 },
  ];

  const plasticData = [
    { region: 'Asia', waste: 150 },
    { region: 'North America', waste: 80 },
    { region: 'Europe', waste: 65 },
    { region: 'South America', waste: 40 },
    { region: 'Africa', waste: 35 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Environmental Data Hub</h1>
        <p className="text-slate-400">Interactive visualizations of critical global climate metrics.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* CO2 Emissions Chart */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-semibold text-slate-200 mb-2">Global CO2 Emissions (Billion Tonnes)</h2>
          <p className="text-sm text-slate-400 mb-6">
            This area chart illustrates the steady increase of carbon dioxide emissions over the past few decades. The rising trend directly correlates with global industrialization and fossil fuel consumption.
          </p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={co2Data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEmission" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a1914', borderColor: '#10b981', borderRadius: '8px' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Area type="monotone" dataKey="emission" stroke="#10b981" fillOpacity={1} fill="url(#colorEmission)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Global Temperature Rise */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-semibold text-slate-200 mb-2">Global Temperature Rise (°C)</h2>
          <p className="text-sm text-slate-400 mb-6">
            This line graph tracks the deviation of the Earth's average surface temperature from pre-industrial baselines. The sharp upward curve since 1960 highlights the accelerating pace of global warming.
          </p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={tempRiseData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a1914', borderColor: '#ef4444', borderRadius: '8px' }}
                  itemStyle={{ color: '#ef4444' }}
                />
                <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Plastic Waste by Region */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 lg:col-span-2"
        >
          <h2 className="text-xl font-semibold text-slate-200 mb-2">Mismanaged Plastic Waste by Region (Million Tonnes)</h2>
          <p className="text-sm text-slate-400 mb-6">
            This bar chart compares the estimated amount of mismanaged plastic waste across different continents. "Mismanaged" refers to plastic that is littered or inadequately disposed of, meaning it has a high risk of entering oceans and waterways. Understanding this helps identify regions that need better waste management infrastructure.
          </p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={plasticData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                <XAxis dataKey="region" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: '#0a1914', borderColor: '#3b82f6', borderRadius: '8px' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Bar dataKey="waste" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;
