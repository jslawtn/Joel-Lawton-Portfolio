<style>
.who-page{
    margin-top: 50px;
}
</style>

<template>
    <div class="who-page">
        <div class="container-box">
            <h1 class="container-title container-out">{{textConfig.hello}}</h1>
            <div class="container-body">
                <h2>joellawton65@gmail.com</h2>
                <div class="content-line"></div>
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
        }
    }
</script>
