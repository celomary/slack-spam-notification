const { WebClient } = require('@slack/web-api');
const dotenv = require('dotenv');

dotenv.config();

const client = new WebClient(process.env.SLACK_ACCESS_TOKEN);

module.exports = client;
