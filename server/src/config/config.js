const path = require('path')

module.exports = {
  port: process.env.PORT || 8085,
  db: {
    database: process.env.DB_NAME || 'exp-vue-cart',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../exp-vue-cart.sqlite')

    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
