const { Product } = require('../models')
const config = require('../config/config')

module.exports = {
    async index(req, res) {

        try {
            const products = await Product.findAll({})
            res.send(products)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the products'
            })
        }
    },
    async show(req, res) {
        try {
            const product = await Product.findById(parseInt(req.params.id))
            res.send(product)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the products'
            })
        }
    },
    async update(req, res) {
        try {
            await Product.update(req.body.data, {
                where: {
                    id: req.params.categoryId
                }
            })
            res.send(req.body.data)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update the product'
            })
        }
    }




}
