<template>
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
    <v-flex sm2>
      <v-text-field
        type="number"
        placeholder="Quantity"
        v-model="quantity"
        :error-messages="zeroQuantity ? errorQuantity : ''"
        :class="{danger: insufficientQuantity}"
      ></v-text-field>
    </v-flex>
    <v-btn
      depressed
      class="text-uppercase"
      color="primary black--text"
      @click="buyProduct"
    >Add to Cart</v-btn>
  </v-card>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
export default {
  props: ["product"],
  data() {
    return {
      snackbar: false,
      quantity: 0,
      zeroQuantity: false,
      errorQuantity: "Please add an amount"
    };
  },

  computed: {
    cart_amount() {
      return this.$store.getters.cart_amount;
    },
    insufficientQuantity() {
      return this.quantity > this.cart_amount;
    }
  },
  methods: {
    buyProduct() {
      if (this.quantity > 0) {
        this.zeroQuantity = false;
        const order = {
          productId: this.product.id,
          productPrice: this.product.price,
          quantity: parseInt(this.quantity)
        };
        console.log(order);
        this.$store.dispatch("cart/buyProduct", order);
        this.quantity = 0;
      } else {
        this.zeroQuantity = true;
      }
    }
  }
};
</script>