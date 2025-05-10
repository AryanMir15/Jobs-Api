require("dotenv").config();
require("express-async-errors");

const helmet = require("helmet");
const cors = require("cors");

const serverless = require("serverless-http");
const connectDB = require("../db/connect");
const app = require("../app");

let isConnected = false; // avoid reconnecting on every invocation

app.use(helmet());
app.use(cors());

module.exports = async (req, res) => {
  if (!isConnected) {
    try {
      await connectDB(process.env.MONGO_URI);
      isConnected = true;
      console.log("MongoDB connected");
    } catch (err) {
      console.error("MongoDB connection failed", err);
      return res.status(500).send("Database connection error");
    }
  }

  const handler = serverless(app);
  return handler(req, res);
};
