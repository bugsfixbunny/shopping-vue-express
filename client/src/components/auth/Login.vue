<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h2>Login</h2>
                <span class="error" v-if="showError" v-for="validation_message in validation_messages">{{ validation_message }}<br></span><br>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onLogin">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    v-validate="'required'"
                                    name="email"
                                    label="Email"
                                    id="email"
                                    v-model="user.email"
                                    required></v-text-field>
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
                                    v-model="user.password"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn
                                    class="primary"
                                    type="submit">Login</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
    data() {
        return {
            user : {
                email:'',
                password:''
            },
            showError : false

        }
    },
        computed : {
                ...mapGetters({
                    validation_messages: 'validation_messages'
                })
        },

        methods: {
            async onLogin() {
                try{
                    await this.$store.dispatch('login', this.user)
                    this.showError = true
                    if(this.validation_messages == ''){
                        this.$router.push({name:'home'})
                    }
                }
                catch(e) {
                    console.log(e)
                }
            }
        }

    }
</script>
