const { internalServerError } = require('../utils/errorResponses');
const moment = require('moment');
const User = require('../models/User');
const generate = require('../utils/passwordGenerator');
const bcrypt = require('bcrypt');

const controller = {
  register: async (req, res) => {
    const { SALT_ROUND } = process.env;
    try {
      const { name, login, email } = req.body;
      const generatedPassword = generate();

      const salt = await bcrypt.genSalt(parseInt(SALT_ROUND));
      const hashPassword = await bcrypt.hash(generatedPassword, salt);

      const data = {
        name,
        login,
        password: hashPassword,
        email,
        user_type: 'u',
        date_added: new Date(),
        last_login: new Date(),
      };

      const user = await User.create(data);

      return res.status(200).json(user);
    } catch (e) {
      internalServerError(res, e);
    }
  },
  login: async (req, res) => {},
  me: async (req, res) => {},
};

module.exports = controller;
