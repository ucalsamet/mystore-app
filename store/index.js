import Vuex from "vuex";
import cart from "./cart";
import products from "./products";
import users from "./users";
const createStore = () => {
  return new Vuex.Store({
    modules:{
      products:products,
      users:users,
      cart:cart
    }
  });
};

export default createStore;
