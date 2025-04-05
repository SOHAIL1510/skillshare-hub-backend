const Session = require("../models/Session");

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSession = async (req, res) => {
  const { title, category, description, datetime, mode } = req.body;
  try {
    const session = new Session({ title, category, description, datetime, mode });
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};