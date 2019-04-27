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
            <h1>{{ article.title }}</h1>
            <h3>{{ article.rep_content }}</h3>
            <div class="article_date">{{ article.date }}</div>
          </div>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  name: "article_search_vue",
  data() {
    return {
      articles: "",
      selected: ""
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
          .post(this.base_url + "/aftergamesapi/articlesearch", {
            filter: selected,
            search: search
          })
          .then(function(data) {
            this.articles = data.body;
          });
      } else {
        this.$http
          .post(this.base_url + "/aftergamesapi/articlesearch", {
            search: search
          })
          .then(function(data) {
            this.articles = data.body;
          });
      }
    }
  },
  created() {
    const search = this.$route.params.search;

    bus.$on("onResearch", data => {
      this.$http
        .post(this.base_url + "/aftergamesapi/articlesearch", {
          search: data
        })
        .then(function(data) {
          this.articles = data.body;
        });
    });
    this.$http
      .post(this.base_url + "/aftergamesapi/articlesearch", {
        search: search
      })
      .then(function(data) {
        this.articles = data.body;
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/blogmain";
</style>
