<style>
@import './assets/css/joel-site.css';

@media only screen and (max-width: 600px){
  #layer-1, #layer-2, #layer-3{
    transform: scale(60%);
  }
}

.background{
  position:absolute;
  background-image: linear-gradient(to top, #ffffff00, #06171f 100%);
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
}

.layer-1, .layer-2, .layer-3, .layer-4{
  position:absolute;
}
.layer-1{
  top: 0;
}
.layer-2, .layer-3, .layer-4{
  bottom: 0;
}

.parallax-layers{
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 0;
}
</style>

<template>
  <div id="app">
    <div class="background">
      <div class="parallax-layers" v-on:mousemove="parallax">
        <img class="layer-1" :style="{'transform':'translateX(' + mouseX + '%) translateY(' + mouseY + '%)'}" src="images/stars.png" />
        <img class="layer-2" :style="{'transform':'translateX(' + mouseX + '%) translateY(' + mouseY + '%)'}" src="images/mountainLayer01.png"/>
        <img class="layer-4" :style="{'transform':'translateX(' + mouseX + '%) translateY(' + mouseY + '%)'}" src="images/FogLayer.png"/>
        <img class="layer-3" :style="{'transform':'translateX(' + mouseX + '%) translateY(' + mouseY + '%)'}" src="images/TreeLayer.png"/>
      </div>
      <div class="page-header">
        <img class="page-logo" src="images/joelLogo.png" alt="Joel Lawton"/>
        <a class="front" href="https://twitter.com/JoelLawton3" target="_blank"><i class="fa fa-twitter"></i></a>
        <a class="front" href="https://www.linkedin.com/in/joel-lawton-6a6b37154/" target="_blank"><i class="fa fa-linkedin"></i></a>
        <ul class="page-nav front">
          <li :class="{active: pageIndex === 0}"><a v-on:click.prevent="pageIndex = 0">{{textConfig.who}}</a></li>
          <li :class="{active: pageIndex === 1}"><a v-on:click.prevent="pageIndex = 1">{{textConfig.what}}</a></li>
          <li :class="{active: pageIndex === 2}"><a v-on:click.prevent="pageIndex = 2">{{textConfig.where}}</a></li>
        </ul>
      </div>
      <Who v-if="pageIndex === 0" :textConfig="textConfig"></Who>
      <What v-if="pageIndex === 1" :textConfig="textConfig"></What>
      <Where v-if="pageIndex === 2" :textConfig="textConfig"></Where>
    </div>
  </div>
</template>

<script>
import AppData from "./components/appData.json";
import Who from "./components/Who.vue";
import What from "./components/What.vue";
import Where from "./components/Where.vue";
export default {
  name: 'app',
  components: {
    Who,
    What,
    Where
  },
  data(){
    return{
      pageIndex: 0,
      cardItems:{},
      textConfig:{},
      mouseX:0,
      mouseY:0
    }
  },
  created:function(){
    this.textConfig = AppData.languages.find(lang => lang.language === navigator.language || "en");
  },
  methods:{
    parallax:function(){
      this.mouseX = event.clientX/500;
      this.mouseY = event.clientY/500;
      }
  }
}
</script>