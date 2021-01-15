import Vuex from "vuex";
import Vue from "vue";
import VuexPersistence from 'vuex-persist'
import auth from "./modules/auth";

// Load Vuex
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

// Create store
export default new Vuex.Store({
    modules: {
        auth,
    },
    plugins: [vuexLocal.plugin],
});