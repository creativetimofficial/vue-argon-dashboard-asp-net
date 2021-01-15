import axios from "axios";
import ClientOAuth2 from "client-oauth2";
import { setAuthHeader } from "../modules/axiosHeaders";

const config = {
    clientId: "vue.client",
    accessTokenUri: `${process.env.VUE_APP_AUTH_SERVER_URL}/connect/token`,
    userInfoUri: `${process.env.VUE_APP_AUTH_SERVER_URL}/connect/userinfo`,
    endsessionUri: `${process.env.VUE_APP_AUTH_SERVER_URL}/connect/endsession`,
    introspectURL: `${process.env.VUE_APP_AUTH_SERVER_URL}/connect/introspect`,
    scopes: ["openid", "profile", "email"],
};

const oauth = new ClientOAuth2(config);

const state = {
    user: null,
    token: null,
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    StateUser: (state) => state.user,
    Token: (state) => state.token,
};

const actions = {

    async LogIn({ commit }, user) {

        var em = user.get("email");
        var pw = user.get("password");

        return await oauth.owner.getToken(em, pw)
            .then((result) => {
                commit("setUser", em);
                commit("setToken", result.accessToken);

                return true;
            })
            .catch((error) => {
                commit("setToken", null);
                console.log("LogIn Error:" + error);
                return false;
            });
    },

    async LogOut({ commit }) {
        let user = null;
        commit("logout", user);
    },

    async Register({ dispatch }, form) {

        await dispatch("LogOut"); //ensure that browser is not already logged in

        var email = form.get("email");
        var name = form.get("name");
        var password = form.get("password");
        var result = false;

        await axios.post(`${process.env.VUE_APP_AUTH_SERVER_URL}/Register`, {
            Name: name,
            UserName: email,
            Email: email,
            Password: password,
            ConfirmPassword: password,
            ReturnUrl: "/login",
        }).then((response) => {

            console.log(response.data);
            result = true;
        })
            .catch((error) => {
                console.log(error);
            });

        if (result) {
            //Logged in user after registration
            let UserForm = new FormData()
            UserForm.append('email', email)
            UserForm.append('password', password)

            await dispatch('LogIn', UserForm)
        }

        return result;
    },

    async GetProfile({ commit }) {
        let token = this.getters.Token;
        if (token) {
            axios.defaults.headers.common["Authorization"] = token ? "Bearer " + token : "";

            return await axios.get(config.userInfoUri).then((result) => {
                commit("setUser", result.data.name);
                return result.data
            });
        }
    },

    async UpdateProfile({ commit }, form) {

        var currentUserName = form.get("currentusername");
        var newusername = form.get("newusername");
        var name = form.get("name");

        return await axios
                        .post(`${process.env.VUE_APP_AUTH_SERVER_URL}/Profile`,
                        {
                            CurrentUserName: currentUserName,
                            NewUserName: newusername,
                            Email: newusername,
                            Name: name,
                        }).then((result) => {
                            commit("setUser", name);
                            return result.data
                        }).catch((error) => {
                            console.error(error);
                            return null;
                        });
        
    },

    async UpdatePassword({ commit }, form) {

        var userName = form.get("userName");
        var currentPassword = form.get("currentPassword");
        var newPassword = form.get("newPassword");

        return await axios
                        .post(`${process.env.VUE_APP_AUTH_SERVER_URL}/Password`, {
                            UserName: userName,
                            CurrentPassword: currentPassword,
                            NewPassword: newPassword,
                        })
                        .then(() => {
                            commit("setUser", userName);
                            return true;
                        })
                        .catch((error) => {
                            console.error(error);
                            return false;
                        });
    },

    async CheckToken({ dispatch, commit }) {

        let token = this.getters.Token;
        if (!token) {
            dispatch("LogOut");     
        }
        else {
            commit("setToken", token);
        }
    }
};

const mutations = {
    setUser(state, username) {
        state.user = username;
    },
    setToken(state, token) {
        state.token = token;
        setAuthHeader(token);
    },

    logout(state, user) {
        state.user = user;
        state.token = null;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};