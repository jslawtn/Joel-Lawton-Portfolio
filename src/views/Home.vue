<template>
  <div class="container fade-up">
    <div class="mb-4">
      <div class="d-flex justify-content-center">
        <div class="text-center">
          <h1 class="main-title">Just another creative</h1>
          <p>Hello my name is Joel, a front-end and games developer from Manchester</p>
        </div>
      </div>
      
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