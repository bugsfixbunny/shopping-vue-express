module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        name: DataTypes.STRING
    })

    Role.associate = function (models) {
    }

    return Role
}
