const express = require('express');
const { errorMiddleware, ErrorHandler } = require('./middlewares/error.js');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const routes = require('./routes/route.js');
const connectDB = require('./data/Database.js');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.options('*', cors());

// Connect to MongoDB
connectDB();

// Your routes
app.use('/', routes);

// Error middleware 
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello");
});

// app.get('/logout', (req, res) => {
//   res.clearCookie('authToken'); // Replace 'authToken' with your cookie name
//   res.status(200).json({ message: 'Logout successful' });
// });


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
