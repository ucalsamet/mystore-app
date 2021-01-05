<template>
  <v-card>
          <v-img height="200px" :src="user.image"></v-img>
          <v-card-title>{{ user.title }}</v-card-title>
          <v-card-subtitle
            >{{user.category}} | {{user.gender}}</v-card-subtitle
          >
          <v-card-text>
            <p>
              Price:
              <strong class="primary--text"> {{user.price}} ₺</strong>
            </p>
             <p>
              Count:
              <strong class="primary--text"> {{user.countCart}} ₺</strong>
            </p>
          </v-card-text>
        </v-card>
</template>

<script>
export default {
 props:["user"]
}
</script>

<style>

</style>