<template>
  <div>
    <div class="search-input">
      <p class="my-3 fs-3 fw-bold">Search</p>

      <input v-model="input" @keyup.enter="clickSearch" type="text">
      <button @click="clickSearch" class="btn bg-primary search-btn"><div class="search-icon"><i class='bx bx-search-alt-2'></i></div> Search</button>
    </div>
    
    
    {{ searchResponse }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "SearchMovieView",
  data () {
    return {
      input: "",
    }
  },
  computed: {
    ...mapGetters(["searchResponse"])
  },
  methods: {
    ...mapActions(["fetchSearch"]),
    clickSearch () {
      this.fetchSearch(this.input)
      this.input = ""
    }
  },
  destroyed () {
    this.fetchSearch("")
  }
}
</script>

<style>
.search-input {
  min-height: 400px;
}
.search-input input {
  height: 45px;
}
.search-btn {
  height: 45px;
  display: flex;
  justify-content: center;

}
.search-icon {
  margin: 0;
  padding-top: 2px;
  bottom: 0;
}
</style>