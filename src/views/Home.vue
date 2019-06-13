<template>
  <div class="container fade-up">
    <div class="mb-4">
      <h1>Welcome</h1>
      <h5>Welcome to my site</h5>
    </div>
    <ContentRow></ContentRow>
  </div>
</template>

<script>
import ContentRow from '../components/ContentRow.vue';
export default {
  name: 'home',
  components:{
    ContentRow
  }
}
</script>