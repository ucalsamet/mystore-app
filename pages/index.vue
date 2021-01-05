<template>
  <div>
    <Header />
    <PopularProducts :products="getProducts"/>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      return this.$store.getters.getProducts
    }
  }
};
</script>
