const router = require('express').Router();
const { register, login } = require('../controller/authController');
const {
  userRegisterValidator,
  userLoginValidator,
} = require('../validator/userValidation');
const { validationErrorResponse } = require('../utils/errorResponses');
const authenticate = require('../middleware/auth/authenticate');
const passport = require('passport');
router.post(
  '/register',
  //   authenticate,
  userRegisterValidator,
  validationErrorResponse,
  register
);
router.post('/login', userLoginValidator, validationErrorResponse, login);
module.exports = router;
