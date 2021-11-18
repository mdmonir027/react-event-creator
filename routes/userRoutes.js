const router = require('express').Router();
const { create } = require('../controller/userController');
const { userRegisterValidator } = require('../validator/userValidation');
const { validationErrorResponse } = require('../utils/errorResponses');
const authenticate = require('../middleware/auth/authenticate');
const isAdmin = require('../middleware/auth/isAdmin');

router.post(
  '/',
  authenticate,
  isAdmin,
  userRegisterValidator,
  validationErrorResponse,
  create
);
module.exports = router;
