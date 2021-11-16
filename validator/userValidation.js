const { body } = require('express-validator');
const User = require('../models/User');
const validator = {
  userRegisterValidator: [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Please enter a name')
      .isLength({ min: 4, max: 50 })
      .withMessage('Please enter a name between 4 to 50 chars')
      .trim(),
    body('login')
      .not()
      .isEmpty()
      .withMessage('Please enter a username')
      .custom(async (login) => {
        const userData = await User.findOne({ where: { login } });
        if (userData) {
          throw new Error('Username is already exists!');
        }
        return true;
      }),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address')
      .custom(async (email) => {
        const userData = await User.findOne({ where: { email } });
        if (userData) {
          throw new Error('Email is already exists!');
        }
        return true;
      })
      .normalizeEmail(),
  ],
};

module.exports = validator;
