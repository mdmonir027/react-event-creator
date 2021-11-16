const router = require('express').Router();
const { register } = require('../controller/authController');
const { userRegisterValidator } = require('../validator/userValidation');
const { validationError } = require('../utils/errorResponses');
const authenticate = require('../middleware/auth/authenticate');
const passport = require('passport');
router.post(
  '/register',
  //   authenticate,
  userRegisterValidator,
  validationError,
  register
);
module.exports = router;
