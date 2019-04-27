<template>
  <nav id="appnav">
    <div class="main_nav">
      <ul class="clearfix">
        <li><router-link to="/" exact>HOME</router-link></li>
        <li>
          <router-link to="/blog/">이달의 게임</router-link>
        </li>
        <li v-for="game in games">
          <router-link v-bind:to="'/game/' + game.name">{{
            game.name
          }}</router-link>
        </li>
      </ul>
      <div class="main_search">
        <div class="search">
          <input v-model="search" @keyup.enter="searchsubmit" type="search" />
          <i v-on:click="searchsubmit" class="fas fa-search"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { bus } from "../../main";

export default {
  data() {
    return {
      games: "",
      search: "",
      game: "",
      re_search: false
    };
  },
  computed: {
    base_url() {
      return this.$store.state.base_url;
    }
  },
  methods: {
    searchsubmit: function(e) {
      e.preventDefault();
      if (this.game !== undefined) {
        //게임별 검색 결과
        if (this.re_search) {
          bus.$emit("onResearch", this.search);
        } else {
          this.$router.replace({
            name: "gamesearch",
            params: {
              id: this.game,
              search: this.search
            }
          });
        }
      } else if (this.$route.path === "/") {
        if (this.re_search) {
          bus.$emit("onResearch", this.search);
        } else {
          this.$router.replace({
            name: "gamesearch",
            params: {
              id: "all",
              search: this.search
            }
          });
        }
      } else {
        // 블로그 페이지 검색 결과
        if (this.re_search) {
          bus.$emit("onResearch", this.search);
        } else {
          this.$router.replace({
            name: "articlesearch",
            params: {
              search: this.search
            }
          });
        }
      }
    }
  },
  created() {
    this.game = this.$route.params.id;
    this.$http
      .get(this.base_url+"/aftergamesapi/gamelist")
      .then(function(data) {
        this.games = data.body;
      });
  },
  watch: {
    $route(to, from) {
      this.game = to.params.id;
      //재검색할 경우 re_search 값 true 변경.
      if (to.path.includes("search")) {
        this.re_search = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/nav";
</style>
