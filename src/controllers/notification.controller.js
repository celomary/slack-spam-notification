const { spamNotificationService } = require('../services/notification.service');

const spamNotification = async (req, res) => {
  const isSpam = await spamNotificationService(req.body);
  res.status(201).json({
    message: isSpam ? 'user notified!' : "user didn't get notified!",
  });
};

module.exports = {
  spamNotification,
};
