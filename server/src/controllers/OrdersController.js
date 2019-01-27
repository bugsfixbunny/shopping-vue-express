const { Order } = require('../models')

module.exports = {
    async create(req, res) {
        try {
            const order = req.body;
            order.UserId = req.user.dataValues.id
            await Order.create(order)
            res.send({
                order,
            })

        } catch (err) {
            res.status(400).send({
                error: "Error"
            })
        }
    },
}
