const vision = require('vision');
const inert = require('inert');
// eslint-disable-next-line
// 貌似是保留字
const package = require('package');

const swagger = require('hapi-swagger');

module.exports = [
  inert,
  vision,
  {
    register: swagger,
    options: {
      info: {
        title: '简阅的小程序 - 服务端 - 接口文档',
        version: package.version,
      },
      grouping: 'tags',
    },
  },
];
