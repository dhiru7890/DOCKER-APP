const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

function connectWithRetry() {
  db.connect(err => {
    if (err) {
      console.log("DB not ready, retrying...");
      setTimeout(connectWithRetry, 2000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}

connectWithRetry();

app.get('/', (req, res) => {
  res.json({ message: "Backend working" });
});

app.get('/health', (req, res) => {
  db.ping(err => {
    if (err) return res.status(500).json({ status: "DB down" });
    res.json({ status: "OK" });
  });
});

app.listen(3000, () => console.log("Server running"));
