const webpush = require('web-push');

webpush.setVapidDetails('mailto:osmarvm25@gmail.com', process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);

module.exports = webpush;