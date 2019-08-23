<style scoped>
.box{
    max-height: 300px;
    background-color: rgba(255, 255, 255, 0.2);
}

.box:hover{
    cursor:pointer;
}
</style>

<template>
    <div class="container fade-up">
        <div class="segment-top">
            <div>
                <h2 class="d-inline">My Work</h2>
                <button class="float-right d-inline btn back-btn" v-on:click="back()"><span style="color:white; font-family: gothicBold;">About <i class="fa fa-arrow-right"></i></span></button>
            </div>
            <div class="segment-top">
                <div class="card box" v-on:click="getGame()">
                    <div class="card-body">
                        <h1>Monster Woods</h1>
                        <p>Monster Woods is a 2D platformer game developed using the Unity engine.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line
import router from '../router';
export default {
    name: 'work',
    methods:{
        getGame(){
            router.push('/monster-in-the-woods')
        },
        back(){
            router.push('/about')
        }
    }
}
</script>
