<template>
  <div>

    <genre-q v-if="randomQ[state] === 'genre'" @genre="getGenre" @changeQ="changeQ"></genre-q>
    <release-date-q v-if="randomQ[state] === 'releaseDate'" @releaseDate="getReleaseDate" @changeQ="changeQ"></release-date-q>
    <runtime-q v-if="randomQ[state] === 'runtime'" @runtime="getRuntime" @changeQ="changeQ"></runtime-q>

    <answer class="d-flex" v-if="state > 2">
      <!-- {{ questions }} -->
      <div class="mx-3" v-for="movie in questions" :key="movie.pk">
      <!-- <img :src="poster_url(movie.poster_path)" alt="..."> -->
      <router-link class="contain" :to="{ name: 'detail', params: { moviePk: movie.pk } }">
          <div class="front card-front ca" style="width: 12rem;">
          </div>

          <div class="card back ca" style="width: 12rem;">
            <img :src="poster_url(movie.poster_path)" class="card-img-top" alt="...">
            <div class="card-body position-absolute bottom-0 start-0">
              <p class="card-text text-white">{{ movie.title }}</p>
            </div>
          </div>
        </router-link>
    </div>
      
    </answer>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import genreQ from "./QuestionsAlgoCompo/genreQ.vue"
import releaseDateQ from "./QuestionsAlgoCompo/releaseDateQ.vue"
import runtimeQ from "./QuestionsAlgoCompo/runtimeQ.vue"

export default {
  name: "QuestionsAlgo",
  components: {
    genreQ,
    releaseDateQ,
    runtimeQ,
  },
  data () {
    return {
      state: null,
      genre: null,
      releaseDate: null,
      runtime: null,
      // popularity: [],
      // budget: [],
      // revenue: [],
    }
  },
  computed: {
    ...mapGetters(["questions"]),
    randomQ () {
      const randomList = ["genre", "releaseDate", "runtime"]
      .sort(() => Math.random() - 0.5)
      return randomList
    }
  },
  methods: {
    ...mapActions(["fetchQuestions"]),
    getGenre (genreIdx) {
      this.genre = genreIdx
      this.changeQ()
    },
    getReleaseDate (releaseDateIdx) {
      this.releaseDate = releaseDateIdx
      this.changeQ()
    },
    getRuntime (runtimeIdx) {
      this.runtime = runtimeIdx
      this.changeQ()
    },
    changeQ () {
      if (this.state === 2) {
        const data = {
          genre: this.genre,
          release_date: this.releaseDate,
          runtime: this.runtime
        }
        this.fetchQuestions(data)
      }
      this.state += 1
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    poster_url(poster_path) {
      return `https://image.tmdb.org/t/p/w500` + poster_path
    },
  },
  created () {
    this.state = 0
    this.genre = this.getRandomInt(1, 7)
    this.releaseDate = this.getRandomInt(1, 6)
    this.runtime = this.getRandomInt(1, 5)
  },
  // destroyed () {
  //   this.state = 0,
  // },
}
</script>

<style>

</style>