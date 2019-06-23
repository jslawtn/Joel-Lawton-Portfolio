<template>
  <div class="container">
    <div class="mb-4">
      <div class="d-flex justify-content-center">
        <div class="text-center main-title">
          <h1>Dream Big</h1>
          <p>Hello my name is Joel, a front-end and games developer from Manchester</p>
          <router-link to="/About"><button class="btn btn-main">About Me</button></router-link>
          <router-link to="/Work"><button class="btn btn-main">Work</button></router-link>
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