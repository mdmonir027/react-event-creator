const { body } = require('express-validator');

const validation = {
  eventCreateValidator: [
    body('name')
      .not()
      .isEmpty()
      .withMessage('Event name required!')
      .isLength({ min: 4, max: 50 })
      .withMessage('Name must a char between 4 to 50')
      .custom((_, { req }) => {
        req.body.created_by = req.user.id;
        return true;
      }),
    body('description')
      .not()
      .isEmpty()
      .withMessage('Event description is required!'),

    body('coordinates').custom((coordinates) => {
      if (!coordinates) {
        return true;
      }
      const [lat, lng] = coordinates.split(',');
      let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');

      const result = pattern.test(lat) && pattern.test(lng);
      if (!result) {
        throw new Error('Coordinates must be valid!');
      }
      return true;
    }),

    body('date_from')
      .not()
      .isEmpty()
      .withMessage('Event date from is required!'),

    body('time').not().isEmpty().withMessage('Time is required!'),
    body('source_url').not().isEmpty().withMessage('Source URL is required!'),
  ],
};

module.exports = validation;
