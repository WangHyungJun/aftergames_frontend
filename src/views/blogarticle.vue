<template>
  <div id="blog">
    <appheader></appheader>
    <appnav></appnav>
    <sidebar></sidebar>
    <blogarticlemain></blogarticlemain>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import sidebar from "../components/all/sidebar";
import appnav from "../components/all/nav";
import blogarticlemain from "../components/blog/blog_article_main";

export default {
  name: "blogarticle",
  components: {
    appheader: appheader,
    appfooter: appfooter,
    sidebar: sidebar,
    appnav: appnav,
    blogarticlemain: blogarticlemain
  }
};
</script>
