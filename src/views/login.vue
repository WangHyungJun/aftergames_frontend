<template>
  <div class="login">
    <appheader></appheader>
    <sidebar></sidebar>
    <loginmain></loginmain>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import loginmain from "../components/authentication/loginmain";
import sidebar from "../components/all/sidebar";

export default {
  components: {
    appheader: appheader,
    loginmain: loginmain,
    appfooter: appfooter,
    sidebar: sidebar
  }
};
</script>
