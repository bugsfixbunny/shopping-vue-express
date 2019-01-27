import Api from './Api'

export default {
    getProducts() {
        return Api().get('products')
    },
    getProduct(id) {
        return Api().get(`product/${id}`)
    },
    updateProduct(id, data) {
        return Api().put(`product/update/${id}`, data)
    }
}

