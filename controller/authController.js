const { internalServerError } = require('../utils/errorResponses');
const moment = require('moment');
const User = require('../models/User');
const generate = require('../utils/passwordGenerator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const controller = {
  login: async (req, res) => {
    const { JWT_TOKEN_SECRET } = process.env;
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      const errorResponseMessage = {
        username: 'Invalid Credentials',
        email: 'Invalid Credentials',
      };
      if (!user) {
        return res.status(400).json(errorResponseMessage);
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json(errorResponseMessage);
      }

      const isAdmin = user.user_type === 'a' ? false : true;
      const token = jwt.sign(
        {
          email: user.email,
          username: user.username,
          iat: new Date().getTime(),
          exp: Date.now() + 1000 * 60 * 60 * 2,
          isAdmin,
        },
        JWT_TOKEN_SECRET
      );

      await User.update({ last_login: moment() }, { where: { username } });

      return res.status(200).json({
        message: 'Login was successful',
        token: `Bearer ${token}`,
      });
    } catch (e) {
      internalServerError(res, e);
    }
  },
  me: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id, {
        attributes: { exclude: ['isDeleted', 'updatedAt', 'password'] },
      });
      return res.status(200).json(user);
    } catch (e) {
      internalServerError(res, e);
    }
  },
  updateName: async (req, res) => {
    try {
      const { name } = req.body;
      await User.update({ name }, { where: { id: req.user.id } });
      return res.status(200).json({
        message: 'User full name Updated',
      });
    } catch (e) {
      internalServerError(res, e);
    }
  },
};

module.exports = controller;
