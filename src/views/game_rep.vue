<template>
  <div id="gamepage">
    <appheader></appheader>
    <appnav></appnav>
    <sidebar></sidebar>
    <gamemain_rep></gamemain_rep>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import appnav from "../components/all/nav";
import gamemain_rep from "../components/games/gamemain_rep";
import sidebar from "../components/all/sidebar";

export default {
  name: "game_rep",
  components: {
    appheader: appheader,
    appnav: appnav,
    gamemain_rep: gamemain_rep,
    appfooter: appfooter,
    sidebar: sidebar
  }
};
</script>
