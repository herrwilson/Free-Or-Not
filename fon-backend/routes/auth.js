const authRouter = require("express").Router();
const User = require("../models/user");

/**
 * Username and password authentiaction
 * returns status code 200 on success
 */
authRouter.post("/login", (req, res) => {
  // Check that username and password are in the request
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: "Missing parameters" });
  }
  User.findOne({ username: req.body.username }).then((user) => {
    // User not found
    if (!user) {
      return res
        .status(401) //
        .json({ message: "User not found" });
    }

    // Compare passwords
    if (req.body.password === user.password) {
      return res.sendStatus(200);
    } else {
      return res
        .status(401) //
        .json({ message: "Invalid login" });
    }
  });
});

/**
 * Registering a new user
 */
authRouter.post("/register", (req, res) => {
  // Check that username and password are in the request
  if (!req.body.username || !req.body.password) {
    return res
      .status(400) //
      .json({ message: "Missing parameters" });
  }

  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });

  User.findOne({ username: newUser.username }).then((user) => {
    // Check if username is taken
    if (user) {
      return res
        .status(409) //
        .json({ message: "User already exists" });
    }
    // Save the new user
    else {
      newUser.save().then(() => {
        return res.sendStatus(201);
      });
    }
  });
});

module.exports = authRouter;
