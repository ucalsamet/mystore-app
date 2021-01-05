<template>
  <v-card
    :class="
      $vuetify.breakpoint.xs
        ? 'd-flex flex-column mb-6'
        : 'd-flex flex-row mb-6'
    "
  >
    <v-img :src="product.image" width="400px" height="400px" />
    <v-card class="pa-2" outlined tile>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-subtitle
        >{{ product.category }} | {{ product.gender }}</v-card-subtitle
      >
      <v-card-text>
        <p>
          Price: <strong class="primary--text">{{ product.price }}</strong>
        </p>
        <p>
          Description:
          <strong class="primary--text">{{ product.description }}</strong>
        </p>
        <v-row>
          <v-col md="6">
            <v-text-field
              readonly
              solo
              v-model="countCart"
              :rules="[rules.required, rules.count]"
              required
            >
              <v-icon
                style="cursor:pointer"
                @click.native="
                  if (countCart < product.count) {
                    countCart++;
                  }
                "
                slot="append"
                color="green"
              >
                mdi-plus
              </v-icon>
              <v-icon
                style="cursor:pointer"
                class="ml-2"
                @click.native="
                  if (countCart > 1) {
                    countCart--;
                  }
                "
                slot="prepend"
                color="red"
              >
                mdi-minus
              </v-icon>
            </v-text-field>
          </v-col>
        </v-row>
        
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn @click="$emit('addToCart', countCart)" color="primary"
            >Add to Cart</v-btn
          >
        </v-card-actions>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      countCart: 1
    };
  },
  props: ["product", "rules", "addToCart"]
};
</script>
