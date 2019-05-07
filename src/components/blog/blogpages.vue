<template>
  <section class="pages">
    <div class="pages_number clearfix">
      <router-link v-for="page in init_lst" v-bind:to="'/blog/' + page" exact>{{
        page
      }}</router-link>
    </div>
    <div class="pages_arrows clearfix">
      <a v-on:click="goonestep"><i class="fas fa-angle-right"></i></a>
      <a v-on:click="golast"><i class="fas fa-angle-double-right"></i></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "pages",
  props: ["max_page", "last_lst"],
  data() {
    return {
      last_page: "",
      init_page: "",
      init_lst: ""
    };
  },
  methods: {
    golast: function() {
      if (this.max_page < 5) {
      } else {
        return (this.init_lst = this.last_lst);
      }
    },
    goonestep: function() {
      if (this.init_page + 9 < this.max_page) {
        var i;
        var temp_lst = [];
        for (i = 0; i < this.init_lst.length; i++) {
          temp_lst.push(this.init_lst[i] + 5);
        }
        this.init_lst = temp_lst;
      } else {
        this.init_lst = this.last_lst;
      }
      this.init_page = this.init_lst[0];
      this.$router.replace({
        name: "blog",
        params: { page: this.init_lst[0]}
      });
    }
  },
  created() {
    const page = this.$route.params.page;
    if (page in [1, 2, 3, 4, 5] || page === undefined) {
      this.init_lst = [1, 2, 3, 4, 5];
      this.init_page = 1;
    } else {
      this.init_lst = [6, 7, 8, 9, 10];
      this.init_page = 6;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/scss/pages";
</style>
