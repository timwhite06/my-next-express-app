// db.js
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;

// Function to create the user table
const createUserTable = async () => {
  const connection = await pool.promise();
  try {
    await connection.query(createUserTableQuery);
    console.log('User table created successfully');
  } catch (error) {
    console.error('Error creating user table:', error);
  } finally {
    connection.end();
  }
};
// 
// Call the createUserTable function
createUserTable();

module.exports = pool.promise();
