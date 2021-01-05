<template>
  <v-card>
    <v-img
      height="200px"
      :src="product.image"
    ></v-img>
    <v-card-title>{{product.title}}</v-card-title>
    <v-card-subtitle>{{product.category}} | {{product.gender}}</v-card-subtitle>
    <v-card-text>
      <p>Price: <strong class="error--text"> {{product.price}} ₺</strong></p>
    </v-card-text>
    <v-card-actions>
      <v-btn :to="'/store/'+product._id" outlined>
        Go to Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:["product"]
};
</script>

