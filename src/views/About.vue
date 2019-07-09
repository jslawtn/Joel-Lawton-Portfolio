<style scoped>
.about-me{
    max-height: 600px;
    overflow-y: auto;
    overflow-x: none;
}

::-webkit-scrollbar { 
    display: none; 
}
</style>

<template>
    <div class="container fade-up">
        <div class="segment-top">
            <div>
                <h2 class="d-inline">Introduction</h2>
                <button class="float-right d-inline btn back-btn" v-on:click="back()"><span style="color:white; font-family: gothicBold;">Work <i class="fa fa-arrow-right"></i></span></button>
            </div>
            <p>I'm Joel, a games and font-end developer from Manchester, UK. My passion for creative development and design has led me to use a multitude of digital tools to experiment and create.</p>
        </div>
        <div class="segment-top row">
            <div class="col-6">
                <h2>Journey</h2>
            </div>
            <div class="col">
                <ul class="content-list">
                    <li class="mb-5">
                        <div>
                            <p class="m-0">Graduate Developer - <span class="text-bold">Interact</span></p>
                            <p class="m-0">May 2018 - present</p>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div>
                            <p class="m-0">Computer and Video Games - <span class="text-bold">Salford University</span></p>
                            <p class="m-0">Sep 2015 - May 2018</p>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div>
                            <p class="m-0">Interactive Media - <span class="text-bold">Bury College</span></p>
                            <p class="m-0">Sep 2013 - Jun 2015</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line
import router from '../router';
export default {
    name: 'about',
    methods:{
        back(){
            router.push('/Work')
        }
    }
}
</script>