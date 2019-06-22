<template>
    <div class="container fade-up">
        <h1>My Work</h1>
        <unity src="games/WebTestBuild/Build/WebTestBuild.json" width="1000" height="600" unityLoader="games/WebTestBuild/Build/UnityLoader.js"></unity>
    </div>
</template>

<script>
 import Unity from 'vue-unity-webgl'
export default {
    nanme: 'work',
    components:{
        Unity
    }

}
</script>