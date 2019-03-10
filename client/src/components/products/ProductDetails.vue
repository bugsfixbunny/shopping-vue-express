<template>
  <v-card>
    <v-container>
      <v-layout>
        <v-btn class="btn btn-info pull-left" @click="$router.go(-1)">Back</v-btn>
        <v-flex style="margin-right:30px" sm3 class="btn btn-info pull-left">
          <v-img :src="product.img" class="img-responsive"></v-img>
        </v-flex>
        <v-flex class="btn btn-info pull-right" style="margin-top:50px">
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
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      y: "top",
      x: null,
      mode: "",
      timeout: 4000,
      quantity: 0,
      tit: "",
      id: "",
      zeroQuantity: false,
      errorQuantity: "Please add an amount"
    };
  },
  created() {},
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch("products/getProduct", this.$route.params.id);
  },
  computed: {
    cart_amount() {
      return this.$store.getters.cart_amount;
    },
    ...mapState({
      product: state => state.products.product
    }),
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