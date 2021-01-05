<template>
  <v-card class="text-center">
    <v-overlay :value="overlay" class="flex-column">
      <p>Processing order...</p>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-container v-if="!overlay">
      <p class="display-1">Thank you for purchase! It will be shipped soon.</p> 
    </v-container>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      overlay:false
    }
  },
  mounted(){
    setTimeout(()=> {
      this.overlay = false
    },3000)
  },
  beforeMount(){
    this.overlay=true
  }
}
</script>