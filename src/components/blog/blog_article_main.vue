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
  created() {
    this.$http
      .get("http://127.0.0.1:8000/aftergamesapi/articledetail", {
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
