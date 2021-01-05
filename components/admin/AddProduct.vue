<template>
  <div>
    <v-card>
      <v-card-title>Add Product</v-card-title>
      <v-card-text>
        <v-text-field
          label="Product Title"
          v-model="product.title"
          :rules="[rules.required]"
          required
        ></v-text-field>
        <v-row class="mt-1">
          <v-col md="8">
            <v-select
              v-model="product.category"
              :items="items"
              item-text="state"
              label="Category"
              dense
            ></v-select>
          </v-col>
          <v-col md="4">
            <v-radio-group v-model="product.gender" row>
              <v-radio label="Men" value="men"></v-radio>
              <v-radio label="Women" value="women"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-text-field
              label="Product Price"
              v-model="product.price"
              :rules="[rules.count]"
              required
            ></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field
              label="Product Count"
              v-model="product.count"
              :rules="[rules.count]"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-textarea
          label="Description"
          v-model="product.description"
          :rules="[rules.required]"
          required
        />
        <v-text-field
          label="Product Image"
          v-model="product.image"
          :rules="[rules.required]"
          required
        ></v-text-field>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["product", "items", "rules"]
};
</script>

<style></style>
