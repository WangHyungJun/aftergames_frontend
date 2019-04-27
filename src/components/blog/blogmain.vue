<template>
  <div id="blogmain">
    <section class="main clearfix">
      <section class="logo_filter">
        <div class="logo clearfix">
          <img src="../../../public/img/aftergameslogo.png" alt="이달의게임" />
          <h3>이달의 게임</h3>
        </div>
        <div class="filter clearfix">
          <select v-model="selected" @change="onchange">
            <option value="">필터</option>
            <option>실력향상</option>
            <option>핫이슈</option>
            <option>기타</option>
          </select>
        </div>
      </section>
      <section class="articles clearfix">
        <article class="clearfix" v-for="article in articles">
          <div class="thumbnail">
            <img v-bind:src="article.thumbnail" alt="redman" />
          </div>
          <div class="article_content">
            <h1>{{article.title}}</h1>
            <h3>{{article.rep_content}}</h3>
            <div class="article_date">{{article.date}}</div>
          </div>
        </article>
      </section>
    </section>
    <pages></pages>
  </div>
</template>

<script>
import pages from "../all/pages";

export default {
  name: "blogmain",
  components: {
    pages: pages
  },
  data() {
    return {
      articles: "",
      selected: "",
      current_page: 1,
      last_lst: [],
      max_page: 0
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
          .post(
            this.base_url + "/aftergamesapi/games",
            {
              filter: selected,
              game: this.id
            }
          )
          .then(function(data) {
            this.game_postings = data.body;
          });
      } else {
        this.$http
          .post(
            this.base_url+"/aftergamesapi/games",
            {
              game: this.id
            }
          )
          .then(function(data) {
            this.game_postings = data.body;
          });
      }
    }
  },
  created() {
    this.$http
      .get(
        this.base_url + "/aftergamesapi/article",
        {
          params: { page: this.current_page }
        }
      )
      .then(function(data) {
        this.articles = data.body["data"];
      });
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
      this.current_page = to.params.page;
      this.$http
        .get(
          this.base_url+"/aftergamesapi/games",
          {
            params: { game: this.id, page: this.current_page }
          }
        )
        .then(function(data) {
          this.game_postings = data.body["data"];
          this.max_page = data.body["max_page"];
          this.last_lst = data.body["last_lst"];
        });
      this.$http
        .get(
          this.base_url+"/aftergamesapi/gameone",
          {
            params: { game: this.id }
          }
        )
        .then(function(data) {
          this.game_infors = data.body[0];
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/blogmain";
</style>
