
'use strict';

const yhsdApi = require('./lib/yhsdApi');

module.exports = agent => {
  if (agent.config.yhsdApi.agent) yhsdApi(agent);
};