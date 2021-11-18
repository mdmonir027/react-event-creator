const router = require('express').Router();
const { eventCreateValidator } = require('../validator/eventValidation');

const {
  create,
  getAll,
  find,
  update,
} = require('../controller/eventController');
const { validationErrorResponse } = require('../utils/errorResponses');
const authenticate = require('../middleware/auth/authenticate');

router.get('/', authenticate, getAll);
router.post(
  '/',
  authenticate,
  eventCreateValidator,
  validationErrorResponse,
  create
);
router.get('/:id', authenticate, find);
router.put(
  '/:id',
  authenticate,
  eventCreateValidator,
  validationErrorResponse,
  update
);

module.exports = router;
