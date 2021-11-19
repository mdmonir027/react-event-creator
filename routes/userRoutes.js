const router = require('express').Router();
const { create, getAll, remove } = require('../controller/userController');
const { userRegisterValidator } = require('../validator/userValidation');
const { validationErrorResponse } = require('../utils/errorResponses');
const authenticate = require('../middleware/auth/authenticate');
const isAdmin = require('../middleware/auth/isAdmin');

router.get(
  '/',
  (req, res, next) => {
    console.log('first');
    next();
  },
  authenticate,
  (req, res, next) => {
    console.log('second');
    next();
  },
  isAdmin,
  (req, res, next) => {
    console.log(req.user);
    next();
  },
  getAll
);
router.post(
  '/',
  authenticate,
  isAdmin,
  userRegisterValidator,
  validationErrorResponse,
  create
);
router.delete('/:id', authenticate, isAdmin, remove);
module.exports = router;
