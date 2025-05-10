require("dotenv").config();
require("express-async-errors");

// Import security packages
const helmet = require("helmet");
const cors = require("cors");

const serverless = require("serverless-http");
const connectDB = require('../db/connect');
const app = require("../app"); 

// Connect to the database
connectDB(process.env.MONGO_URI);

// Add any security middleware (optional)
app.use(helmet());
app.use(cors());

// Export the app as a serverless function for Vercel
module.exports.handler = serverless(app);
