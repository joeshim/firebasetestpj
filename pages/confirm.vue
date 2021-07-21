<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{displayName}}</p>
      <p>{{email}}</p>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  created() {
      const user = firebase.auth().currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        this.displayName = user.displayName;
        this.email = user.email;
        this.photoURL = user.photoURL;
        this.emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
      } else {
      // 未ログイン。ログイン画面へ遷移する
      this.$router.push('/')
      return
    }
  }
}
</script>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>