const state = {
    cart_amount: 0,
    cartProductsId: []
};

const actions = {
    removeProduct({ commit }, order) {
        commit('REMOVE_PRODUCT', order);
    },
    buyProduct({ commit }, order) {
        commit('BUY_PRODUCT', order);
    },
};

const mutations = {
    'BUY_PRODUCT'(state, { productId, quantity, productPrice }) {
        console.log(quantity)
        const record = state.cartProductsId.find(element => element.id == productId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.cartProductsId.push({
                id: productId,
                quantity: quantity
            });
        }
        state.cart_amount += productPrice * quantity;
    },
    'REMOVE_PRODUCT'(state, { productId, quantity, productPrice }) {

        const record = state.cartProductsId.find(element => element.id == productId); console.log(record)

        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.cartProductsId.splice(state.cartProductsId.indexOf(record.id), 1);
        }
        state.cart_amount -= productPrice * quantity;
    },
};
import store from '../store';

const getters = {

    productCart(state) {

        return state.cartProductsId.map(product => {
            const record = store.getters['products/products'].find(element => element.id == product.id);
            return {
                id: product.id,
                quantity: product.quantity,
                img: record.img,
                name: record.name,
                price: record.price
            }
        });
    },
    products(state) {
        return state.products;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}