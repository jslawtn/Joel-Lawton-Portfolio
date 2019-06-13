<style>
.background{
    position:absolute;
    background-color: #1e6a8e;
    background-image: linear-gradient(to top, #ffffff00, #06171f 100%);
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0;
}

.parallax-layers{
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

.layer-1, .layer-2, .layer-3, .layer-4{
  position:absolute;
}

.layer-2, .layer-3, .layer-4{
  bottom: 0;
}

.layer-1{
  top: 0;
}

.layer-3{
  width: 100%;
}
</style>

<template>
    <div class="background" v-on:mousemove="parallax">
        <b-navbar type="dark">
            <b-navbar-brand>
                <router-link to="/"><img src="images/joelLogo.png" alt="Joel Lawton" width="180"/></router-link>
                <a href="https://twitter.com/JoelLawton3" target="_blank"><i class="fa fa-twitter icon-link"></i></a>
                <a href="https://www.linkedin.com/in/joel-lawton-6a6b37154/" target="_blank"><i class="fa fa-linkedin icon-link"></i></a>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/"><h4>Home</h4></b-nav-item>
                <b-nav-item to="/About"><h4>About</h4></b-nav-item>
                <b-nav-item to="/Work"><h4>Work</h4></b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <div class="parallax-layers">
            <img class="layer-1" 
            :style="{'transform':'translateX(' + mouseX/500 + '%) translateY(' + mouseY/500 + '%)'}" src="images/stars.png" />
            <img class="layer-2" 
            :style="{'transform':'translateX(' + mouseX/400 + '%) translateY(' + mouseY/400 + '%)'}" src="images/mountainLayer01.png"/>
            <img class="layer-3" src="images/FogLayer.png"/>
            <img class="layer-4" 
            :style="{'transform':'translateX(' + mouseX/200 + '%) translateY(' + mouseY/200 + '%)'}" src="images/TreeLayer.png"/>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mouseX:0,
            mouseY:0
        }
    },
    methods:{
        parallax:function(){
            this.mouseX = this.lerp(this.mouseX, event.clientX, 0.1);
            this.mouseY = this.lerp(this.mouseY, event.clientY, 0.1);
        },
        lerp:function(start, end, amt){
            return (1-amt) * start + amt * end;
        }
    },
    computed:{
        
    }
}
</script>
