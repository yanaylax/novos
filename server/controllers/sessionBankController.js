const asyncHandler = require("express-async-handler");

const Session = require("../models/sessionModel");
const User = require("../models/userModel");

const getSessionBank = asyncHandler(async (req, res) => {
  const sessionBank = await Session.find({ user: req.user.id });
  res.status(200).json(sessionBank);
});

const setSessionBank = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Session bank set",
  });
});

const setSession = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add text");
  } else if (!req.body.description) {
    res.status(400);
    throw new Error("Please add description");
  }
  const session = await Session.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id,
  });
  res.status(200).json(session);
});

const deleteSession = asyncHandler(async (req, res) => {
  const session = await Session.findById(req.params.id);
  if (!session) {
    res.status(400);
    throw new Error("Session not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (session.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await session.remove();
  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = {
  getSessionBank,
  setSessionBank,
  setSession,
  deleteSession,
};
