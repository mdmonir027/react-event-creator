require('dotenv').config();
const express = require('express');
const db = require('./config/database');
const moment = require('moment');

const app = express();

require('./middleware/setMiddleware')(app);
require('./routes/setRoutes')(app);

db.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((e) => {
    console.log('Database connection failed!', e);
  });
console.log(moment());

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
