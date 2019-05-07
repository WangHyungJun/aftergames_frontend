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
            <h3>{{ each_dic_data.content }}</h3>
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
  </section>
  <!--//main-->
</template>

<script>
export default {
  name: "homemain",
  data() {
    return {
      games: "",
      all_res_include_data: ""
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
        this.all_res_include_data = data.body;
      });
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/scss/main";
</style>
