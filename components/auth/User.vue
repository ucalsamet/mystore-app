<template>
  <v-card>
    <v-card-title>{{ user.name }} {{ user.lastName }}</v-card-title>
    <v-card-text>
      <p>
        E-mail: <strong color="primary">{{ user.email }}</strong>
      </p>
    </v-card-text>

   
  </v-card>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style></style>
