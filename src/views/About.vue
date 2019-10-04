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
            <div class="col-3 col-md-6">
                <h2>Journey</h2>
            </div>
            <div class="col">
                <ul class="content-list">
                    <li class="mb-5 d-flex justify-content-start">
                        <div id="interact" class="bullit-circle"></div>
                        <div class="pl-5">
                            <p class="m-0">Graduate Developer - <span class="text-bold">Interact</span></p>
                            <p class="m-0">May 2018 - present</p>
                        </div>
                    </li>
                    <li class="mb-5 d-flex justify-content-start">
                        <div id="matmi" class="bullit-circle"></div>
                        <div class="pl-5">
                            <p class="m-0">Developer Placement - <span class="text-bold">Matmi</span></p>
                            <p class="m-0">May 2017 - Aug 2017</p>
                        </div>
                    </li>
                    <li class="mb-5 d-flex justify-content-start">
                        <div id="university" class="bullit-circle"></div>
                        <div class="pl-5">
                            <p class="m-0">Computer and Video Games - <span class="text-bold">Salford University</span></p>
                            <p class="m-0">Sep 2015 - May 2018</p>
                        </div>
                    </li>
                    <li class="mb-5 d-flex justify-content-start">
                        <div id="college" class="bullit-circle"></div>
                        <div class="pl-5">
                            <p class="m-0">Interactive Media - <span class="text-bold">Bury College</span></p>
                            <p class="m-0">Sep 2013 - Jun 2015</p>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Tool tips -->

            <b-tooltip target="interact" tityle="Interact">
                <h5>Interact</h5>
                 
            </b-tooltip>

            <b-tooltip target="matmi" title="Interact">
                <h5>Matmi</h5>
                At Matmi I helped develop on an existing web application using JS, Flambe and Haxe According to client specifications. 
            </b-tooltip>

            <b-tooltip target="university" title="Interact">
                <h5>Salford University</h5>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
            </b-tooltip>

            <b-tooltip target="college" title="Interact">
                <h5>Bury college</h5>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
            </b-tooltip>
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
            router.push('/work')
        }
    }
}
</script>