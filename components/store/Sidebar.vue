<template>
  <div>
    <v-expansion-panels inset>
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-chevron-down">
          Price
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="priceFilter" :mandatory="true">
            <v-radio
              v-for="(price, i) in prices"
              :key="i"
              :label="price"
              :value="i"
            />
          </v-radio-group>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('priceFilter', priceFilter)" color="accent"
            ><v-icon small left>mdi-filter-plus-outline</v-icon> Filter</v-btn
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-chevron-down">
          Gender
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="genderFilter" :mandatory="true">
            <v-radio
              v-for="(gender, i) in gender"
              :key="i"
              :label="gender"
              :value="i"
            />
          </v-radio-group>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('genderFilter', genderFilter)" color="accent"
            ><v-icon small left>mdi-filter-plus-outline</v-icon> Filter</v-btn
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [
        "Any",
        "Under 25 ₺",
        "25 ₺ to 100 ₺",
        "100 ₺ to 500 ₺",
        "Over 500 ₺"
      ],
      gender: ["Any", "Men", "Women"],
      priceFilter: 0,
      genderFilter: 0,
      checkbox: true
    };
  }
};
</script>
