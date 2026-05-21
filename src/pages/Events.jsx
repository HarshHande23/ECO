import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rsvps, setRsvps] = useState(new Set());

  const handleRsvp = (eventId) => {
    setRsvps(prev => {
      const newRsvps = new Set(prev);
      if (newRsvps.has(eventId)) {
        newRsvps.delete(eventId);
      } else {
        newRsvps.add(eventId);
      }
      return newRsvps;
    });
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch events:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
          Local Environmental Events
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get involved in your community. Discover and join local cleanups, workshops, and green initiatives happening near you.
        </p>
      </motion.div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {events.map((event, index) => {
              const isRsvped = rsvps.has(event.id);
              return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-800/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-colors group flex flex-col h-full ${
                  isRsvped ? 'border-teal-500/50 shadow-lg shadow-teal-500/10' : 'border-gray-700 hover:border-teal-500/50'
                }`}
              >
                <div 
                  className="h-48 bg-gray-800 relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image || ''})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/20"></div>
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-gray-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium text-gray-200">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center gap-3 text-gray-400">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span className="text-sm">{event.attendees} Attending</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleRsvp(event.id)}
                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg ${
                      isRsvped 
                        ? 'bg-teal-500 text-white shadow-teal-500/20' 
                        : 'bg-gray-700 hover:bg-teal-500 text-white group-hover:shadow-teal-500/20'
                    }`}
                  >
                    {isRsvped ? 'RSVP Confirmed' : 'RSVP Now'}
                    {!isRsvped && <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                  </button>
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

export default Events;
