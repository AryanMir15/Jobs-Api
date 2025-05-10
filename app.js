require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const limiter = require("express-rate-limit");

const express = require("express");
const app = express();

// const mongoose = require("mongoose");
const auth = require("./middleware/authentication");

// connectDB
// const connectDB = require("./db/connect");

// routers
const authRoute = require("./routes/auth");
const jobsRoute = require("./routes/jobs");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  limiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// extra packages

// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", auth, jobsRoute);
app.use("/", (req, res) => {
  res.send("JOBS-API")
})

// error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

module.exports = app;


// Day 1
// 06/04/2025 | 6:35:13 => 6:49:12;

// Day 2
// 20/04/2025 | 6:49:12 => 7:33:14;

// Day 3
// 21/04/2025 | 7:33:14 => 8:01:53;

// Day 4
// 24/04/2025 | 8:01:53 => 8:18:31;

// Day 5
// 26/04/2025 | 8:18:31 => 8:28:24;

// Day 6
// 26/04/2025 | 8:28:24 => 8:28:24;
