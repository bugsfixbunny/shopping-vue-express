const AuthenticationController = require('./controllers/AuthenticationController')
const ProductsController = require('./controllers/ProductsController')
const OrdersController = require('./controllers/OrdersController')
const isAuthenticated = require('../middlewares/isAuthenticated')

module.exports = (app) => {
    app.post('/register',
        AuthenticationController.register),
        app.post('/login',
            AuthenticationController.login),
        app.get('/products',
            ProductsController.index),
        app.get('/product/:id',
            ProductsController.show),
        app.put('/product/:id',
            ProductsController.update),
        app.post('/checkout', isAuthenticated,
            OrdersController.create)
}