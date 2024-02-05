const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");


const routes = require('./routes/route.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// // Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/institution_management", {
    //  useNewUrlParser: true,
    //  useUnifiedTopology: true
  },)
  .then((c) => console.log(`Database Connected with ${c.connection.host}`))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

// // Middleware

app.use('/', routes);

// app.use(
//   cors({
//     credentials: true,
//   })
// );
// app.use('/api/server', require('./server'))
app.get("/", (req, res) => {
  res.send("Hello");
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
