<template>
  <div>
    <div class="search-input">
      <p class="my-3 fs-3 fw-bold">Search</p>
      <div class="d-flex justify-content-center mb-3">
        <i class='bx bx-search-alt-2 fa-lg'></i>
        <input placeholder="  Please enter movie title" class="box" v-model="input" @keyup.enter="clickSearch" type="text">
      </div>
      <!-- <button @click="clickSearch" class="btn bg-primary search-btn"><div class="search-icon"><i class='bx bx-search-alt-2'></i></div> Search</button> -->
    </div>
    
    <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center col-12 col-md-6 col-lg-4 col-xl-3" v-for='movie in searchResponse' :key="movie.id">
        <router-link :to="{ name: 'detail', params: { moviePk: movie.pk } }">
        <div class="card mb-3" style="width: 15rem;">
          <img class="card-img-top" :src="poster_url(movie.poster_path)" alt>
          <!-- <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview }}</p>
          </div> -->
        </div>
        </router-link>
      </div>
    </div>
    </div>
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
    },
    poster_url(poster_path) {
      return `https://image.tmdb.org/t/p/w500` + poster_path
    }
  },
  destroyed () {
    this.fetchSearch("")
  }
}
</script>

<style>
.box {
  width: 800px;
  height: 50px;
  border-radius: 20px;
}
/* .search-input {
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
} */
</style>