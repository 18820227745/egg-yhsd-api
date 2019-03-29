'use strict';
const Yhsd = require('./yhsd');
const assert = require('assert');

module.exports = app => {
  app.addSingleton('yhsdApi', createClient);
};

let yhsd
async function createClient(config, app) {
  assert(config.appKey && config.appSecret);
  // 创建实例
  yhsd = yhsd || new Yhsd(config);
  await yhsd.api();
  await yhsd.webhook();
  await yhsd.register();
  
  return yhsd;
}
