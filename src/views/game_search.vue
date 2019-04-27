<template>
    <div id="gamesearch">
        <appheader></appheader>
        <appnav></appnav>
        <sidebar></sidebar>
        <searchgame></searchgame>
        <appfooter></appfooter>
    </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import appnav from "../components/all/nav";
import searchgame from "../components/search/game_search";
import sidebar from "../components/all/sidebar";

export default {
  name: "game_search",
    components: {
        appheader: appheader,
        appnav: appnav,
        searchgame: searchgame,
        appfooter: appfooter,
        sidebar: sidebar
    }
};
</script>

<style scoped></style>
