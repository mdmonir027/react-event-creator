const router = require('express').Router();
const { eventCreateValidator } = require('../validator/eventValidation');

const { create } = require('../controller/eventController');
const { validationErrorResponse } = require('../utils/errorResponses');
const authenticate = require('../middleware/auth/authenticate');

router.post(
  '/',
  authenticate,
  eventCreateValidator,
  validationErrorResponse,
  create
);

module.exports = router;
