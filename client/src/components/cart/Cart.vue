<template>
  <v-layout>
    <v-card :elevation="1">
      <div class="text-xs-center">
        <router-link :to="{ name: 'productDetails', params: { id: this.product.id } }">
          <img
            :src="product.img"
            class="img-responsive"
            style="height:230px;max-width:230px;max-height:300px;"
          >
        </router-link>
      </div>
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ product.name }}
          <small>(Price: {{ product.price }})</small>
        </h3>
      </div>
      <br>
      <v-flex sm4>Qty {{ product.quantity }}</v-flex>
      <v-flex sm4>
        <v-text-field
          type="number"
          placeholder="Quantity"
          v-model="quantity"
          :class="{danger: insufficientQuantity}"
        ></v-text-field>
      </v-flex>
      <v-btn
        depressed
        class="text-uppercase"
        color="primary black--text"
        @click="removeProduct()"
      >Remove from Cart</v-btn>
    </v-card>
  </v-layout>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapState({
      cart_amount: state => state.cart.cart_amount
    }),
    insufficientQuantity() {
      return this.quantity > this.cart_amount;
    }
  },
  methods: {
    removeProduct() {
      const order = {
        productId: this.product.id,
        productPrice: this.product.price,
        quantity: this.quantity
      };
      console.log(order);
      this.$store.dispatch("cart/removeProduct", order);
      this.quantity = 0;
    }
  }
};
</script>