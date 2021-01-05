<template>
  <div>
    <v-card v-if="isAuthenticeted">
      <v-card-title>Payment Details</v-card-title>

      <v-card-text>
        <v-text-field label="name" v-model="userFullname" />
        <v-text-field label="email" v-model="user.email" />
        <p>Total: {{ getTotalPrice }} ₺</p>
        <v-btn :disabled="getTotalPrice == 0" color="primary" to="/checkout">Checkout</v-btn>
      </v-card-text>
    </v-card>

    <v-card v-else>
      <v-card-title>Payment Details</v-card-title>

      <v-card-text>
        <p>Total: {{ getTotalPrice }} ₺</p>
        <v-btn color="primary" to="/login">Login</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userFullname: ""
    };
  },
  props: ["getTotalPrice", "user", "isAuthenticeted"],
  created() {
    if (this.isAuthenticeted) {
      this.userFullname = this.user.name.concat(" " + this.user.lastName);
    }
  }
};
</script>

<style></style>
