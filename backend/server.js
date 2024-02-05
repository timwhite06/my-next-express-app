const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
  // Connect to the MySQL database

app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM User', (err, rows) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(rows);
        }
      });
});

app.get('/api/data/usernames', (req, res) => {
    db.all('SELECT username FROM users', (err, rows) => {
      if (err) {
        console.error('Error executing SELECT query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const usernames = rows.map(row => row.username);
        res.json({ usernames });
      }
    });
});

// Mock route for testing or development
app.get('/api/mockData', (req, res) => {
  const mockData = [
    { id: 1, name: 'Mocked Item 1' },
    { id: 2, name: 'Mocked Item 2' },
    // Add more mocked data as needed
  ];

  res.status(200).json({ data: mockData });
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
