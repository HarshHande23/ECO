import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Leaf, Trophy, ArrowRight } from 'lucide-react';
import { challengesData } from '../data';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [completed, setCompleted] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading state for UX
    setTimeout(() => {
      setChallenges(challengesData);
      setLoading(false);
    }, 500);
  }, []);

  const toggleChallenge = (id) => {
    setCompleted(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const totalPoints = Array.from(completed).reduce((sum, id) => {
    const challenge = challenges.find(c => c.id === id);
    return sum + (challenge ? challenge.points : 0);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 mb-4">
          Daily Eco Challenges
        </h1>
        <p className="text-gray-400 text-lg">
          Complete daily tasks to reduce your footprint and earn eco-points!
        </p>
      </motion.div>

      <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 mb-8 flex items-center justify-between shadow-lg shadow-emerald-900/20">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500/20 rounded-xl">
            <Trophy className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Your Score</h2>
            <p className="text-emerald-400 font-medium">Top 10% of Eco-Warriors</p>
          </div>
        </div>
        <div className="text-right">
          <motion.span 
            key={totalPoints}
            initial={{ scale: 1.5, color: '#34d399' }}
            animate={{ scale: 1, color: '#fff' }}
            className="text-4xl font-bold text-white"
          >
            {totalPoints}
          </motion.span>
          <span className="text-gray-400 ml-2">pts</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      ) : (
        <div className="grid gap-4">
          <AnimatePresence>
            {challenges.map((challenge, index) => {
              const isCompleted = completed.has(challenge.id);
              return (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-emerald-900/20 border-emerald-500/50 shadow-lg shadow-emerald-900/20' 
                      : 'bg-gray-800 border-gray-700 hover:border-gray-500'
                  }`}
                >
                  <div className="p-6 flex items-start gap-4">
                    <button
                      onClick={() => toggleChallenge(challenge.id)}
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isCompleted
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'border-gray-500 hover:border-emerald-500'
                      }`}
                    >
                      {isCompleted && <CheckCircle className="w-5 h-5 text-white" />}
                    </button>
                    
                    <div className="flex-grow">
                      <h3 className={`text-xl font-bold mb-1 transition-colors ${isCompleted ? 'text-emerald-400' : 'text-white'}`}>
                        {challenge.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {challenge.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-1 bg-gray-900 px-3 py-1 rounded-full border border-gray-700">
                      <Leaf className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">+{challenge.points}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Challenges;
