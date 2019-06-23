<style scoped>
.box{
    height: 250px;
    width: 250px;
}

.box:hover{
    cursor:pointer;
}
</style>

<template>
    <div class="container fade-up">
        <h1>My Work</h1>
        <div>
            <div class="card box" v-on:click="get()">
                <div class="card-body">Web Test</div>
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
            router.push('/web-test')
        }
    }
}
</script>
