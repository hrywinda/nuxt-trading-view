import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    loginSuccess({ commit }) {
      commit("setLoggedIn", true);
    },
    logout({ commit }) {
      commit("setLoggedIn", false);
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
