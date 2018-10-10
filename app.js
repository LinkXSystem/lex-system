require('env2')('./.env');

const Hapi = require('hapi');

const application = new Hapi.Server();

// 配置
const config = require('./config');
// 插件
const swagger = require('./plugins/swagger');
// 路由
const article = require('./routes/article');
const user = require('./routes/user');

application.connection({
  // host: config.host,
  port: config.port,
});

const init = async () => {
  await application.register([...swagger]);

  application.route([...article, ...user]);

  await application.start();
};

init();
