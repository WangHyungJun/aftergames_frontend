<template>
  <div class="rules">
    <appheader></appheader>
    <sidebar></sidebar>
    <rules></rules>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from "../components/all/header";
import appfooter from "../components/all/footer";
import rules from "../components/rules/rules";
import sidebar from "../components/all/sidebar";

export default {
  name: "rules_view",
  components: {
    appheader: appheader,
    appfooter: appfooter,
    rules: rules,
    sidebar: sidebar
  }
};
</script>
