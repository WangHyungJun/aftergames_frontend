<template>
  <section id="main">
    <div class="container">
      <div class="loginbox clearfix">
        <div class="ID">
          <span>EMAIL</span><input type="text" v-model="email" />
        </div>
        <div class="PW">
          <span>PW</span><input type="password" v-model="password" />
        </div>
        <div class="buttons clearfix">
          <a class="loginbutton" href="#" v-on:click="login">로그인</a>
          <div class="small_button">
            <a href="#">비밀번호 찾기 | </a>
            <router-link href="#" to="/signup" exact>회원가입</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "loginmain",
  data() {
    return {
      url: "http://127.0.0.1:8000/aftergamesapi/login",
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      this.$http
        .post("http://127.0.0.1:8000/aftergamesapi/login", {
          email: this.email,
          password: this.password
        })
        .catch(function(err) {
          return alert(err.body["error"]);
        })
        .then(function(data) {
          if (data.body["error"] !== undefined) {
            return alert(data.body["error"]);
          } else {
            const token = data.body["token"];
            localStorage.setItem("token", token);
            const username = data.body["username"];
            localStorage.setItem("nickname", username);
            this.$router.push({name: 'home'});
            this.$forceUpdate();
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/loginmain";
</style>
