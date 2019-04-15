<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 offset-xs8>
        <v-btn
          v-if="!productCart.length == 0"
          depressed
          class="text-uppercase"
          color="primary black--text"
          @click="gotoCheckout"
        >Procceed to checkout</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="product in productCart" :key="product.id" xs12 sm4 lg4>
        <Cart :product="product"></Cart>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import Cart from "./Cart.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  methods: {
    gotoCheckout() {
      if (!this.token) {
        this.$router.push({
          name: "login"
        });
      } else {
        this.$router.push({
          name: "checkout",
          params: this.productCart
        });
      }
    }
  },
  components: {
    Cart
  },
  computed: {
    ...mapGetters({
      productCart: "cart/productCart",
      token: "auth/token"
    })
  }
};
</script>