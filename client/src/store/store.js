import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import products from './modules/products';
import cart from './modules/cart';
import checkout from './modules/checkout';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        products,
        cart,
        checkout,
    }
});