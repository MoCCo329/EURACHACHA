<template>
  <div class="div-404">
    <h1>404 Not Found :(</h1>
    <img class="logo-img-404" src="../assets/logo404.png">
  </div>
</template>

<script>
export default {
  name: 'NotFound404View',
}
</script>

<style>
.div-404 {
  text-align: center;
  margin-top: 2rem;
  height: 1000px;
}
.logo-img-404 {
  position: relative;
  top: 40%;
}
.logo-img-404:hover {
  animation: rotate_image 1s linear infinite;
  transform-origin: 50% 50%;
}
@keyframes rotate_image{
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
}
</style>
