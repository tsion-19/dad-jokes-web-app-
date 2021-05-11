<template>
  <div>
    <div class="main">
      <div class="main-links">
        <nuxt-link to="/">Home </nuxt-link>
        <div @click="logout" v-if="loggedIn" class="logout-link">Logout</div>
        <nuxt-link color: black to="login" v-else> Login </nuxt-link>
        <nuxt-link to="secret"> Secret </nuxt-link>
         <nuxt-link to="About"> About </nuxt-link>
        <nuxt-link to="Register"> Register </nuxt-link>
      </div>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import firebase from 'firebase'
import Cookies from 'js-cookie'
export default{
  mounted(){
    this.setupFirebase()
  },
  
  data(){
    return{
      users:[],
      loggedIn: false
    }
  },
methods:{
  logout(){
    alert('test')
  
  },
  setupFirebase(){
    firebase.auth().onAuthStateChanged(user=> {
      if(user){
        console.log('logged in')
        this.loggedIn=true
        firebase
        .auth().currentUser.getIdToken(true).then(token=>{Cookies.set('access_token', token);
        
      })
      } else{
        this.loggedIn=false
        Cookies.remove('access_token')
      }

    })
  },
  logout(){
    firebase.auth().signOut().then(()=> {
      this.$router.push('/')
    })
  }
}
}
</script>
<style>
.logout-link{
  cursor:pointer;
  text-decoration:underline;
  color:crimson;
}
.main{
margin: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
 font-weight:bold;
 background-color: hsl(221, 84%, 43%);
}
.main-links{
  width: 30%;
  margin: 10px 20px;
  display: flex;
  justify-content: space-around;

}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: rgb(255, 255, 255);
  background-color: #cdd3d1;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #dae0e7;
}
* {
  padding: 0;
  margin: 0;
}
body {
  height: 200vh;
  background: #e1e9e5;
  font-family: 'Poppins', sans-serif;}
  nav {
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #aaa;
    display: flex;
    align-items: center;
    transition: all .2s ease-in-out;}
    onScroll {
      box-shadow: 0 0 10px #aaa;
      background-color: #fff;}
      ul li {
        color: #10b761;
      
      
    }
    ul {
      margin-left: 3em;
      width: 25%;
      display: flex;
      justify-content: space-between;}
      li {
        cursor: pointer;
        font-weight: 600;
        list-style-type: none;
        color: white;
      }
    

</style>
