<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>
          My Orders
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" md="4" v-for="user in userCheck.cart" :key="user._id">
        <UserOrder :user="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["userCheck"]
};
</script>

<style></style>
