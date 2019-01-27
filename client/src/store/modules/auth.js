import axios from 'axios'

import AuthenticationService from '../../services/AuthenticationService'

const state = {
    statusAuth: '',
    token: localStorage.getItem('token') || '',
    userEmail: localStorage.getItem('userEmail') || '',
    userId: '',
    role_id: localStorage.getItem('role_id') || '',
    validation_messages: []
};
const actions = {
    async login({ commit }, user) {
        state.validation_messages = []
        try {
            let resp = await AuthenticationService.login({ data: user })
            const token = resp.data.token
            const userEmail = resp.data.user.email
            state.userId = resp.data.user.id
            localStorage.setItem('token', token)
            localStorage.setItem('role_id', resp.data.user.RoleId)
            localStorage.setItem('userEmail', userEmail)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token)
        }
        catch (e) {
            let error = e.response.data.error
            commit('auth_error', error)
        }
    },
    async register({ commit }, user) {
        state.validation_messages = []
        try {
            await AuthenticationService.register({ data: user })
            commit('register_success')
        }
        catch (e) {
            console.log(e.response.data)
            let validation = e.response.data.error
            if (Array.isArray(validation)) {
                validation.forEach(function (value) {
                    commit('auth_error', value)
                })
            } else {
                commit('auth_error', validation)
            }
        }
    },
    async logout({ commit }) {
        try {
            await localStorage.removeItem('token')
            await localStorage.removeItem('userEmail')
            await localStorage.removeItem('role_id')
            commit('logout')
            delete axios.defaults.headers.common['Authorization']
        }
        catch (e) {
            console.log(e);
        }
    }
};

const mutations = {
    register_success(state) {
        state.statusAuth = 'Registered Successfully'
    },
    success(state, success) {
        state.statusAuth = success
    },
    auth_success(state, token) {
        state.statusAuth = 'Success'
        state.token = token
    },
    auth_error(state, validation) {

        state.validation_messages.push(validation)
        state.statusAuth = 'Error'
    },
    logout(state) {
        localStorage.removeItem('token')
        state.statusAuth = 'Logging out'
        state.token = ''
    },
};

const getters = {
    isLoggedIn(state) { return state.token },
    role_id(state) { return state.role_id },
    statusAuth(state) { return state.statusAuth },
    token(state) { return state.token },
    userEmail(state) { return state.userEmail },
    userId(state) { return state.userId },
    validation_messages(state) { return state.validation_messages },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}