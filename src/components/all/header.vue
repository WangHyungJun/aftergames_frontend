<template>
  <header id="header">
    <div class="container clearfix">
      <div class="row">
        <section class="sub_header">
          <i v-on:click="showside" class="fas fa-ellipsis-v"></i>
          <div class="logo">
            <img src="../../../public/img/aftergameslogo.png" />
          </div>
          <div class="sub_detail">After games 설명글이 들어갈 자리</div>
          <div class="account">
            <router-link to="/login" v-show="this.loginshow">로그인 | </router-link>
            <router-link to="/signup" v-show="this.signupshow">회원가입 </router-link>
            <a v-show="!this.signupshow"> {{ this.nickname }} | </a>
            <span v-on:click="logout" v-show="!this.signupshow">로그아웃</span>
          </div>
        </section>
      </div>
    </div>
    <section class="Logo">
      <div class="Logo_pic">
        <router-link to="/" exact><img src="../../../public/img/aftergameslogo.png" /></router-link>
      </div>
    </section>
  </header>
  <!--//header-->
</template>

<script>
import { bus } from "../../main";

export default {
  name: "appheader",
  data(){
    return {
      loginshow: true,
      signupshow: true
    }
  },
  methods: {
    showside: function() {
      bus.$emit("showside", {});
    },
    logout: function() {
      localStorage.removeItem("token");
      localStorage.removeItem("nickname");
    }
  },
  computed: {
    nickname() {
      return this.$store.state.nickname;
    }
  },
  mounted() {
    if (this.nickname !== null) {
      this.loginshow = false;
      this.signupshow = false;
    } else {
      this.loginshow = true;
      this.signupshow = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/scss/header";
</style>
