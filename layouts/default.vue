<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  middleware: ["session-control"],
  
};
</script>
