<template>
  <v-container>
    <v-row>
      <v-col sm="8" md="5" offset-md="2" class="mt-2">
        <ProductList
          @changeCount="changeCount($event)"
          @changeCountProduct="changeCountProduct($event)"
          :getCart="getCart"
          @removeCart="removeCart($event)"
        />
      </v-col>
      <v-col sm="4" md="3" order="first" order-sm="last">
        <PaymentDetails :getTotalPrice="getTotalPrice" :user="getUser" :isAuthenticeted="isAuthenticeted"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    };
  },
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
    isAuthenticeted() {
      return this.$store.getters.isAuthenticeted;
    }
  },
  methods: {
    removeCart(event) {
      this.$store.dispatch("removeCart", event);
    },
    changeCount(event) {
      this.value = event;
    },
    changeCountProduct(product) {
      product.changeCount += this.value;
      this.$store.dispatch("changeCount", product);
    }
  }
};
</script>
