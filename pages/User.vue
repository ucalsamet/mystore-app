<template>
  <v-container>
    <v-row>
      <v-col md="3">
        <User :user="getUser" />
      </v-col>
      <v-col md="9" v-if="getUserCheck">
        <UserCheck :userCheck="getUserCheck" />
      </v-col>
      <v-col md="9" v-else>
        <v-container>
          <v-card  class="pa-3"
            ><v-cart-title ><h2>Shop now. Hurry up!!</h2></v-cart-title>
            <v-card-actions
              ><v-spacer></v-spacer>
              <v-btn to="/store" class="primary"
                ><v-icon left>mdi-storefront</v-icon> Go to Store</v-btn
              ></v-card-actions
            >
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getUserCheck() {
      return this.$store.getters.getUserCheck.find(item => {
        return item.userId == this.getUser.userId;
      });
    }
  }
};
</script>

<style></style>
