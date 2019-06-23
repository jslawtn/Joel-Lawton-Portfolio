<template>
    <div class="container fade-up">@
        <div>
            <unity src="games/WebTestBuild/Build/WebTestBuild.json" width="1000" height="600" unityLoader="games/WebTestBuild/Build/UnityLoader.js"></unity>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line
import Unity from 'vue-unity-webgl';
export default {
    name: 'work',
    components:{
        Unity
    }
}
</script>