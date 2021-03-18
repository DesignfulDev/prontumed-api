// Load core modules
const path = require('path');

// Load 3rd party modules
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Load custom modules
const connectDB = require('./config/db');

// Connect to database using connection function
connectDB();

// Load router files

// Create Express server
const app = express();

// Use body parser

// User middleware methods

// Mount routers

// Define PORT
const PORT = process.env.PORT || 5000;

// Fire up the server
const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// Handle promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server & end process
  server.close(() => process.exit(1));
});
