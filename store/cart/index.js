export default {
  state: {
    userCheck: [],
  },
  mutations: {
    setUserCheck(state, payload) {
      state.userCheck = payload;
    },
    addUserCheck(state, payload) {
      state.userCheck.push(payload);
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.$axios.get("/get-usercheck").then(response => {
        vuexContext.commit("setUserCheck", response.data.data);
      });
    },
    addUserCheck(vuexContext, payload) {
      this.$axios.post("/add-usercheck", payload).then(response => {
        vuexContext.commit("addUserCheck", response.data.data);
       });
    },
  },
  getters: {
    getUserCheck(state) {
      return state.userCheck
    }
  }
};
