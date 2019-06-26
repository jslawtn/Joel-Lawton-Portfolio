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
            <div class="row d-flex justify-content-center">
                <div class="card box w-100" v-on:click="get()">
                    <div class="card-body">
                        <h1>Unity</h1>
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
            router.push('/web-test')
        }
    }
}
</script>
