<template>
    <div class="login">
        <appheader></appheader>
        <section id="main">
            <div class="container">
                <div class="loginbox clearfix">
                    <div class="ID">
                        <span>ID</span><input type="text"/>
                    </div>
                    <div class="PW">
                        <span>PW</span><input type="password"/>
                    </div>
                    <div class="buttons">
                        <a>아이디 찾기</a>
                        <a>비밀번호 찾기</a>
                        <a href="#">회원가입</a>
                    </div>
                </div>
            </div>
        </section>
        <appfooter></appfooter>
    </div>
</template>

<script>
    import appheader from "../components/all/header"
    import appfooter from "../components/all/footer"
    export default {
        components:{
            "appheader": appheader,
            "appfooter": appfooter
        }

    };
</script>

<style lang="scss">
    @import "../../public/scss/login";
</style>