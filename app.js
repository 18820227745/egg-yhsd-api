'use strict';

module.exports = app => {
  app.addSingleton('yhsdApi', createYhsdApi);
};


function createYhsdApi(config, app) {
  assert(config.appKey && config.appSecret);
  // 创建实例
  const yhsd = new app.Yhsd(config);

  // 做启动应用前的检查
  app.beforeStart(async () => {
    app.coreLogger.info('[egg-yhsd-api] init instance success');
  });

  return yhsd;
}
