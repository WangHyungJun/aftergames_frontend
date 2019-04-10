<template>
  <div class="home">
    <appheader></appheader>
    <appnav></appnav>
    <appmain></appmain>
    <appfooter></appfooter>
  </div>
  <!--//home-->
</template>

<script>
  import appheader from "../components/all/header"
  import appfooter from "../components/all/footer"
  import appnav from "../components/all/nav"
  import main from "../components/home/homemain"
export default {
    components:{
      "appheader": appheader,
      "appfooter": appfooter,
      "appnav": appnav,
      "appmain": main
    }
};
</script>