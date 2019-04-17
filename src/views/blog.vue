<template>
 <div id="blog">
     <appheader></appheader>
     <appnav></appnav>
     <sidebar></sidebar>
     <blogmain></blogmain>
     <appfooter></appfooter>
 </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import sidebar from "../components/all/sidebar";
import appnav from "../components/all/nav";
import blogmain from "../components/blog/blogmain";

export default {
  name: "blog",
  components: {
    'appheader': appheader,
    'appfooter': appfooter,
    'sidebar' : sidebar,
    'appnav' : appnav,
    'blogmain': blogmain
  }
};
</script>
