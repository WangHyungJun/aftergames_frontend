<template>
    <aside id="sidebar" ref="aside">
        <div class="account">
            <i style="font-size: 20px; float: right;" class="fas fa-times" v-on:click="hidebar"></i>
        </div>
        <div class="game_menu">
            <ul>
                <li>
                    <img src="../../../public/img/LOL.jpg" alt="LOL">
                    <router-link to="game/lol">lol</router-link>
                </li>
                <li>
                    <img src="../../../public/img/pubg.jpg" alt="pubg">
                    <a href="lol.html">배틀그라운드</a>
                </li>
                <li>
                    <img src="../../../public/img/fifaonline.jpg" alt="fifa">
                    <a href="lol.html">피파온라인</a>
                </li>
                <li>
                    <img src="../../../public/img/하스스톤.png" alt="하스스톤">
                    <a href="lol.html">하스스톤</a>
                </li>
                <li>
                    <img src="../../../public/img/aftergameslogo.png" alt="After Games">
                    <a href="lol.html">이달의게임</a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
    import {bus} from "../../main"

export default {
    name: "sidebar",
    mounted() {
        var com=this.$refs.aside;
        bus.$on("showside", function () {
            console.log(com.style.transform="none");
        });
    },
    methods: {
        hidebar: function () {
            this.$refs.aside.style.transform="translateX(-304px)";
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../public/scss/sidebar";
</style>