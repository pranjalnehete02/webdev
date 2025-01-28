const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory storage
let users = [];

// POST /new - Add new user
app.post("/new", (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
  };

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  users.push(newUser);
  res.status(201).json({ message: "User added successfully", user: newUser });
});

// POST /list - Get all users
app.post("/list", (req, res) => {
  res.status(200).json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
