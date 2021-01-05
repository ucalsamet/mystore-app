<template>
  <v-card elevation="15" class="mx-auto" style="max-width: 500px;">
    <v-card-title>SignUp</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="user.name"
        :rules="[rules.required]"
        label="Name"
      />
      <v-text-field
        v-model="user.lastName"
        :rules="[rules.required]"
        label="Last Name"
      />
      <v-text-field v-model="user.email" :rules="[rules.email]" label="Email" />
      <v-text-field
        v-model="user.password"
        :rules="[rules.length(6)]"
        label="Password"
        type="password"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn text @click="Clear">
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="accent" @click="register"
        ><v-icon small left>mdi-account-plus</v-icon> Register</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["rules", "user"],
  methods: {
    Clear() {
      this.user.name = "";
      this.user.lastName = "";
      this.user.email = "";
      this.user.password = "";
    },
    register() {
      this.$store.dispatch("signUpUser", {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        lastName: this.user.lastName
      });
      this.$router.push("/store");
    }
  }
};
</script>

<style></style>
