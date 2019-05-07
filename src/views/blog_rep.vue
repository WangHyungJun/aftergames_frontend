<template>
  <div id="blog">
    <appheader></appheader>
    <appnav></appnav>
    <sidebar></sidebar>
    <blogrepmain></blogrepmain>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import sidebar from "../components/all/sidebar";
import appnav from "../components/all/nav";
import blogrepmain from "../components/blog/blogrepmain";

export default {
  name: "blog_rep",
  components: {
    appheader: appheader,
    appfooter: appfooter,
    sidebar: sidebar,
    appnav: appnav,
    blogrepmain: blogrepmain
  }
};
</script>
