<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>
          Popular Products <v-btn to="/store" small text color="#BC524B">View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" v-for="product in products.slice(0,3)" :key="product._id">
        <PopularProduct :product="product"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:["products"]
};
</script>

<style></style>
