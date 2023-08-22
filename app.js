// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001; // You can choose any available port number

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDate();

  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>Yay it's the weekend!</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
