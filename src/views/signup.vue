<template>
    <div class="signup">
        <appheader></appheader>
        <signupmain></signupmain>
        <appfooter></appfooter>
    </div>
</template>

<script>
    import appheader from "../components/all/header"
    import appfooter from "../components/all/footer"
    import signupmain from "../components/authentication/signupmain"

    export default {
        components:{
            "appheader": appheader,
            "signupmain": signupmain,
            "appfooter": appfooter
        }

    };
</script>