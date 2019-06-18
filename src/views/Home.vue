<template>
  <div class="container fade-up">
    <div class="mb-4">
      <h1>Welcome</h1>
      <h5>Welcome to my site</h5>
      <a class="twitter-timeline" data-width="300" data-height="500" href="https://twitter.com/JoelLawton3?ref_src=twsrc%5Etfw">Tweets by JoelLawton3</a> 
    </div>
    <ContentRow></ContentRow>
  </div>
</template>

<script>
import ContentRow from '../components/ContentRow.vue';
export default {
  name: 'home',
  components:{
    ContentRow
  },
  created: function(){
    let twitterBoard = document.createElement('script');
    twitterBoard.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.body.appendChild(twitterBoard);
  }
}
</script>