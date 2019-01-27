<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="product in productCart" :key="product.id" xs12 sm4 lg4>
        <Cart :product="product"></Cart>
      </v-flex>
      <v-btn
        v-if="!productCart.length == 0"
        depressed
        class="text-uppercase"
        color="primary black--text"
        @click="gotoCheckout"
      >Procceed to checkout</v-btn>
    </v-layout>
  </v-container>
</template>



<script>
import Cart from "./Cart.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    gotoCheckout() {
      this.$router.push({
        name: "checkout",
        params: this.productCart
      });
    }
  },
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