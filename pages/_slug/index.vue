<template>
  <div class="post">
    <div v-html="postContent"></div>
  </div>
</template>

<script lang="js">


export default {
  layout: 'slug',
  components: {
   
  },
  head() {
    let post = this.post;
    return {
      title: 'Andre Liem',
      meta: [
        {
          hid: post.meta.id,
          name: post.meta.name,
          content: post.meta.content
        }
      ]
    };
  },
  fetch({ store, params }) {
    store.dispatch('getPosts');
    store.dispatch('getPostWithSlug', params.slug);
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    postContent() {
      let post = this.$store.state.post;
      return require(`../../content/posts/${post.id}.md`).default;
    }
  },
  watch: {

  }
};
</script>

<style lang="scss">
.post {
  pre {
    background-color: #f5f5f5;
    padding: 2em;
  }
  .hljs-built_in,
  .hljs-string,
  .hljs-section,
  .hljs-selector-class,
  .hljs-template-variable,
  .hljs-deletion,
  .hljs-function {
    color: #800;
  }
}
</style>

