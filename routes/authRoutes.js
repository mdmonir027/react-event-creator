const router = require('express').Router();
const { login } = require('../controller/authController');
const { userLoginValidator } = require('../validator/userValidation');
const { validationErrorResponse } = require('../utils/errorResponses');

router.post('/login', userLoginValidator, validationErrorResponse, login);

module.exports = router;
