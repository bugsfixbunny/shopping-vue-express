<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Registration Form</h2>
        <br>
        <span class="error" v-if="showError" v-for="validation_message in validation_messages">
          {{ validation_message }}
          <br>
        </span>
        <br>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
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
          {{ statusAuth }}
          <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <form @submit.prevent="onRegister">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                v-validate="'required|email'"
                name="email"
                label="Email"
                id="email"
                v-model="registration.email"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                v-validate="'required'"
                type="password"
                name="password"
                label="Password"
                id="password"
                v-model="registration.password"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                v-validate="'required'"
                name="surname"
                label="Surname"
                id="surname"
                v-model="registration.surname"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                v-validate="'required'"
                name="name"
                label="Name"
                id="name"
                v-model="registration.name"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary black--text" type="submit">Register</v-btn>
            </v-flex>
          </v-layout>
        </form>
        <v-flex xs12 sm6 offset-sm3></v-flex>
      </v-flex>
    </v-layout>
  </v-container>
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
      registration: {
        surname: "",
        name: "",
        password: "",
        email: ""
      },
      showError: false
    };
  },
  computed: {
    ...mapGetters({
      statusAuth: "auth/statusAuth",
      validation_messages: "auth/validation_messages"
    })
  },

  methods: {
    redirectToLogin() {
      setTimeout(() => {
        if (this.validation_messages == "") {
          this.$router.push("/login");
        }
      }, 600);
    },

    async onRegister() {
      try {
        await this.$store.dispatch("auth/register", this.registration);
        this.snackbar = true;
        this.showError = true;
        this.redirectToLogin();
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
