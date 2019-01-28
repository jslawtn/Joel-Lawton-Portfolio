<template>
    <div class="where-page">
        <div class="container-box">
            <h1 class="container-title container-out">OOPS...</h1>
            <div class="container-body">
                <p>{{textConfig.aliens}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'where-page',
    props:{
        textConfig:{}
    }
}
</script>
