import Api from './Api'

export default {
    sendOrder(order) {
        return Api().post('checkout', order)
    },
}
