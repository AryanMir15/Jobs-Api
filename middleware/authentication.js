require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors/index");

const auth = async function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid Authentication");
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, userName: payload.user.name };
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = auth;
