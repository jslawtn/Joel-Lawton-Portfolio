<style>

@keyframes flip {
    from{
        transform:rotate3d(0,1,0, 90deg);
    }
    to{
        transform:rotate3d(0);
    }
}

.who-page{
    margin-top: 50px;
}

.container-box{
    margin: auto;
    max-width: 500px;
    height: auto;
    position: relative;
    background-color: #384152;
    box-shadow: 5px 5px 15px #0000003f;
    border-radius: 15px;
    padding: 15px;
    animation: flip 1s;
    
}

.container-title{
    color: #0000004f;
    position: absolute;
    font-weight: bold;
    font-size: 48px;
    top:-80px;
}

.container-body{
    color: #ffffff;
    font-size: 18px;
}
</style>

<template>
    <div class="who-page">
        <div class="container-box">
            <h1 class="container-title">{{textConfig.hello}}</h1>
            <div class="container-body">
                <h2>joellawton65@gmail.com</h2>
                <p>{{textConfig.bio}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'who-page',
        props:{
            textConfig:{}
        },
        data(){
            return{

            }
        }
    }
</script>
