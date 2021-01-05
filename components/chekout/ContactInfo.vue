<template>
  <v-stepper-content step="1">
    <v-text-field
      v-model="data.name"
      :rules="[rules.required]"
      label="Name"
      required
    />

    <v-text-field
      v-model="data.email"
      :rules="[rules.required, rules.emailRules]"
      label="E-mail"
      required
    />

    <v-text-field
      v-model="data.phone"
      label="Phone Number"
      :rules="[rules.required, rules.phone]"
      required
    />

    <v-btn color="primary" @click="next">Continue</v-btn>
    <v-btn text @click="$router.replace('/cart')">Cancel</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  data(){
    return{
      userFullName:""
    }
  },
  props: ["data", "rules", "next","user"],
  created(){
    this.data.name = this.user.name.concat(" ",this.user.lastName)
    this.data.email= this.user.email
  }
};
</script>
