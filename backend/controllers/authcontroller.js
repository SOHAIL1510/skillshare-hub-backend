const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ token: createToken(user._id), user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.status(200).json({ token: createToken(user._id), user });
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });
};
