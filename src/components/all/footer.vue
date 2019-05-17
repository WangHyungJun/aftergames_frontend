<template>
    <footer id="footer">
        <div class="footer_content clearfix">
            <div class="footer_logo">
                <img src="../../../public/img/af.png" alt="aftergames"/>
            </div>
            <div class="footer_terms">
                <router-link to="/rules">회사소개 |</router-link>
                <router-link to="/rules">이용약관 |</router-link>
                <router-link to="/rules">개인정보처리방침 |</router-link>
                <router-link to="/rules">운영정책</router-link>
            </div>
            <div class="footer_email">
                help.afgamez@gmail.com
            </div>
        </div>
    </footer>
    <!--//footer-->
</template>

<script>
    export default {
        name: "appfooter"
    }
</script>
<style lang="scss" scoped>
    @import "../../../public/scss/footer";
</style>