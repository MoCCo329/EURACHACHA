<template>
  <div id="app">
    <nav-bar></nav-bar>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { mapActions } from 'vuex'


  export default {
    name: 'App',
    components: { NavBar },
    methods: {
      ...mapActions([])
    },
    created() {
    }
  }
</script>

<style>

</style>
