<template>
  <section class="main clearfix">
    <section class="Game" v-for="each_dic in all_res_include_data">
      <div class="container">
        <div class="Game_logo LOL clearfix">
          <img v-bind:src="each_dic.logo" v-bind:alt="each_dic.name" />
          <h3>{{ each_dic.kor_name }}</h3>
        </div>
        <div class="row clearfix">
          <article v-for="each_dic_data in each_dic.data">
            <a class="thumbnail" v-bind:href="each_dic_data.url">
              <img v-bind:src="each_dic_data.thumbnail" alt="Lol1" />
            </a>
            <h3>{{ each_dic_data.title }}</h3>
            <h3>{{ each_dic_data.short_rep_content }}</h3>
          </article>
          <router-link
            v-bind:to="'/game/' + each_dic.name"
            exact
            class="Paging"
          >
            <img src="../../../public/img/화살표.png" alt="right" />
          </router-link>
        </div>
      </div>
    </section>
    <section class="Game">
      <div class="container">
        <div class="Game_logo LOL clearfix">
          <img src="../../../public/img/af.png" alt="애프터게임즈" />
          <h3>이달의 게임</h3>
        </div>
        <div class="row clearfix">
          <article v-for="article in three_articles">
            <router-link v-bind:to="'/article/'+article.id" class="thumbnail">
              <img v-bind:src="article.thumbnail" alt="Lol1" />
            </router-link>
            <h3>{{ article.title }}</h3>
            <h3>{{ article.short_rep_content }}</h3>
          </article>
          <router-link
            to="/blog/"
            exact
            class="Paging"
          >
            <img src="../../../public/img/화살표.png" alt="right" />
          </router-link>
        </div>
      </div>
    </section>
  </section>
  <!--//main-->
</template>

<script>
export default {
  name: "homemain",
  data() {
    return {
      games: "",
      all_res_include_data: "",
      three_articles: ""
    };
  },
  computed: {
    base_url() {
      return this.$store.state.base_url;
    }
  },
  created() {
    this.$http
      .get(this.base_url + "/aftergamesapi/homeapi")
      .then(function(data) {
        this.all_res_include_data = data.body['res_lst'];
        this.three_articles = data.body['res_articles'];
      });
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/scss/main";
</style>
