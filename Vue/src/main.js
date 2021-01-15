/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'

import axios from "axios";
import vuex from "vuex";
import store from './store';

axios.interceptors.response.use(response => {
    return response;
}, error => {
        if (error.response.status === 401) {
            console.log("401 interceptors")
            //place your reentry code
            store.dispatch("LogOut");
            router.push("/login");//redirect to dashboard route
        }         
    return error;
});


Vue.config.productionTip = false

Vue.use(vuex)
Vue.use(ArgonDashboard)

new Vue({
    created() {
        this.$store.dispatch('CheckToken')
    },
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
