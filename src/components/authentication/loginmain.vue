<template>
  <section id="main">
    <div class="container">
      <div v-show="this.defaultshow" class="loginbox clearfix">
        <div class="ID">
          <span>EMAIL</span><input type="text" v-model="email" />
        </div>
        <div class="PW">
          <span>PW</span><input type="password" v-model="password" />
        </div>
        <div class="buttons clearfix">
          <a class="loginbutton" href="#" v-on:click="login">로그인</a>
          <div class="small_button">
            <a v-on:click="showChange" href="#">비밀번호 찾기 | </a>
            <router-link href="#" to="/signup" exact>회원가입</router-link>
          </div>
        </div>
      </div>
      <div v-show="!defaultshow" class="loginbox clearfix">
        <div class="ID">
          <span>EMAIL</span><input type="text" v-model="email" />
        </div>
        <div class="buttons clearfix">
          <a class="loginbutton" href="#" v-on:click="findpassword"
            >비밀번호 찾기</a
          >
          <div class="small_button">
            <a v-on:click="showChange" href="#">로그인 | </a>
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
      url: "https://www.aftergames-api-hopeforsuccess.com/aftergamesapi/login",
      email: "",
      password: "",
      defaultshow: true,
      findpw: true,
      findpwprocess: false
    };
  },
  computed: {
    base_url() {
      return this.$store.state.base_url;
    }
  },
  methods: {
    login: function() {
      this.$http
        .post(this.base_url + "/aftergamesapi/login", {
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
            this.$router.replace({ name: "home" });
          }
        });
    },
    findpassword: function() {
      if (this.findpwprocess === false) {
        this.findpwprocess = true;
        this.$http
          .post(this.base_url + "/aftergamesapi/login", {
            email: this.email,
            findpw: this.findpw
          })
          .then(function(data) {
            alert(data.body["message"]);
            this.findpwprocess = false;
          });
      } else {
        alert("작업 처리 중입니다. 잠시만 기다려주세요.");
      }
    },
    showChange: function(e) {
      e.preventDefault();
      this.defaultshow = !this.defaultshow;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/loginmain";
</style>
