<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>
          Products
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" md="4" v-for="product in getProducts" :key="product._id">
       <Product :product="product"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:["getProducts"]
};
</script>
