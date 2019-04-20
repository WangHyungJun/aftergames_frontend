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
        <li v-on:click="hidebar">
          <img src="../../../public/img/LOL.jpg" alt="LOL" />
          <router-link v-bind:to="'/game/' + games[1]" exact>LOL</router-link>
        </li>
        <li v-on:click="hidebar">
          <img src="../../../public/img/pubg.jpg" alt="pubg" />
          <router-link v-bind:to="'/game/' + games[2]" exact>PUBG</router-link>
        </li>
        <li v-on:click="hidebar">
          <img src="../../../public/img/fifaonline.jpg" alt="fifa" />
          <router-link v-bind:to="'/game/' + games[3]" exact>FIFA</router-link>
        </li>
        <li v-on:click="hidebar">
          <img src="../../../public/img/하스스톤.png" alt="하스스톤" />
          <router-link v-bind:to="'/game/' + games[4]" exact
            >Hearh Stone</router-link
          >
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
      games: ["recommendation", "lol", "pubg", "fifa", "hearthstone"]
    };
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/sidebar";
</style>
