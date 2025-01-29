const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static("public"));

// Route to serve the first form
app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form1.html");
});

// Route to handle form1 submission
app.post("/form", (req, res) => {
  const { customerId, name, phoneNo } = req.body;

  // Validation
  if (!customerId || !name || !phoneNo) {
    return res.status(400).send("All fields are required.");
  }

  if (isNaN(customerId) || isNaN(phoneNo)) {
    return res
      .status(400)
      .send("Customer ID and Phone Number must be numbers.");
  }

  // Log the data
  console.log("Form 1 Data:", { customerId, name, phoneNo });

  // Redirect to the second form
  res.sendFile(__dirname + "/public/form2.html");
});

// Route to handle form2 submission
app.post("/submit", (req, res) => {
  const formData = req.body;

  // Log the data
  console.log("Form 2 Data:", formData);

  // Send a success response
  res.send("Form submitted successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
