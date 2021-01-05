<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1" />
            <v-divider />
            <v-stepper-step step="2" :complete="step > 2" />
            <v-divider />
            <v-stepper-step step="3" />
          </v-stepper-header>
          <v-stepper-items>
            <ContactInfo
              :data="data"
              :rules="rules"
              :next="next"
              :user="getUser"
            />
            <ShippingInfo
              :data="data"
              :rules="rules"
              :next="next"
              :previous="previous"
            />
            <Review
              :data="data"
              :previous="previous"
              :submitOrder="submitOrder"
            />
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      checkoutForm: false,
      data: {
        email: "",
        name: "",
        phone: "",
        street: "",
        state: "",
        zip: ""
      },
      rules: {
        required: value => !!value || "Required.",
        zip: value => value.length == 5 || "Must be five characters.",
        emailRules: value => {
          const pattern = /.+@.+\..+/;
          return pattern.test(value) || "E-mail must be valid";
        },
        phone: value => {
          const pattern = /\d{10}/;
          return pattern.test(value) || "Invalid phone number.";
        }
      }
    };
  },
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },
    getUser() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    next() {
      this.step += 1;
    },
    previous() {
      this.step -= 1;
    },
    submitOrder() {
      this.$store.dispatch("removeFullCart");

      const carts = [];

      for (let key in this.getCart) {
        carts.push({
          title: this.getCart[key].title,
          countCart: this.getCart[key].countCart,
          image: this.getCart[key].image,
          category: this.getCart[key].category,
          price: this.getCart[key].price,
          gender:this.getCart[key].gender
        });
      }

      let check = {
        carts: carts,
        userId: this.getUser.userId,
        totalPrice: this.getTotalPrice
      };

      this.$store.dispatch("addUserCheck", check);

      this.$router.push("/thankyou");
    }
  }
};
</script>

<style></style>
