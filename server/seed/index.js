const {
  sequelize,
  Product,
  User,
  Role,
} = require('../src/models')

const Promise = require('bluebird')
const products = require('./products.json')
const users = require('./users.json')
const roles = require('./roles.json')

sequelize.sync()
  .then(async function () {
    
    await Promise.all(
      roles.map(role => {
        Role.create(role)
      })
    )

    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      products.map(product => {
        Product.create(product)
      })
    )

  })
