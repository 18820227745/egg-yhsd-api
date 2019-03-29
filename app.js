
'use strict';

const yhsdApi = require('./lib/yhsdApi');

module.exports = app => {
  if (app.config.yhsdApi.app) yhsdApi(app);
};

