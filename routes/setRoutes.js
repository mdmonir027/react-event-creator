const authRoutes = require('./authRoutes');
const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');

const routes = [
  {
    path: '/auth',
    handler: authRoutes,
  },
  {
    path: '/event',
    handler: eventRoutes,
  },
  {
    path: '/user',
    handler: userRoutes,
  },
  {
    path: '/*',
    handler: (req, res) => {
      return res.status(200).json({
        message: 'Server working',
      });
    },
  },
];

module.exports = (app) => {
  routes.forEach((item) => {
    if (item.path === '/') {
      app.get('/', item.handler);
    } else {
      app.use(item.path, item.handler);
    }
  });
};
