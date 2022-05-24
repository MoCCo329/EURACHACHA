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
        <div class="col-3"></div>
        <div class="router-view col-9">
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
<<<<<<< HEAD
#app {
  background-color: black;
  color: white;
=======
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
#app {
  background-color: rgba(31, 36, 46, 0.534);
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 60vh;
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
>>>>>>> dcbba651858b2ff60666c639b93a388131039392
}
</style>
