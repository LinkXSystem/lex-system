const { env } = process;

module.exports = {
  port: env.port,
  host: env.host,
};
