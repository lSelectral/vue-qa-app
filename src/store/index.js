import {createStore} from "vuex";
// import products from "./modules/products"
// import contacts from "./modules/contacts"

const store = createStore({
    state: {
        userName: "Recep",
        isAuthenticated: false
    },
    getters: {
        _userName: state => state.userName,
        _authenticationStatus: state => state.isAuthenticated
    },
    modules: {
        // products,
        // contacts,
    }
})
export default store;