<template>
    <header id="header">
        <div class="container clearfix">
            <div class="row">
                <section class="sub_header">
                    <i v-on:click="showside" class="fas fa-ellipsis-v"></i>
                    <div class="logo"><img src="../../../public/img/aftergameslogo.png"/></div>
                    <div class="sub_detail">After games 설명글이 들어갈 자리</div>
                    <div class="account">
                        <router-link to="/login">로그인 | </router-link>
                        <router-link to="/signup">회원가입 </router-link>
                    </div>
                </section>
            </div>
        </div>
        <section class="Logo">
            <div class="Logo_pic"><img src="../../../public/img/aftergameslogo.png"/></div>
        </section>
    </header>
    <!--//header-->
</template>

<script>
    import {bus} from "../../main"

    export default {
        name: "appheader",
        methods: {
            showside: function () {
                bus.$emit("showside",{});
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../../public/scss/header";
</style>