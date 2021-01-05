<template>
  <div>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
export default {
    data(){
        return{
             fixed: false
        }
    }
};
</script>

<style></style>
