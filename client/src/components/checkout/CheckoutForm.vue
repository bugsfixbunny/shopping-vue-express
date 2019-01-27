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
    <v-form ref="form" @submit.prevent="sendOrder()" lazy-validation>
      <v-container>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field v-model="checkout.name" :rules="Rules" required label="Name"></v-text-field>

            <v-text-field v-model="checkout.surname" :rules="Rules" required label="Surname"></v-text-field>

            <v-text-field v-model="checkout.email" :rules="emailRules" required label="Email"></v-text-field>

            <v-text-field
              v-model="checkout.mobile"
              :rules="Rules"
              v-validate="'required'"
              label="Mobile"
              required
            ></v-text-field>

            <v-text-field v-model="checkout.address" :rules="Rules" required label="Address"></v-text-field>
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
      checkout: { name: "", surname: "", email: "", mobile: "", address: "" },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      Rules: [v => !!v || "Field is required"]
    };
  },
  computed: {
    ...mapGetters({
      statusOrder: "checkout/statusOrder",
      validation_messages: "checkout/validation_messages"
    })
  },
  methods: {
    sendOrder() {
      const items = this.$route.params;
      items.map(item => {
        let order = { ProductId: item.id, quantity: item.quantity };
        order.name = this.checkout.name;
        order.surname = this.checkout.surname;
        order.email = this.checkout.email;
        order.mobile = this.checkout.mobile;
        order.address = this.checkout.address;
        if (this.$refs.form.validate()) {
          this.snackbar = true;
          this.$store.dispatch("checkout/sendOrder", order);
          this.$refs.form.reset();
        }
        this.showError = true;
      });
    }
  }
};
</script>

