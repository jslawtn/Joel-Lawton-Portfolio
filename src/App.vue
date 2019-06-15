<style>
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

.star{
    height: 50px;
    width: 50px;
    background-color: white;
}

</style>

<template>
    <div class="background" :class="{'to-purple':$route.path === '/About', 'to-orange':$route.path === '/Work'}" v-on:mousemove="parallax">
        <b-navbar type="dark">
            <b-navbar-brand>
                <router-link to="/"><img src="images/joelLogo.png" title="Joel Lawton" alt="Joel Lawton" width="180"/></router-link>
                <a href="https://twitter.com/JoelLawton3" target="_blank"><i class="fa fa-twitter icon-link"></i></a>
                <a href="https://www.linkedin.com/in/joel-lawton-6a6b37154/" target="_blank"><i class="fa fa-linkedin icon-link"></i></a>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto" >
                <b-nav-item to="/About" class="mr-5" :class="{'btn-inactive': $route.path !== '/About'}" :disabled="$route.path === '/About'"><h5>About me</h5></b-nav-item>
                <b-nav-item to="/Work" class="mr-5" :class="{'btn-inactive': $route.path !== '/Work'}" :disabled="$route.path === '/Work'"><h5>My work</h5></b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <!-- <div class="parallax-layers">
            <img class="layer-1" 
            :style="{'transform':'translateX(' + mouseX/500 + '%) translateY(' + mouseY/500 + '%)'}" src="images/stars.png" />
            <img class="layer-2" 
            :style="{'transform':'translateX(' + mouseX/400 + '%) translateY(' + mouseY/400 + '%)'}" src="images/mountainLayer01.png"/>
            <img class="layer-3" src="images/FogLayer.png"/>
            <img class="layer-4" 
            :style="{'transform':'translateX(' + mouseX/200 + '%) translateY(' + mouseY/200 + '%)'}" src="images/TreeLayer.png"/>
        </div> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mouseX:0,
            mouseY:0,
        }
    },
    updated(){
        
    },
    methods:{
        createPointerAnimation:function(){
        },
        parallax:function(){
            this.mouseX = this.lerp(this.mouseX, event.clientX, 0.1);
            this.mouseY = this.lerp(this.mouseY, event.clientY, 0.1);
        },
        lerp:function(start, end, amt){
            return (1-amt) * start + amt * end;
        }
    }
}
</script>
