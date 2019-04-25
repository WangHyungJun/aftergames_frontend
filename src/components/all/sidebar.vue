<template>
  <aside id="sidebar" ref="aside">
    <div class="account">
      <i
        style="font-size: 20px; float: right;"
        class="fas fa-times"
        v-on:click="hidebar"
      ></i>
    </div>
    <div class="game_menu">
      <ul>
        <li v-on:click="hidebar" v-for="game in games">
          <img v-bind:src="game.logo" v-bind:alt="game.kor_name" />
          <router-link v-bind:to="'/game/' + game.name" exact>{{
            game.name
          }}</router-link>
        </li>
        <li v-on:click="hidebar">
          <img src="../../../public/img/aftergameslogo.png" alt="After Games" />
          <router-link v-bind:to="'/blog/' + 1" exact>이달의 게임</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { bus } from "../../main";

export default {
  name: "sidebar",
  data() {
    return {
      games: ""
    };
  },
  computed: {
    base_url() {
      return this.$store.state.base_url;
    }
  },
  mounted() {
    var com = this.$refs.aside;
    bus.$on("showside", function() {
      com.style.transform = "none";
    });
  },
  methods: {
    hidebar: function() {
      this.$refs.aside.style.transform = "translateX(-304px)";
    }
  },
  created() {
    this.$http
      .get(
          this.base_url+"/aftergamesapi/sidebarlist"
      )
      .then(function(data) {
        this.games = data.body;
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/sidebar";
</style>
