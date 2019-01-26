<style>
@import '../assets/css/joel-site.css';

.skills{
    width: 100%;
    margin: 25px;
    display:inline-flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    animation: bottomEaseIn 3s;
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
}

.circle span{
    color: #ffffff;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
}

.xtitle{
    text-align: center;
    margin: auto;
}
</style>

<template>
    <div class="what-page">
        <h1 class="xtitle"></h1>
        <div class="skills">
            <div class="circle" v-for="skill in textConfig.skills" :key="skill"><span>{{skill}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'what-page',
    props:{
        textConfig:{}
    },
    data(){
        return{

        }
    }
}
</script>
