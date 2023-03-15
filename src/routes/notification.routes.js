const { Router } = require('express');
const { spamNotification } = require('../controllers/notification.controller');

const notificationRoute = Router();

notificationRoute.post('/spam', spamNotification);

module.exports = notificationRoute;
