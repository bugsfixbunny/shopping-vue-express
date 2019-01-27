<template>
  <v-toolbar>
    <v-tabs centered dark color="primary">
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <template v-if="!isLoggedIn">
        <v-tab :to="{ name: 'register' }">Register</v-tab>

        <v-tab :to="{ name: 'login' }">Login</v-tab>
      </template>

      <template v-if="isLoggedIn">
        <v-tab :to="{ name: 'products' }">Products</v-tab>
        <v-tab :to="{ name: 'cartList' }">Cart</v-tab>
        <div>
          <v-flex></v-flex>
        </div>
        <v-tab>
          <v-flex>{{ userEmail }}</v-flex>
        </v-tab>
        <v-tab>
          <v-btn icon @click="logout">
            <v-flex>
              <v-icon>power_settings_new</v-icon>
            </v-flex>
          </v-btn>
        </v-tab>
      </template>
    </v-tabs>
  </v-toolbar>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      userEmail: "auth/userEmail"
    })
  },

  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    }
  }
};
</script>

