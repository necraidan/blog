<template>
  <div class="container">
    <div>
      <pic />
      <h1 class="title">necraidan's blog</h1>
      <h2 class="subtitle">Coming soon</h2>
    </div>
  </div>
</template>

<script>
import Pic from '../components/Pic';

export default {
  components: {
    Pic
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media (max-width: 640px) {
  .title {
    font-size: 50px;
  }

  .subtitle {
    font-size: 21px;
  }
}
</style>
