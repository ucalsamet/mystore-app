<template>
  <v-card class="d-flex flex-row mb-6">
    <v-img :src="product.image" width="200" height="200px" />

    <v-card class="" outlined tile>
      <v-card-title
        >{{ product.title }}

        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('removeCart', product)">
          <v-icon color="error">mdi-trash-can-outline</v-icon></v-btn
        >
      </v-card-title>
      <v-card-subtitle>{{ product.price }}</v-card-subtitle>
      <v-card-text>
        <v-text-field
          readonly
          solo
          v-model="product.countCart"
          :rules="[rules.required, rules.count]"
          required
        >
          <v-icon
            style="cursor:pointer"
            @click.native="changeCount(1)"
            slot="append"
            color="green"
          >
            mdi-plus
          </v-icon>
          <v-icon
            style="cursor:pointer"
            class="ml-2"
            @click.native="changeCount(-1)"
            slot="prepend"
            color="red"
          >
            mdi-minus
          </v-icon>
        </v-text-field>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: ["product", "rules"],
  methods: {
    changeCount(value) {
      if (value == -1 && this.product.countCart == 1) {
        this.$store.dispatch("removeCart", this.product);
      } else {
        this.product.countCart += value;
        setTimeout(() => {
          this.$emit("changeCountValue", value);
          this.$emit("changeCountProduct", this.product);
        }, 1000);
      }
    }
  }
};
</script>
