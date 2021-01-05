<template>
  <v-container>
    <v-row class="justify-center align-center">
      <v-col md="9">
        <ProductDetails
          :product="getProduct"
          @addToCart="addToCart($event)"
          :rules="rules"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: value => !!value || "Required.",
        count: value => {
          const pattern = /^\d*\.?\d*$/;
          return pattern.test(value) || "Only number.";
        }
      }
    };
  },
  methods: {
    addToCart(countCart) {
      if (countCart > 0) {
        this.$store.dispatch("addToCart", {
          ...this.getProduct,
          _id: this.$route.params.productId,
          countCart: countCart
        });
      }
    }
  },
  computed: {
    getProduct() {
      return this.$store.getters.getProduct(this.$route.params.productId);
    }
  }
};
</script>
