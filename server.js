/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const notification = require('./src/routes/notification.routes');

dotenv.config();
const app = express();
// middlewares
app.use(bodyParser.json());
// routes
app.use('/notification', notification);
// running the server
app.listen(process.env.PORT || 8000, () => {
  console.log('--------------------------------------');
  console.log(`|   Server running in port ${process.env.PORT || 8000}      |`);
  console.log('--------------------------------------');
});
