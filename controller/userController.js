const User = require('../models/User');
const { internalServerError } = require('../utils/errorResponses');
const generate = require('../utils/passwordGenerator');
const bcrypt = require('bcrypt');

const controller = {
  create: async (req, res) => {
    const { SALT_ROUND } = process.env;
    try {
      const { name, username, email } = req.body;
      const generatedPassword = generate();
      console.log({ generatedPassword });

      const salt = await bcrypt.genSalt(parseInt(SALT_ROUND));
      const hashPassword = await bcrypt.hash(generatedPassword, salt);

      const userData = {
        name,
        username,
        password: hashPassword,
        email,
        last_login: new Date(),
      };

      const user = await User.create(userData);

      return res.status(200).json(user);
    } catch (e) {
      internalServerError(res, e);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json(users);
    } catch (e) {
      internalServerError(res, e);
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });
      return res.status(200).json({
        message: 'User Deleted!',
      });
    } catch (e) {
      internalServerError(res, e);
    }
  },
};

module.exports = controller;
