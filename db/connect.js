const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async (url) => {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Database connection established.");
  } catch (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
};

module.exports = connectDB;

// work for fucks sake