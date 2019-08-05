<template>
  <div v-bind:class="{ small : isSmall, large : isLarge }" class="text-center">
    <img
      class="me"
      src="https://fr.gravatar.com/userimage/23223361/2c5c8a6c60efa31d983d4381373b4233.jpg?size=200"
    />
    <h1 class="site-title" v-bind:class="{ 'mt-3' : isLarge}">
      <router-link :to="{ path: '/'}">necraidan's blog</router-link>
    </h1>
    <h2 class="site-subtitle" v-bind:class="{ 'mt-3' : isLarge}">about your blog</h2>
    <p class="mt-4" v-show="isLarge">
      <a href="#">my custom links</a> -
    </p>
    <div class="social d-flex justify-content-center" v-show="isLarge">
      <div v-show="isLarge" class="item">
        <a href="https://twitter.com/necraidna">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      <div v-show="isLarge" class="item">
        <a href="https://www.linkedin.com/in/bauzanneau/">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  props: ['size'],
  data() {
    return {
      isSmall: this.size === 'small',
      isLarge: this.size === 'large'
    };
  }
};
</script>

<style lang="scss">
@import '../styles/base.scss';

.small {
  .site-title {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  .site-subtitle {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
}
</style>
