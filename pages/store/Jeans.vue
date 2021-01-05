<template>
  <v-container>
    <v-row>
      <v-col md="3">
        <Sidebar
          @priceFilter="setPriceFilter($event)"
          @genderFilter="setGenderFilter($event)"
        />
      </v-col>
      <v-col md="9">
        <Products :getProducts="getProducts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      getProducts: [],
      priceFilter: 0,
      genderFilter: 0
    };
  },
  methods: {
    setPriceFilter(event) {
      this.priceFilter = event;
    },
    setGenderFilter(event) {
      this.genderFilter = event;
    }
  },
  watch: {
    priceFilter(value) {
      let products = this.$store.getters.getProducts;
      if (value == 0) {
        this.getProducts = [];
        for (let key in products) {
          if (products[key].category == "Jeans") {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      } else if (value == 1) {
        this.getProducts = [];
        for (let key in products) {
          if (products[key].price <= 25 && products[key].category == "Jeans") {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      } else if (value == 2) {
        this.getProducts = [];
        for (let key in products) {
          if (
            products[key].price > 25 &&
            products[key].price <= 100 &&
            products[key].category == "Jeans"
          ) {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      } else if (value == 3) {
        this.getProducts = [];
        for (let key in products) {
          if (
            products[key].price > 100 &&
            products[key].price <= 500 &&
            products[key].category == "Jeans"
          ) {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      } else if (value == 4) {
        this.getProducts = [];
        for (let key in products) {
          if (products[key].price > 500 && products[key].category == "Jeans") {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      }
    },
    genderFilter(value) {
      let products = this.$store.getters.getProducts;
      if (value == 0) {
        this.getProducts = [];
        for (let key in products) {
          if (products[key].category == "Jeans") {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      } else if (value == 1) {
        this.getProducts = [];
        for (let key in products) {
          if (
            products[key].gender == "men" &&
            products[key].category == "Jeans"
          ) {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      } else if (value == 2) {
        this.getProducts = [];
        for (let key in products) {
          if (
            products[key].gender == "women" &&
            products[key].category == "Jeans"
          ) {
            this.getProducts.push({
              _id: products[key]._id,
              title: products[key].title,
              price: products[key].price,
              description: products[key].description,
              image: products[key].image,
              category: products[key].category,
              count: products[key].count,
              gender: products[key].gender
            });
          }
        }
      }
    }
  },
  created() {
    let jeansProducts = this.$store.getters.getProducts;
    for (let key in jeansProducts) {
      if (jeansProducts[key].category == "Jeans") {
        this.getProducts.push({
          _id: jeansProducts[key]._id,
          title: jeansProducts[key].title,
          price: jeansProducts[key].price,
          description: jeansProducts[key].description,
          image: jeansProducts[key].image,
          category: jeansProducts[key].category,
          count: jeansProducts[key].count,
          gender: jeansProducts[key].gender
        });
      }
    }
  }
};
</script>

<style></style>
