const {
  sequelize,
  User,
  Role
} = require('../models')

const Promise = require('bluebird')
const users = require('./users.json')
const roles = require('./roles.json')

sequelize.sync({force: true})
  .then(async function () {
    await
    Promise.all(
        users.map(user => {
            User.create(user)
        })
    )

    await
    Promise.all(
        roles.map(role => {
            Role.create(role)
        })
    )

})
