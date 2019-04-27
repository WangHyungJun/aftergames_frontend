<template>
  <div id="article" v-html="blog_content.content">
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog_content: ""
    };
  },
  computed: {
    base_url() {
      return this.$store.state.base_url;
    }
  },
  created() {
    this.$http
      .get(this.base_url+"/aftergamesapi/articledetail", {
        params: { id: this.$route.params.id }
      })
      .then(function(data) {
        this.blog_content = data.body[0];
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/blogarticle";
</style>
