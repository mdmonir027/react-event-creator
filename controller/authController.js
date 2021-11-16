const { internalServerError } = require('../utils/errorResponses');
const moment = require('moment');
const User = require('../models/User');
const controller = {
  register: async (req, res) => {
    try {
      const { name, login, password, email } = req.body;
      const data = {
        name,
        login,
        password,
        email,
        user_type: 'u',
        date_added: new Date(),
        last_login: new Date(),
      };
      console.log(data);

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
