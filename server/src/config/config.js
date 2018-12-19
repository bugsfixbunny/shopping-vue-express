const path = require('path')

module.exports = {
  port: process.env.PORT || 8083,
  db: {
    database: process.env.DB_NAME || 'exp-vue-cart',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
