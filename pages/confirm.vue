<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{this.user}}</p>
      <p>{{ログインしたアカウントのEmail}}</p>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  created() {
    const user = firebase.auth().currentUser
    if (user) {
      // ログイン済み
      this.user = user
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