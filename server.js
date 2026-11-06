const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Sample static users data
const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
];

// Route 1: GET / - Welcome message
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Express.js API!'
  });
});

// Route 2: GET /health - Health check status
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

// Route 3: GET /api/users - Return list of sample users
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

// Handle 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

// Basic centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export app for future modularity or testing
module.exports = app;
