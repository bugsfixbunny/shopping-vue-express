import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/products/Products.vue'
import ProductDetails from '../components/products/ProductDetails.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import CartList from '../components/cart/CartList.vue'
import Checkout from '../components/checkout/CheckoutForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'products', component: Products },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/product/:id', name: 'productDetails', component: ProductDetails },
    { path: 'cart/', name: 'cartList', component: CartList },
    { path: 'checkout/', name: 'checkout', component: Checkout },

  ]
})
