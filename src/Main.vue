<style>
@font-face {
  font-family: centuryGothic;
  src: url("./assets/fonts/GOTHIC.TTF");
}
@keyframes easeIn {
  from{
    opacity: 0;
    transform: translateY(30px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
body{
  margin: 0;
  overflow: hidden;
  background-color: #1e6a8e;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page-header{
  margin: 20px;
}
.page-title{
  top: 0;
  position:absolute;
  font-size: 36px;
  font-weight: normal;
  color: #ffffff;
  font-family: centuryGothic;
}
.page-nav{
  display: flex;
  justify-content:flex-end;
  color: #ffffff;
  font-size: 28px;
  list-style: none;
  font-family: centuryGothic;
}
.page-nav li{
  margin: 10px;
  transition: 0.5s;
}
.page-nav li:hover{
  cursor: pointer;
  transform: scale(1.1);
  text-shadow: 0 0 10px #ffffff;
}
.page-nav li:active{
  transform: scale(0.9);
}
.page-sub{
  font-size: 24px;
  font-weight: normal;
  font-family: centuryGothic;
  margin: 0;
}
.container{
  display: flex;
  justify-content:space-evenly;
}
.background{
  position:absolute;
  background-image: linear-gradient(to top, #ffffff00, #06171f 100%);
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
}
.mountainBackground{
  background-image: linear-gradient(to top, #ffffff00, #06171f 100%);
  position:relative;
  display:flex;
  width: 100%;
  height: 100%;
}
.page-body{
  position: relative;
  animation: easeIn 2s;
  color: #ffffff;
  margin: 20px;
}
#layer-1, #layer-2{
  position:absolute;
  z-index: 1;
}

#layer-2{
  bottom: -900px;
}
</style>

<template>
  <div id="app">
    <div class="page-header">
      <h1 class="page-title">Joel Lawton</h1>
      <ul class="page-nav">
        <li>WHO</li>
        <li>WHAT</li>
        <li>WHERE</li>
      </ul>
    </div>
    <div class="background"></div>
    <div class="mountainBackground" v-on:mousemove="parallax">
      <img id="layer-1" src="images/stars.png"/>
      <img id="layer-2" src="images/mountainLayer01.png"/>
    </div>
    <div class="page-body">
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
    </div>
    <!-- <div class="container">
       <Card v-for="card in cardItems.cards" :key="card.id" :cardData="card"></Card> 
    </div> -->
  </div>
</template>

<script>
import CardItems from "./components/cardItems.json";
// import Card from "./components/Card.vue";
export default {
  name: 'app',
  components: {
    //Card
  },
  data(){
    return{
      storyIndex: 0,
      cardItems:{}
    }
  },
  created:function(){
    this.cardItems = CardItems;
  },
  methods:{
    parallax:function(){
      var posX = event.clientX;
      var posY = event.clientY;
      var layer1 = document.getElementById("layer-1");
      var layer2 = document.getElementById("layer-2");
      layer1.style.transform= 'translateX(' + posX/500 + '%) translateY(' + posY/500 + '%)';
      layer2.style.transform= 'translateX(' + posX/100 + '%) translateY(' + posY/100 + '%)'; 
      }
  }
}
</script>