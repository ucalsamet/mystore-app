export default {
  state: {
    products: [],
    cart: [],
    totalPrice: 0.0
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    addProduct(state, payload) {
      state.products.push(payload);
    },
    setCart(state, payload) {
      state.cart = payload;
    },
    setTotalPrice(state, payload) {
      state.totalPrice = payload;
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.$axios.get("/get-all").then(response => {
        vuexContext.commit("setProducts", response.data.docs);
        vuexContext.commit("setCart", response.data.cart.items);
        vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
      });
    },
    addProduct(vuexContext, payload) {
      this.$axios
        .post("/save", {
          title: payload.title,
          price: payload.price,
          count: payload.count,
          description: payload.description,
          category: payload.category,
          gender: payload.gender,
          image: payload.image
        })
        .then(response => {
          let product = {
            _id: response.data.data._id,
            ...payload
          };
          vuexContext.commit("addProduct", product);
        });
    },
    addToCart(vuexContext, payload) {
      this.$axios.post("/add-to-cart", { product: payload }).then(response => {
        vuexContext.commit("setCart", response.data.cart.items);
        vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
      });
    },
    removeCart(vuexContext, payload) {
      this.$axios.post("/remove-cart", { product: payload }).then(response => {
        vuexContext.commit("setCart", response.data.cart.items);
        vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
      });
    },

    removeFullCart(vuexContext, payload) {
      this.$axios.post("/remove-fullcart", { product: payload }).then(response => {
        vuexContext.commit("setCart", response.data.cart.items);
        vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
      });
    },
    
    changeCount(vuexContext, payload) {
      this.$axios.post("/change-count", { product: payload }).then(response => {
        vuexContext.commit("setCart", response.data.cart.items);
        vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
      });
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return productId => {
        return state.products.find(products => {
          return products._id == productId;
        });
      };
    },
    getCart(state) {
      return state.cart;
    },
    getTotalPrice(state) {
      return state.totalPrice;
    },
    getLayout(state) {
      return state.layout;
    },
    getCartValue(state) {
      return state.cart.length;
    }
  }
};
