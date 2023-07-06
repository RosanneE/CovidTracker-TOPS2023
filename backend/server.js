// Import the express module
const express = require("express");

// Create a new Express application
const app = express();

// Define the port the server will run on.
const port = process.env.PORT || 3030;

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

// Start the server, listening on the specified port.
app.listen(port, () => console.log(`Server running on port ${port}`));
