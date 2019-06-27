<style scoped>
.box{
    max-height: 300px;
    max-width: 500px;
    background-color: rgba(255, 255, 255, 0.2);
}

.box:hover{
    cursor:pointer;
}
</style>

<template>
    <div class="container fade-up skew-1 p-3">
        <div class="segment-top">
            <h2>Wait! What Do I Do?</h2>
            <div class="row d-flex justify-content-center segment-top">
                <div class="card box w-100" v-on:click="get()">
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
        get(){
            router.push('/gorp')
        }
    }
}
</script>
