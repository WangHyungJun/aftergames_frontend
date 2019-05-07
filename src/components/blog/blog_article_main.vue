<template>
  <article id="blogarticle">
    <div class="articlehead">
      <div class="articletitle">{{ this.title }}</div>
      <div class="articledate">{{ this.date }}</div>
    </div>
    <div id="articlecontent" v-html="blog_content"></div>
    <router-link
      class="nextarticles clearfix"
      v-bind:to="'/article/' + nextarticle.id"
    >
      <div class="thumbnail clearfix">
        <img v-bind:src="nextarticle.thumbnail" alt="thumbnail" />
      </div>
      <div class="article_content clearfix">
        <h1>{{ this.nextarticle.title }}</h1>
        <h3>{{ this.nextarticle.rep_content }}</h3>
        <div class="article_date">{{ this.nextarticle.date }}</div>
      </div>
    </router-link>
    <pages></pages>
  </article>
</template>

<script>
import pages from "../../components/all/pages";

export default {
  data() {
    return {
      blog_content: "",
      title: "",
      date: "",
      nextarticle: ""
    };
  },
  components: {
    pages: pages
  },
  computed: {
    base_url() {
      return this.$store.state.base_url;
    }
  },
  created() {
    this.$http
      .get(this.base_url + "/aftergamesapi/articledetail", {
        params: { id: this.$route.params.id }
      })
      .then(function(data) {
        this.blog_content = data.body[0].content;
        this.title = data.body[0].title;
        this.date = data.body[0].date;
      });
    this.$http
      .get(this.base_url + "/aftergamesapi/articlenext", {
        params: { id: this.$route.params.id }
      })
      .then(function(data) {
        this.nextarticle = data.body[0];
      });
  },
  watch: {
    $route(to, from) {
      this.$http
        .get(this.base_url + "/aftergamesapi/articledetail", {
          params: { id: to.params.id }
        })
        .then(function(data) {
          this.blog_content = data.body[0].content;
          this.title = data.body[0].title;
          this.date = data.body[0].date;
        });
      this.$http
        .get(this.base_url + "/aftergamesapi/articlenext", {
          params: { id: to.params.id }
        })
        .then(function(data) {
          this.nextarticle = data.body[0];
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/blogarticle";
</style>
