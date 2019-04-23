<template>
  <section class="pages">
    <div class="pages_number clearfix">
      <router-link
        v-for="page in init_lst"
        v-bind:to="'/game/' + gameid + '/' + page"
        exact
        replace
        >{{ page }}</router-link
      >
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
  props: ["gameid", "max_page", "last_lst"],
  data() {
    return {
      last_page: "",
      init_page: 1,
      init_lst: [1, 2, 3, 4, 5],
      temp_lst: []
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
        name: "game",
        params: { game: this.gameid, page: this.init_lst[0] }
      });
    }
  },
  watch: {
    // $route(to, from) {
      // const current_page = Number(to.params.page);
      // const current_page_lst = this.init_lst;
      // console.log("url changed");
      //
      // if (current_page_lst.includes(current_page)) {
      //   console.log("url changed and in no problem");
      //   ;
      // } else {
      //   console.log("url changed and in a problem");
      //   var i;
      //   const quotient = Math.floor(current_page/5);
      //   for (i = 0; i < 5; i++){
      //     current_page_lst[i] = 5*quotient + i+1;
      //   }
      // }
      // console.log(current_page_lst);
      // this.init_lst = current_page_lst;
    // }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../public/scss/pages";
</style>
