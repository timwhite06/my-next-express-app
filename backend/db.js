const sqlite3 = require('sqlite3');

// Replace 'your_database_path' with the actual path to your SQLite database file
const dbPath = './db.sqlite3';

// Connect to the SQLite database
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error connecting to SQLite database:', err);
    } else {
      console.log('Connected to SQLite database');
    }
});

module.exports = db;
