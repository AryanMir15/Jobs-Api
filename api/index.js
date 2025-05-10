require("dotenv").config();

const serverless = require("serverless-http");
const connectDB = require("../db/connect");
const app = require("../app");

let isConnected = false;

const handler = async (event, context) => {
  if (!isConnected) {
    await connectDB(process.env.MONGO_URI);
    isConnected = true;
  }

  const serverlessHandler = serverless(app);
  return serverlessHandler(event, context);
};

module.exports.handler = handler;
