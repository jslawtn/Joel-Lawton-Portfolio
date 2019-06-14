<template>
  <div class="container fade-up">
    <div class="mb-4">
      <h1>Welcome</h1>
      <h5>Welcome to my site</h5>
      <a class="twitter-timeline" data-width="300" data-height="500" data-theme="dark" data-link-color="#2B7BB9" href="https://twitter.com/JoelLawton3">Tweets by @JoelLawton3</a>
    </div>
    <ContentRow></ContentRow>
  </div>
</template>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
import ContentRow from '../components/ContentRow.vue';
export default {
  name: 'home',
  components:{
    ContentRow
  }
}
</script>