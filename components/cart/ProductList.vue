<template>
  <div>
    <v-row v-for="product in getCart" :key="product._id">
      <CartProduct  :product="product" :rules="rules"   @removeCart="$emit('removeCart',$event)"   @changeCount="$emit('changeCount',$event)" @changeCountProduct="$emit('changeCountProduct',$event)" />
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["getCart"],
  data() {
    return {
      rules: {
        required: value => !!value || "Required.",
        count: value => {
          const pattern = /^\d*\.?\d*$/;
          return pattern.test(value) || "Only number.";
        }
      }
    };
  }
};
</script>
 
      
      
      