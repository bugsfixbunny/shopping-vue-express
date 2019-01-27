module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        quantity: DataTypes.INTEGER,
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.INTEGER,
        mobile: DataTypes.INTEGER,
        address: DataTypes.STRING,
    })

    Order.associate = function (models) {
        Order.belongsTo(models.Product),
            Order.belongsTo(models.User)
    }


    return Order
}
