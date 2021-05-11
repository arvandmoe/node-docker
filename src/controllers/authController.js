const User = require("../models/userModel");

const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });
    req.session.user = newUser;
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({
        status: "error",
        message: "User not found!",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      req.session.user = user
      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "error",
        message: "username or password is wrong",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "error",
    });
  }
};
