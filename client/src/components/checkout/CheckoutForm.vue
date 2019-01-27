<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Checkout Form</v-toolbar-title>
    </v-toolbar>
    <span class="error" v-if="showError" v-for="validation_message in validation_messages">
      {{ validation_message }}
      <br>
    </span>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ statusOrder }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-form @submit.prevent="sendOrder()">
      <v-container>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field v-model="checkout.name" label="Name" required></v-text-field>

            <v-text-field v-model="checkout.surname" label="Surname" required></v-text-field>

            <v-text-field v-model="checkout.email" label="Email" required></v-text-field>

            <v-text-field v-model="checkout.mobile" label="Mobile" required></v-text-field>

            <v-text-field v-model="checkout.address" label="Address" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

      <v-card-actions class="pb-3 justify-center">
        <v-btn color="success black--text" type="submit">Submit</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      y: "top",
      x: null,
      mode: "",
      timeout: 4000,
      snackbar: false,
      showError: false,
      checkout: { name: "", surname: "", email: "", mobile: "", address: "" }
    };
  },
  created() {
    console.log(this.$route.params);
  },
  computed: {
    ...mapGetters({
      statusOrder: "checkout/statusOrder",
      validation_messages: "checkout/validation_messages"
    })
  },
  methods: {
    sendOrder() {
      console.log(this.$route.params);
      const order = this.$route.params;
      this.$store.dispatch("checkout/sendOrder", order);
      this.quantity = 0;
    }
  }
};
</script>

