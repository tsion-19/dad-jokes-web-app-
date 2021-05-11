<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
       const user=firebase.auth() .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log(user);
          this.$router.replace({ name: "secret" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  margin: 20px;
  font-size: 100%;
}

.email {
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
div {
  color: inherit;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>