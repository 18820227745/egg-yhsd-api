'use strict';
const Yhsd = require('./yhsd');
const assert = require('assert');

module.exports = app => {
  app.addSingleton('yhsdApi', createClient);
};

function createClient(config, app) {
  assert(config.appKey && config.appSecret);
  // 创建实例
  return new Yhsd(config);
}