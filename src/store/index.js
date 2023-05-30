import { createStore } from "vuex";
import { useRouter } from "vue-router";

export default createStore({
  state: {
    authenticated: false,
  },
  mutations: {
    SET_AUTH(state, auth) {
      state.authenticated = auth;
    },
  },
  actions: {
    setAuth({ commit }, auth) {
      commit("SET_AUTH", auth);
    },
  },
  modules: {},
});
