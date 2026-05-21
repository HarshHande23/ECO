const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data for Challenges
const challenges = [
  { id: 1, title: 'Meatless Monday', description: 'Avoid eating meat for the entire day to reduce your carbon footprint.', points: 50 },
  { id: 2, title: 'Zero Waste Day', description: 'Try not to produce any non-recyclable waste today.', points: 100 },
  { id: 3, title: 'Unplug Devices', description: 'Unplug all electronics when not in use to save phantom energy.', points: 30 },
  { id: 4, title: 'Public Transport', description: 'Take public transport, walk, or bike instead of driving.', points: 80 }
];

// Mock Data for Events
const events = [
  { id: 1, title: 'Community Beach Cleanup', date: '2026-06-05', location: 'Sunny Shore Beach', attendees: 45, image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80fca4a?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'City Park Tree Planting', date: '2026-06-12', location: 'Central Park', attendees: 120, image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Recycling Workshop', date: '2026-06-20', location: 'Downtown Community Center', attendees: 30, image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Farmers Market - Organic Special', date: '2026-06-25', location: 'Town Square', attendees: 200, image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=800&auto=format&fit=crop' }
];

// Routes
app.get('/api/challenges', (req, res) => {
  res.json(challenges);
});

app.get('/api/events', (req, res) => {
  res.json(events);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
