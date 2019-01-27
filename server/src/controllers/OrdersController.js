const { Order } = require('../models')

module.exports = {
    async create(req, res) {
        try {
            console.log(req.body)
            const order = await Order.create(req.body)
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
