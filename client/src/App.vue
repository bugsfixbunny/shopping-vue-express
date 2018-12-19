<template>
  <v-app id="inspire">
    <v-navigation-drawer absolute permanent md4>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application {{ role_id }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in notLoggedInMenuItems" v-if="!isLoggedIn" :key="item.title">
          <v-list-tile-action><v-icon>{{ item.icon }}</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile :to="item.link" :click="item.click">{{ item.title }}</v-list-tile></v-list-tile-content>
        </v-list-tile>

        <!--<v-list-tile v-for="item in loggedinMenuItems" v-if="isLoggedIn" :key="item.title">-->
          <!--<v-list-tile-action><v-icon>{{ item.icon }}</v-icon></v-list-tile-action>-->
          <!--<v-list-tile-content><v-list-tile :to="item.link" :click="item.click">{{ item.title }}</v-list-tile></v-list-tile-content>-->
        <!--</v-list-tile>-->

        <v-list-tile v-if="isLoggedIn">
          <v-list-tile-action><v-icon>lock_open</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile to="/logout"  @click="logout()">Logout</v-list-tile></v-list-tile-content>
        </v-list-tile>

      </v-list>


    </v-navigation-drawer>
    <router-view md6></router-view>
  </v-app>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Vuetify from 'vuetify'
    export default {
        data() {
            return {

                sideNav:false,
                notLoggedInMenuItems:[
                    {icon: 'person', title: 'Login', link: '/login', click:''},
                    {icon: 'face', title: 'Sign up', link: '/register', click:''},
                ]
            }
        },

        computed: {
            ...mapGetters({
                isLoggedIn : 'isLoggedIn',
                token: 'token',
                role_id: 'role_id'

            })
        },

        methods: {
            logout() {
                this.$store.dispatch('logout')
                this.$router.push('/')
            }
        }

    }
</script>

