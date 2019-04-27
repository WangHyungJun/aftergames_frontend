<template>
  <div id="articlesearch">
    <appheader></appheader>
    <appnav></appnav>
    <sidebar></sidebar>
    <articlesearch></articlesearch>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import appnav from "../components/all/nav";
import articlesearch from "../components/search/article_search";
import sidebar from "../components/all/sidebar";

export default {
  name: "game_search",
  components: {
    appheader: appheader,
    appnav: appnav,
    articlesearch: articlesearch,
    appfooter: appfooter,
    sidebar: sidebar
  }
};
</script>
