<template>
  <div id="app">
    <div class="sidebar">
      <div class="logo">
        <img class="logo-img" src="./assets/logo.png">
      </div>
      <!-- <i id="btn" class="bx bx-menu" ></i> -->
      <nav-bar class="nav-list"></nav-bar>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="router-view col-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import { mapActions } from "vuex"


  export default {
    name: "App",
    components: { NavBar },
    computed: {
    },
    methods: {
      ...mapActions(["fetchCurrentUser"])
    },
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
#app {
  position: relative;
  background-color: black;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  color: white;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  max-width: 18vh;
  width: 240px;
  background: #141517;
  padding: 6px 5px;
  overflow: hidden;
}
.sidebar .logo {
  width: 100%;
}
.sidebar .logo .logo-img {
  width: 100%;
}
.container {
  background-color: black;
}
</style>
