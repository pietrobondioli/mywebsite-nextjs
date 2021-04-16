const fs = require('fs');
const constants = require('./constants');

const generateRobotsTxt = async () => {
  const content = `User-agent: *
Disallow:

Sitemap: https://${constants.DOMAIN_NAME}/sitemap.xml
  `;

  fs.writeFileSync('public/robots.txt', content);
};

module.exports = generateRobotsTxt;
