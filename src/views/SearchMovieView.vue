<template>
  <div>
    <div class="search-input">
      <p class="my-3 fs-3 fw-bold">Search</p>
      <div class="d-flex justify-content-center align-items-center">
        <i class='bx bx-search-alt-2 fa-lg mx-2'></i>
        <input placeholder="Please enter movie title" class="px-4 box" v-model="input" @keyup.enter="clickSearch" type="text">
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center col-12 col-md-6 col-lg-4 col-xl-3" v-for='movie in searchResponse' :key="movie.id">
          <router-link :to="{ name: 'detail', params: { moviePk: movie.pk } }">
            <div class="a">
            <div class="card mb-3 screen" style="width: 15rem;">
              <img class="card-img-top" :src="poster_url(movie.poster_path)" alt="card-img">
              <div class="card-body">
                <h5 class="card-title top">{{ movie.title }}</h5>
                <div class="bottom">
                  <i class="fa-solid fa-hourglass-end"> {{ movie.runtime }}</i> min.
                  <div>{{ movie.tagline }}</div>
                </div>
              </div>
            </div>
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
.search-input div {
  margin-top: 5rem;
  margin-bottom: 2rem;
}
.box {
  width: 800px;
  height: 50px;
  border-radius: 20px;
}

.screen {
  position: relative;
  overflow: hidden;
  height: 400px;
}

.screen .top {
  position: absolute;
  bottom:-350%;
  /* left:30px; */
  z-index:2;
  color:#fff;
  font-size:20px;
  font-weight: 900;
  transition: all .35s;
}

.screen .bottom {
  position: absolute;
  top:100%;
  /* left:30px; */
  z-index:2;
  color:#fff;
  font-size:14px;
  transition: all .35s;
}

.screen:hover .top {
  bottom: 52%;
}

.screen:hover .bottom {
  top: 50%;
}

.screen::after {
  content: '';
  display: block;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 1;
  opacity: 0;
  transition: all .35s;
}

.a:hover .screen::after {
  opacity: 1;
}
</style>