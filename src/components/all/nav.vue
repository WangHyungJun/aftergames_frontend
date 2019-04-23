<template>
  <nav id="appnav">
    <div class="main_nav">
      <ul class="clearfix">
        <li><router-link to="/" exact>HOME</router-link></li>
        <li>
          <router-link v-bind:to="'/blog/' + 1" exact>이달의 게임</router-link>
        </li>
        <li v-for="game in games"><router-link v-bind:to="'/game/' + game.name">{{game.name}}</router-link></li>
      </ul>
      <div class="main_search">
        <div class="search">
          <input type="search" />
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      games: ""
    };
  },
  created() {
    this.$http
      .get("https://www.aftergames-api-hopeforsuccess.com/aftergamesapi/gamelist")
      .then(function(data) {
        this.games = data.body.slice(0,4);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/nav";
</style>
