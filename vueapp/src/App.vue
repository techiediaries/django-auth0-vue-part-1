<template>
<div>
          <button
            class="btn btn-primary btn-margin"
            v-if="!authenticated"
            @click="login()">
              Log In
          </button>

          <button
            class="btn btn-primary btn-margin"
            v-if="authenticated"
            @click="private()">
              Call Private
          </button>



          <button
            class="btn btn-primary btn-margin"
            v-if="authenticated"
            @click="logout()">
              Log Out
          </button>
          {{message}}
          <br>


</div>  
</template>

<script>
/* eslint-disable */

import AuthService from './auth/AuthService'
import * as Auth0 from 'auth0-web';
import axios from 'axios'
const API_URL = 'http://localhost:8000'

const auth = new AuthService()

//const { login, logout, authenticated, authNotifier , handleAuthentication } = auth

export default {
  name: 'app',
  data () {

    Auth0.configure({
        domain: 'techiediaries.auth0.com',
        audience: 'https://djangovuedemo.techiediaries.com',
        clientID: 'TcHzYEyEzpJ0gYtYVyavXXjidRjQ7Yqw',
        redirectUri: 'http://localhost:8080',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    Auth0.handleAuthCallback();
    //this.handleAuthentication();
    this.authenticated = false;
    Auth0.subscribe((authState)=>{
      console.log("auth state: " + authState);
      this.authenticated = authState;
      if(authState) Auth0.getProfile();
    });
    /*auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })*/

    return {
      authenticated: false,
      message:''
    }
  },
  methods: {
    login(){
      Auth0.signIn();
      //auth.login();
    },
    handleAuthentication(){
      Auth0.handleAuthCallback();
      //auth.handleAuthentication();
    },
    logout(){
      Auth0.signOut();
      //auth.logout();
    },
    private(){
   
      var token = localStorage.getItem('access_token')
      console.log("Calling private endpoint: " + token );
      const url = `${API_URL}/api/private/`;
      //return axios.get(url, { headers: { Authorization: `Bearer ${AuthService.getAuthToken()}` }}).then( (response) => { console.log(response.data); this.message = response.data || '';});
      return axios.get(url, { headers: { Authorization: `Bearer ${token}` }}).then( (response) => { console.log(response.data); this.message = response.data || '';});
    }
  }
}
</script>

<style>
@import './assets/bootstrap.min.css';
body {
  min-height: 75rem;
  padding-top: 4.5rem;
}
.nav-item{
  padding:1px;
  margin-left: 5px;
}
</style>
