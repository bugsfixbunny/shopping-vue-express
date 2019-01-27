<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="product in productCart" :key="product.id" xs12 sm4 lg4>
        <Cart :product="product"></Cart>
      </v-flex>
      <v-flex v-if="productCart" text-xs-right>
        <v-btn>
          <router-link to="checkout">Procceed to checkout</router-link>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import Cart from "./Cart.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  created() {},

  components: {
    Cart
  },
  computed: {
    ...mapGetters({
      productCart: "cart/productCart"
    })
  }
};
</script>