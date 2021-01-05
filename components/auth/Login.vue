<template>
  <v-card elevation="15" class="mx-auto" style="max-width: 500px;">
    <v-card-title>SignUp</v-card-title>
    <v-card-text>
      <v-text-field v-model="user.email"  label="Email" />
      <v-text-field
        v-model="user.password"
        label="Password"
        type="password"
      />
    </v-card-text>
    
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn  color="accent" @click="login"><v-icon small left>mdi-login-variant </v-icon> Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [ "user"],
  methods:{
    login(){
      this.$store.dispatch("loginUser",{email:this.user.email,password:this.user.password})
    }
  }
};
</script>

<style></style>
