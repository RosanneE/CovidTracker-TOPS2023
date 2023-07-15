const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");

// Create a new Express application
const app = express();

// Define the port the server will run on.
const port = process.env.PORT || 3030;

// Use the `db` object to perform database operations
// const db = knex(knexConfig.development);
const db = require("./db")

// ========================
// Middleware
// ========================

// Add middleware to parse the POST data of the body
app.use(express.json());

// ========================
// Route handlers
// ========================

// Define a route handler for GET requests made to the root path ('/').
app.get("/", (req, res) => res.send("Hello World!"));

// GET route to retrieve all the users
app.get("/users", async (req, res) => {
  try {
    // Retrieve the users from the database
    const users = await db.select().from("users");
    res.json(users);
  } catch (err) {
    console.error("Error retrieving users!", err);
    res.status(500).json({ message: "Error retrieving users!" });
  }
});

// POST route to create a new user
app.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    // Create a new user from the data sent in the POST body
    const newUser = await db("users").insert(req.body).returning("*");
    // Send the newly created user back as JSON
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating new user!", err);
    res.status(500).json({ message: "Error creating new user!" });
  }
});

// Start the server, listening on the specified port.
app.listen(port, () => console.log(`Server running on port ${port}`));
