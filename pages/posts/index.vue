<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.name">
        <nuxt-link :to="post.name">{{ post.md.attributes.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const resolve = require.context('~/content/', true, /\.md$/);
    const imports = await resolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/);

      return {
        md: resolve(key),
        name
      };
    });

    return {
      posts: imports
    };
  }
};
</script>
