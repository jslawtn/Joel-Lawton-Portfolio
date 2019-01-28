<style>
@keyframes bottomEaseIn {
    from{
      opacity: 0;
      transform: translateY(50%);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
}

.bottom-ease{
    animation: bottomEaseIn 2s;
}

.skills{
    width: 100%;
    margin: 25px;
    display:inline-flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
}

.what-page{
    margin: 40px 25px 0 25px;
}

.circle{
    margin: 25px;
    text-align: center;
    line-height: 100px;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    box-shadow: 0 0 0 5px #ffffff;
    transition: 1s;
}

.circle:hover{
    transform: scale(1.2);
}

.circle span{
    color: #ffffff;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
}
</style>

<template>
    <div class="what-page">
    <div class="bottom-ease">
        <h1 class="container-title center">SKILLS.</h1>
        <div class="skills">
            <div class="circle" v-for="skill in textConfig.skills" :key="skill"><span>{{skill}}</span></div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'what-page',
    props:{
        textConfig:{}
    }
}
</script>
