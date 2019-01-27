import CheckoutService from '../../services/CheckoutService'

const state = {
    statusOrder: '',
    validation_messages: ''
};
const actions = {
    async sendOrder({ commit }, order) {
        state.validation_messages = []
        try {
            await CheckoutService.sendOrder(order)
            commit('order_success')
        }
        catch (e) {
            let validation = e.response.error
            commit('order_error', validation)
        }
    },
};

const mutations = {
    order_success(state) {
        state.statusOrder = 'Thanks for your order'
    },
    order_error(state, validation) {
        state.validation_message = validation
        state.statusOrder = 'Error'
    },
};

const getters = {
    statusOrder(state) { return state.statusOrder },
    validation_messages(state) { return state.validation_messages },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}