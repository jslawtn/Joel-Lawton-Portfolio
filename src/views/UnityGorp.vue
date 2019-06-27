<template>
    <div class="container fade-up">@
        <div>
            <unity src="games/Gorp/Build/GorpBuild.json" width="1000" height="600" unityLoader="games/Gorp/Build/UnityLoader.js"></unity>
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