<template>
  <div>
    <v-app-bar fixed app class="accent">
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
        <v-menu offset-y class="hidden-sm-and-up"> 
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="BC524B"
          dark
          v-bind="attrs"
          v-on="on"
          class="mr-4"
        >
          Categories
        </v-btn>
      </template>
      <v-list>
        <v-list-item
           v-for="(item, i) in items" :key="i"
           link :to="item.path"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      <v-toolbar-items class="hidden-xs-only"  v-for="(item, i) in items" :key="i">
        <v-btn small color="#BC524B" link :to="item.path" class="mr-1">{{
          item.title
        }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app permanent expand-on-hover>
      <v-list nav dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Welcome</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/store">
          <v-list-item-icon>
            <v-icon>mdi-store</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Store</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cart">
          <v-list-item-icon>
            <v-badge
              :content="getValue"
              :value="getValue > 0 ? true : false"
              color="red"
              small
              overlap
            >
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-list-item-icon>
          <v-list-item-title>Cart</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="!isAuthenticeted" link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="!isAuthenticeted" link to="/register">
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>SignUp</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isAuthenticeted" link to="/user">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>User</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/admin">
          <v-list-item-icon>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Add Product</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-if="isAuthenticeted" v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">
            <v-icon small left>mdi-logout</v-icon> Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "MyStore",
      items: [
        { title: "T-Shirt", path: "/store/tshirt" },
        { title: "Jeans", path: "/store/jeans" },
        { title: "Jackets & Coats", path: "/store/jackets" },
        { title: "Dresses", path: "/store/dresses" },
        { title: "Shoes", path: "/store/shoes" }
      ]
    };
  },
  computed: {
    getValue() {
      return this.$store.getters.getCartValue;
    },
    isAuthenticeted() {
      return this.$store.getters.isAuthenticeted;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>
