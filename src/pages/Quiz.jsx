import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Quiz = () => {
  const questions = [
    {
      question: "Which gas is most responsible for global warming?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
      answer: 1
    },
    {
      question: "What percentage of the Earth's water is drinkable?",
      options: ["1%", "3%", "10%", "50%"],
      answer: 0
    },
    {
      question: "Which of these takes the longest to decompose?",
      options: ["Apple core", "Plastic bottle", "Aluminum can", "Glass bottle"],
      answer: 3
    },
    {
      question: "What is the most common type of debris found in our oceans?",
      options: ["Plastics", "Glass", "Metal", "Paper"],
      answer: 0
    },
    {
      question: "Which energy source is NOT renewable?",
      options: ["Solar", "Wind", "Natural Gas", "Geothermal"],
      answer: 2
    },
    {
      question: "What does 'carbon footprint' measure?",
      options: ["The size of your shoe", "Total greenhouse gases emitted by an individual or organization", "The amount of carbon in the soil", "The amount of trees you have planted"],
      answer: 1
    },
    {
      question: "Which sector contributes the most to global greenhouse gas emissions?",
      options: ["Transportation", "Agriculture", "Energy/Electricity", "Industry"],
      answer: 2
    },
    {
      question: "What is the main cause of ocean acidification?",
      options: ["Plastic pollution", "Oil spills", "Absorption of carbon dioxide", "Industrial waste"],
      answer: 2
    },
    {
      question: "Which of the following is considered a greenhouse gas?",
      options: ["Oxygen", "Helium", "Water vapor", "Argon"],
      answer: 2
    },
    {
      question: "How long does a typical plastic grocery bag take to decompose in a landfill?",
      options: ["1-2 years", "10-20 years", "100-200 years", "500+ years"],
      answer: 1
    },
    {
      question: "What does the term 'biodiversity' refer to?",
      options: ["The number of humans on Earth", "The variety of life in the world or a particular habitat", "A type of renewable energy", "The study of plant cells"],
      answer: 1
    },
    {
      question: "Which everyday household habit typically wastes the most water?",
      options: ["Running the dishwasher half empty", "Leaving the tap running while brushing teeth", "Washing clothes in hot water", "A running or leaking toilet"],
      answer: 3
    },
    {
      question: "What is 'E-waste'?",
      options: ["Energy waste from leaving lights on", "Emails sent to the trash folder", "Discarded electrical or electronic devices", "Excess food waste from restaurants"],
      answer: 2
    },
    {
      question: "The 'greenhouse effect' is...",
      options: ["A building where plants are grown", "When gases in Earth's atmosphere trap the Sun's heat", "The process of recycling glass", "When plants release oxygen during photosynthesis"],
      answer: 1
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (idx) => {
    setSelected(idx);
    setTimeout(() => {
      if (idx === questions[currentQ].answer) {
        setScore(score + 1);
      }
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="glass-card p-8 md:p-12 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
          <motion.div 
            className="h-full bg-emerald-500" 
            initial={{ width: 0 }}
            animate={{ width: `${((currentQ + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>

        {showResult ? (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Quiz Completed!</h2>
            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 my-8">
              {score} / {questions.length}
            </div>
            <p className="text-slate-300 mb-8">
              {score === questions.length ? "Perfect! You're an eco-warrior." : "Good try! Keep learning about the environment."}
            </p>
            <button onClick={restart} className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-bold transition-all">
              Try Again
            </button>
          </div>
        ) : (
          <div>
            <span className="text-emerald-400 font-medium text-sm mb-2 block">Question {currentQ + 1} of {questions.length}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{questions[currentQ].question}</h2>
            
            <div className="space-y-4">
              {questions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selected === null 
                      ? 'border-white/10 hover:bg-white/5 hover:border-emerald-500/50 text-slate-200' 
                      : selected === idx 
                        ? idx === questions[currentQ].answer 
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                          : 'bg-red-500/20 border-red-500 text-red-400'
                        : idx === questions[currentQ].answer
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                          : 'border-white/5 opacity-50 text-slate-500'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
