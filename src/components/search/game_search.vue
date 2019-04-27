<template>
  <section class="main">
    <section class="Game">
      <div class="Game_logo LOL clearfix" v-show="!all">
        <img v-bind:src="game_infors.logo" alt="리그오브레전드" />
        <h3>{{ this.game_infors.kor_name }}</h3>
      </div>
      <div class="filter">
        <select v-model="selected" @change="onchange">
          <option value="">필터</option>
          <option>실력향상</option>
          <option>핫이슈</option>
          <option>기타</option>
        </select>
      </div>
      <div class="container">
        <div class="row clearfix">
          <a v-for="posting in game_postings" v-bind:href="posting.url">
            <div class="thumbnail">
              <img v-bind:src="posting.thumbnail" alt="Lol1" />
            </div>
            <div class="title">{{ posting.title }}</div>
            <div class="sub_title">{{ posting.content }}</div>
          </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { bus } from "../../main";

export default {
  name: "game_search_vue",
  data() {
    return {
      id: this.$route.params.id,
      game_postings: "",
      selected: "",
      game_infors: "",
      all: false
    };
  },
  computed: {
    base_url() {
      return this.$store.state.base_url;
    }
  },
  methods: {
    onchange: function(e) {
      const selected = this.selected;
      const search = this.$route.params.search;
      e.preventDefault();
      if (selected !== "" && selected !== "필터") {
        this.$http
          .post(this.base_url + "/aftergamesapi/search", {
            filter: selected,
            game: this.id,
            search: search
          })
          .then(function(data) {
            this.game_postings = data.body;
          });
      } else {
        this.$http
          .post(this.base_url + "/aftergamesapi/search", {
            game: this.id,
            search: search
          })
          .then(function(data) {
            this.game_postings = data.body;
          });
      }
    }
  },
  created() {
    const game = this.id;
    const search = this.$route.params.search;

    bus.$on("onResearch", (data) => {
      this.$http
        .post(this.base_url + "/aftergamesapi/search", {
          game: game,
          search: data
        })
        .then(function(data) {
          this.game_postings = data.body;
        });
    });
    this.$http
      .post(this.base_url + "/aftergamesapi/search", {
        game: game,
        search: search
      })
      .then(function(data) {
        this.game_postings = data.body;
      });
    if (game !== "all") {
      this.$http
        .get(this.base_url + "/aftergamesapi/gameone", {
          params: { game: game }
        })
        .then(function(data) {
          this.game_infors = data.body[0];
        });
    } else {
      this.all = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/lolmain";
</style>
