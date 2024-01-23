const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/institution_management", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

// Middleware
app.use(express.json());



// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
