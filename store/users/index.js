import Cookie from "js-cookie";
export default {
  state: {
    authKey: null,
    user: [],
    userId: null,
  },
  mutations: {
    setAuthKey(state, payload) {
      state.authKey = payload;
    },
    clearAuthKey(state) {
      Cookie.remove("authKey");
      Cookie.remove("localId");
      if (process.client) {
        localStorage.removeItem("authKey");
        localStorage.removeItem("localId");
      }
      state.authKey = null;
      state.userId=null
    },
    setUser(state, payload) {
      state.user = payload;
    },
    addUser(state, payload) {
      state.user.push(payload);
    },
    setUserId(state, payload) {
      state.userId = payload;
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.$axios.get("/get-user").then(response => {
        vuexContext.commit("setUser", response.data.data);
      });
    },
    signUpUser(vuexContext, payload) {
      let authLink =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
      return this.$axios
        .post(authLink + process.env.firebaseAPIKEY, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        .then(response => {
          Cookie.set("authKey", response.data.idToken);
          Cookie.set("localId", response.data.localId);
          localStorage.setItem("authKey", response.data.idToken);
          localStorage.setItem("localId", response.data.localId);
          vuexContext.commit("setAuthKey", response.data.idToken);
          vuexContext.commit("setUserId", response.data.localId);
          this.$router.push("/");
          vuexContext.dispatch("setUser", {
            ...payload,
            userId: response.data.localId
          });
        });
    },
    setUser(vuexContext, payload) {
      this.$axios.post("/save-user", payload).then(response => {
        vuexContext.commit("addUser", payload);
      });
    },

    loginUser(vuexContext, payload) {
      let authLink =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
      this.$axios
        .post(authLink + process.env.firebaseAPIKEY, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        .then(response => {
          Cookie.set("localId", response.data.localId);
          Cookie.set("authKey", response.data.idToken);
          localStorage.setItem("authKey", response.data.idToken);
          localStorage.setItem("localId", response.data.localId);
          vuexContext.commit("setAuthKey", response.data.idToken);
          this.$router.push("/");
        });
    },
    logout(vuexContext) {
      return vuexContext.commit("clearAuthKey");
    },
    initAuth(vuexContext, payload) {
      let token;
      let userId;
      if (payload) {
        if (!payload.headers.cookie) {
          return;
        }
        token = payload.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("authKey="));
        if (token) {
          token = token.split("=")[1];
        }

        userId = payload.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("localId="));
        if (userId) {
          userId = userId.split("=")[1];
        }
      } else {
        token = localStorage.getItem("authKey");
        userId = localStorage.getItem("localId");
      }
      vuexContext.commit("setAuthKey", token);
      vuexContext.commit("setUserId", userId);
    },
  },
  getters: {
    isAuthenticeted(state) {
      return state.authKey != null;
    },
    getAuthKey(state) {
      return state.authKey;
    },
    getUserId(state) {
      return state.userId;
    },
    getUser(state) {
      return state.user.find(item => {
        return item.userId == state.userId;
      });
    }
  }
};
