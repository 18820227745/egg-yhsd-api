
'use strict';

const yhsdApi = require('./lib/mysql');

module.exports = app => {
  if (app.config.yhsdApi.app) yhsdApi(app);
};



