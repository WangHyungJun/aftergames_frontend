<template>
  <section class="main">
    <section class="Game">
      <div class="Game_logo LOL clearfix">
        <img v-bind:src="game_infors.logo" alt="리그오브레전드" />
        <h3>{{ this.game_infors.kor_name }}</h3>
      </div>
      <div class="filter">
        <select v-model="selected" @change="onchange">
          <option value="">필터</option>
          <option v-for="filter in filters">{{filter.filter}}</option>
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
    <pages
      v-bind:gameid="this.id"
      v-bind:max_page="this.max_page"
      v-bind:last_lst="this.last_lst"
    ></pages>
  </section>
</template>

<script>
import pages from "../all/pages";

export default {
  name: "gamemain.vue",
  components: {
    pages: pages
  },
  data() {
    return {
      id: this.$route.params.id,
      game_postings: "",
      selected: "",
      current_page: this.$route.params.page,
      last_lst: [],
      max_page: 0,
      game_infors: "",
      filters: ""
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
      e.preventDefault();
      if (selected !== "" && selected !== "필터") {
        this.$http
          .post(this.base_url + "/aftergamesapi/games", {
            filter: selected,
            game: this.id
          })
          .then(function(data) {
            this.game_postings = data.body;
          });
      } else {
        this.$http
          .post(this.base_url + "/aftergamesapi/games", {
            game: this.id
          })
          .then(function(data) {
            this.game_postings = data.body;
          });
      }
    }
  },
  created() {
    this.$http
      .get(this.base_url + "/aftergamesapi/games", {
        params: { game: this.id, page: this.current_page }
      })
      .then(function(data) {
        this.game_postings = data.body["data"];
        this.max_page = data.body["max_page"];
        this.last_lst = data.body["last_lst"];
      });
    this.$http
      .get(this.base_url + "/aftergamesapi/gameone", {
        params: { game: this.id }
      })
      .then(function(data) {
        this.game_infors = data.body[0];
      });
    this.$http
      .get(this.base_url + "/aftergamesapi/filters", {
        params: { game: this.id }
      })
      .then(function(data) {
        this.filters = data.body;
      });
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
      this.current_page = to.params.page;
      this.$http
        .get(this.base_url + "/aftergamesapi/games", {
          params: { game: this.id, page: this.current_page }
        })
        .then(function(data) {
          this.game_postings = data.body["data"];
          this.max_page = data.body["max_page"];
          this.last_lst = data.body["last_lst"];
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/scss/lolmain";
/*@import "../../../public/scss/pages";*/
</style>
