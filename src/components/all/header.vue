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
            <a>{{ this.nickname }}</a>
          </div>
        </section>
      </div>
    </div>
    <section class="Logo">
      <div class="Logo_pic">
        <img src="../../../public/img/aftergameslogo.png" />
      </div>
    </section>
  </header>
  <!--//header-->
</template>

<script>
import { bus } from "../../main";

export default {
  name: "appheader",
  methods: {
    showside: function() {
      bus.$emit("showside", {});
    }
  },
  data(){
   return {
     loginshow: true,
     signupshow: true,
   }
  },
  computed: {
    nickname() {
      return this.$store.state.nickname;
    }
  },
  created() {
    if (this.nickname !== undefined) {
      this.loginshow = false;
      this.signupshow= false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/scss/header";
</style>
