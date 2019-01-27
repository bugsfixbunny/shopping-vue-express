<template>
  <div>
    <Navbar/>
    <router-view md6></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vuetify from "vuetify";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

