const express = require('express');
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


// // backend/db.js

// const mysql = require('mysql2');
// // require('./create_tables');

// let connection;

// // Replace 'your_database_config' with your actual MySQL database 

// // try {
// //     connection = mysql.createConnection({
//         // host: 'viaduct.proxy.rlwy.net',
//         // user: 'root',
//         // password: 'cehBddcfEaG-3EhgBhD1cAa63D33eBFA',
//         // database: 'railway',
// //         port: 13665
// //     });

// //     const pool = mysql.createPool({
// //         host: process.env.DB_HOST,
// //         user: process.env.DB_USER,
// //         password: process.env.DB_PASSWORD,
// //         database: process.env.DB_NAME,
// //         waitForConnections: true,
// //         connectionLimit: 10,
// //         queueLimit: 0,
// //       });
      
// //     console.log(pool)

// // } catch (e) {
// //   console.error('Error creating database connection:', e);
// //   connection = null;
// // }

// module.exports = connection;
