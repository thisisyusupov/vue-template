import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        logon: false,
        userIdentity: null,
        authenticated: false
    },
    mutations: {
        authenticate(state) {
            state.logon = true;
        },
        authenticated(state, identity) {
            state.userIdentity = identity;
            state.authenticated = true;
            state.logon = false
        },
        logout(state) {
            state.userIdentity = null;
            state.authenticated = false;
            state.logon = false
        }
    },
    getters: {
        logon: state => state.logon,
        account: state => state.userIdentity,
        authenticated: state => state.authenticated
    }
})
