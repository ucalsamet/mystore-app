<template>
  <v-container>
    <Signup :rules="rules" :user="user" />
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "",
      lastName: "",
      email: undefined,
      password: undefined
    },
    rules: {
      required: value => !!value || "Required.",

      email: v => !!(v || "").match(/@/) || "Please enter a valid email",
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  }),
};
</script>
