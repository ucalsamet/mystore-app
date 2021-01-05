<template>
    <v-card class="d-flex flex-column">
      <v-card-title>Product Preview</v-card-title>
      <v-card class="d-flex flex-column">
        <v-img height="200px" width="100%" :src="product.image"></v-img>
        <v-card class="pa-2">
          <v-card-title>Title: {{ product.title }}</v-card-title>
          <v-card-text>
            <p>
              Category:
              <strong class="red--text">{{ product.category }}</strong>
            </p>
            <p>
              Gender: <strong class="red--text">{{ product.gender }}</strong>
            </p>
            <p>
              Count: <strong class="red--text">{{ product.count }}</strong>
            </p>
            <p>
              Price: <strong class="red--text">{{ product.price }} ₺</strong>
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="addProduct" :disabled="!disabled" outlined color="success">
              <v-icon small left>mdi-plus</v-icon>
              Add to Product</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-card>
    </v-card>
</template>

<script>
export default {
  props: ["product","addProduct"],
  computed: {
    disabled() {
      return (
        this.product.title &&
        this.product.category &&
        this.product.count &&
        this.product.price &&
        this.product.gender &&
        this.product.description&&
        this.product.image
      );
    }
  }
};
</script>
