# egg-yhsd-api

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-yhsd-api.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-yhsd-api
[travis-image]: https://img.shields.io/travis/eggjs/egg-yhsd-api.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-yhsd-api
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-yhsd-api.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-yhsd-api?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-yhsd-api.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-yhsd-api
[snyk-image]: https://snyk.io/test/npm/egg-yhsd-api/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-yhsd-api
[download-image]: https://img.shields.io/npm/dm/egg-yhsd-api.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-yhsd-api

<!--
Description here.
-->

## Install

```bash
$ npm i egg-yhsd-api --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.yhsdApi = {
  enable: true,
  package: 'egg-yhsd-api',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.yhsdApi = {
  client: {  // client必须要
      // 测试
      appKey: '***',
      appSecret: '****',
      private: true,
      topics: {
        'products/create': `${host}/hook/products/create`, //  商品创建
      }
    },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
