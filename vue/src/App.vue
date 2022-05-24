<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <nav-bar></nav-bar>
        </div>
          
        <div class="col-10">
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
#app {
  background-color: black;
  color: white;
}
</style>
