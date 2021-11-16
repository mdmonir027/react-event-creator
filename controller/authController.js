const { internalServerError } = require('../utils/errorResponses');
const moment = require('moment');
const User = require('../models/User');
const generate = require('../utils/passwordGenerator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const controller = {
  register: async (req, res) => {
    const { SALT_ROUND } = process.env;
    try {
      const { name, login, email } = req.body;
      const generatedPassword = generate();
      console.log({ generatedPassword });

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
  login: async (req, res) => {
    const { JWT_TOKEN_SECRET } = process.env;
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ where: { login } });
      const errorResponseMessage = {
        login: 'Invalid Credentials',
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
          login: user.login,
          iat: new Date().getTime(),
          exp: Date.now() + 1000 * 60 * 60 * 2,
          isAdmin,
        },
        JWT_TOKEN_SECRET
      );

      await User.update({ last_login: new Date() }, { where: { login } });

      return res.status(200).json({
        message: 'Login was successful',
        token: `Bearer ${token}`,
      });
    } catch (e) {
      internalServerError(res, e);
    }
  },
  me: async (req, res) => {},
};

module.exports = controller;
