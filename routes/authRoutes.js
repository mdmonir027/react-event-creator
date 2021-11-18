const router = require('express').Router();
const { login, me } = require('../controller/authController');
const { userLoginValidator } = require('../validator/userValidation');
const { validationErrorResponse } = require('../utils/errorResponses');
const authenticate = require('../middleware/auth/authenticate');

router.post('/login', userLoginValidator, validationErrorResponse, login);
router.get('/me', authenticate, me);

module.exports = router;
