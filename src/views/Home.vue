<template>
  <div class="container">
    <div class="mb-4">
      <div class="d-flex justify-content-center">
        <div class="text-center main-title fade-up">
          <h1>Dream <span class="grow">Big</span></h1>
          <p>Hello my name is Joel, a front-end and games developer from Manchester</p>
          <router-link to="/about"><button class="btn btn-main">About Me</button></router-link>
          <router-link to="/work"><button class="btn btn-main">Work</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>