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
          <a>아이디 찾기</a>
          <a>비밀번호 찾기</a>
          <router-link to="signup">회원가입</router-link>
        </div>
        <button v-on:click="login">로그인</button>
      </div>
    </div>
  </section>
</template>

<script>
import { bus } from '../../main';

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
  },
  created() {
    localStorage.setItem("t", "e70bd149b4ac720bb37673cfec5a38143bc9a594");
  },
  beforeUpdate() {
    console.log(this.$store.state.token);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/loginmain";
</style>
