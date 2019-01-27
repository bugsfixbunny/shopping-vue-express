import axios from 'axios'

import ProductService from '../../services/ProductService'

const state = {
    allProducts: [],
    product: {},
    errors: {}
};
const actions = {
    async getProducts({ commit }) {
        try {
            const resp = await ProductService.getProducts();
            console.log(resp)
            commit('GET_PRODUCTS_SUCCESS', resp.data)
        } catch {
            commit('GET_PRODUCTS_ERROR', resp.data.error)
        }
    },
    async getProduct({ commit }, id) {
        try {
            const resp = await ProductService.getProduct(id);
            commit('GET_PRODUCT_SUCCESS', resp.data)
        } catch {
            commit('GET_PRODUCT_ERROR', resp.data.error)
        }
    },
};
const mutations = {
    GET_PRODUCTS_SUCCESS(state, products) {
        state.allProducts = products
    },
    GET_PRODUCTS_ERROR(state, errors) {
        state.errors = errors
    },
    GET_PRODUCT_SUCCESS(state, product) {
        state.product = product
    },
    GET_PRODUCT_ERROR(state, errors) {
        state.errors = errors
    },
};

const getters = {
    products(state) {
        return state.allProducts;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}