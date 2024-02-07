const mongoose = require('mongoose');

const connectDB=()=>{

// // Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/institution_management", {
    //  useNewUrlParser: true,
    //  useUnifiedTopology: true
  },)
  .then((c) => console.log(`Database Connected with ${c.connection.host}`))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
}

module.exports= connectDB;