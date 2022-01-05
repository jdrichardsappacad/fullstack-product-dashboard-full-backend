module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    test: {
      username: process.env.TEST_USERNAME,
      password: process.env.TEST_PASSWORD,
      database: process.env.TEST_DATABASE,
      host: process.env.TEST_HOST
    }
  }
};
