const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const blogRoutes = require('./blogRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', blogRoutes);

// API Routes
app.get('/api/home', (req, res) => {
  res.json({ content: 'Welcome to the home page!' });
});

app.get('/api/about', (req, res) => {
  res.json({ content: 'Learn more about us on the about page.' });
});

app.get('/api/contact', (req, res) => {
  res.json({ content: 'Contact us for any inquiries or feedback.' });
});

app.get('/api/blogs', (req, res) => {
  res.json({ content: 'Contact us for any inquiries or feedback.' });
});

// Serve static assets (React build) if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

