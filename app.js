require('env2')('./.env');

const Hapi = require('hapi');

const application = new Hapi.Server();

const config = require('./config');
const article = require('./routes/article');

application.connection({
  host: config.host,
  port: config.port,
});

const init = async () => {
  application.route([...article]);

  await application.start();
};

init();
