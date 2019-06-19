<style scoped>
.twitter-timeline{
    position: absolute;
    right: 0;
}
</style>

<template>
    <div class="container fade-up">
        <!-- <a class="twitter-timeline" data-width="300" data-height="500" href="https://twitter.com/JoelLawton3?ref_src=twsrc%5Etfw">Tweets by JoelLawton3</a>  -->
        <div class="segment-top">
            <h2>Introduction</h2>
            <p>Hey there, I'm Joel Lawton, a games and font-end developer from Manchester, UK.</p>
        </div>
        <div class="segment-top row">
            <div class="col-5">
                <h2>Experience</h2>
            </div>
            <div class="col">
                <ul class="content-list">
                    <li class="mb-5">
                        <div class="">
                            <p class="m-0">Graduate Developer - Interact</p>
                            <p class="m-0">May 2018 - present</p>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div class="">
                            <p class="m-0">Computer and Video Games - Salford University</p>
                            <p class="m-0">Sep 2015 - May 2018</p>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div class="">
                            <p class="m-0">Interactive Media - Bury College</p>
                            <p class="m-0">Sep 2013 - Jun 2015</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created: function(){
        let twitterBoard = document.createElement('script');
        twitterBoard.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        document.body.appendChild(twitterBoard);
    }
}
</script>

<style>

</style>