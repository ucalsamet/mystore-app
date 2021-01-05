<template>
  <v-container>
    <Login :user="user" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: null
      }
    };
  }
};
</script>

<style></style>
