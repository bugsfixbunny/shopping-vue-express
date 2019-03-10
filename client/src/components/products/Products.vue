<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="product in allProducts" :key="product.id" xs12 sm4 lg4>
        <Product :product="product"></Product>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import Product from "./Product.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      y: "top",
      x: null,
      mode: "",
      timeout: 4000,
      snackbar: false
    };
  },
  created() {
    this.$store.dispatch("products/getProducts");
  },

  components: {
    Product
  },
  computed: {
    ...mapState({
      allProducts: state => state.products.allProducts
    })
  }
};
</script>