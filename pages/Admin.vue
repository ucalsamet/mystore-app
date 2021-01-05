<template>
  <v-container>
    <v-row>
      <v-col md="8">
        <AddProduct  :product="product" :items="items" :rules="rules"/>
      </v-col>
      <v-col md="4">
        <ProductPreview :product="product" :addProduct="addProduct"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        price: "",
        count: null,
        description: "",
        category: "",
        gender: "",
        image: ""
      },
      items: [
        { state: "T-Shirts" },
        { state: "Jackets & Coats" },
        { state: "Jeans" },
        { state: "Dresses" },
        { state: "Shoes" }
      ],
      rules: {
        required: value => !!value || "Required.",
        count: value => {
          const pattern = /^\d*\.?\d*$/;
          return pattern.test(value) || "Only number.";
        }
      }
    };
  },
  methods:{
    addProduct(){
      this.$store.dispatch("addProduct",this.product)
    }
  }
};
</script>

<style></style>
