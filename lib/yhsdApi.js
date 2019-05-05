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
  // 初始化 yhsd sdk
  await app.yhsd.api;
  await app.yhsd.webhook;
  // await yhsd.register();
  
  return yhsd;
}
