'use strict';

const _ = require('lodash');
const bluebird = require('bluebird');
const { Api, Auth } = require('yhsd-api');

bluebird.promisifyAll(Api.prototype);
bluebird.promisifyAll(Auth.prototype);

class Yhsd {
  constructor(option) {
    this.option = option;
    this._api = null;
    this._token = null;
    this._webhook_token = null;
    this._auth = new Auth(option);
  }

  get api() {
    if (!this._api) {
      if (!this._token) {
        return this._auth.getTokenAsync().then(token => {
          this._token = token;
          this._api = new Api(token);
          return this._api;
        });
      }
      this._api = new Api(this._token);
    }

    return this._api;
  }

  get wehbook() {
    if (!this._webhook_token) {
      return this._api.getAsync('/shop').then(data => this._webhook_token = data.shop.webhook_token);
    }
    return this._webhook_token;
  }

  async register(option = this.option) {
    if (!option || !option.topics) {
      throw new Error('must has `yhsd.topics` arguments.');
    }

    let hooks = [];
    let page = 1;
    const limit = 50;

    // 加载 webhooks
    while (true) {
      const { webhooks } = await this._api.getAsync('/webhooks', { limit, page });
      hooks = hooks.concat(webhooks);
      if (webhooks.length < limit) break;
      page += 1;
    }

    // 创建 webhook
    const create = async (topic, address, force = false) => {
      const existed = _.find(hooks, { topic, address });
      console.log(`yhsd webhook[${topic}]`, address, 'existed', !!existed);
      if (force || !existed) {
        return this._api.postAsync('/webhooks', {
          webhook: {
            topic,
            address,
            content_type: 'text/plain',
          },
        });
      }
    };

    // 比对,创建新的hook
    const topics = option.topics;
    for (const [ topic, address ] of Object.entries(topics)) {
      // 兼容强制创建的情况
      if (_.isObject(address)) {
        const val = address;
        await create(topic, val.address, val.force);
      }

      await create(topic, address, false);
    }

    // delete hook
    // hooks.map(async hook => {
    //   this._api.deleteAsync(`/webhooks/${hook.id}`);
    // });

  }
}

module.exports = Yhsd;
