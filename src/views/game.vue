<template>
    <div id="gamepage">
        <appheader></appheader>
        <appnav></appnav>
        <sidebar></sidebar>
        <gamemain></gamemain>
        <appfooter></appfooter>
    </div>
</template>

<script>
    import appheader from "../components/all/header";
    import appfooter from "../components/all/footer";
    import appnav from "../components/all/nav";
    import gamemain from "../components/games/gamemain"
    import sidebar from "../components/all/sidebar"

    export default {
        name: "game",
        components:{
            "appheader": appheader,
            "appnav": appnav,
            "gamemain": gamemain,
            "appfooter": appfooter,
            "sidebar": sidebar
        }
    }
</script>
