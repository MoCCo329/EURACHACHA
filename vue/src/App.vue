<template>
  <div id="app">
    <div class="sidebar">
      <div class="logo">
        <img class="logo-img" src="../public/logo.png">
      </div>
      <i id="btn" class="bx bx-menu" ></i>
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
    methods: {
      ...mapActions(["fetchCurrentUser"])
    },
    created() {
      this.fetchCurrentUser()
    }
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
  background-color: black;
  position: relative;
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
  background: rgb(101, 62, 62);
  padding: 6px 5px;
  overflow: hidden;
}
.sidebar .logo {
  width: 100%;
}
.sidebar .logo .logo-img {
  width: 100%;
}
.sidebar #btn {
  display: flex;
  justify-content: right;
  color: white;
  font-size: 20px;
  width: 100%;
  line-height: 50px;
  transform: translateX(-50%)
}
</style>
