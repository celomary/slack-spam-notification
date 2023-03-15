const client = require('../config/slackClient.config');

const sendMessageToChannel = async message => {
  const result = client.chat.postMessage({
    text: message,
    channel: process.env.SLACK_CHANNEL_NAME,
  });
  return result;
};

const spamNotificationService = async payload => {
  if (payload.Type === 'SpamNotification') {
    await sendMessageToChannel(`Spam Notification From ${payload.Email}`);
    return true;
  }
  return false;
};

module.exports = {
  spamNotificationService,
};
