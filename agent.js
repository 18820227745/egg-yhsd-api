
'use strict';

const yhsdApi = require('./lib/yhsdApi');

module.exports = app => {
  if (agent.config.yhsdApi.agent) yhsdApi(app);
};