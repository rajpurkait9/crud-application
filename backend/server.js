const express = require('express');
const connectDB = require('./db/connect');
const router = require('./routes/user');
const app = express();
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.use('/user', router);

// server code
const port = process.env.PORT || 5000;
const start = async() => {
  try {
   await connectDB(process.env.MONGO_URL);
    console.log('connect to the database sucessfully...');
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
