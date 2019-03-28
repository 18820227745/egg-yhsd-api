'use strict';
const Yhsd = require('./yhsd');
const assert = require('assert');

module.exports = app => {
  app.addSingleton('yhsdApi', createClient);
};
let yhsd;
function createClient(config, app) {
  assert(config.appKey && config.appSecret);
  // 创建实例
  yhsd = yhsd || new Yhsd(config);
  // 做启动应用前的检查
  return yhsd;
}