<template>
  <div class="d-flex justify-content-center align-items-center flex-column">

    <genre-q v-if="randomQ[state] === 'genre'" @genre="getGenre" @changeQ="changeQ"></genre-q>
    <release-date-q v-if="randomQ[state] === 'releaseDate'" @releaseDate="getReleaseDate" @changeQ="changeQ"></release-date-q>
    <runtime-q v-if="randomQ[state] === 'runtime'" @runtime="getRuntime" @changeQ="changeQ"></runtime-q>

    
    <div class="d-flex" v-if="state > 2">
      <!-- {{ questions }} -->
      <div v-if="(state > 2) && (!isFinished)" class="fs-2 text-center">Just a minute..We are choosing carefully<i class="fas fa-spinner fa-pulse"></i></div>
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
    <!-- <div class="fs-2">Here's Our Recommendations. Hope you enjoy it!</div>  -->
    </div>

    <button class="btn btn-light my-5 back-btn" @click="goBack">Back</button>

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
    },
    isFinished () {
      return !!this.questions
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
    poster_url (poster_path) {
      return `https://image.tmdb.org/t/p/w500` + poster_path
    },
    goBack () {
      this.state = null
      this.genre = null
      this.releaseDate = null
      this.runtime = null
      this.$emit("reset")
    }
  },
  created () {
    this.state = 0
    this.genre = String(this.getRandomInt(1, 6))
    this.releaseDate = String(this.getRandomInt(1, 5))
    this.runtime = String(this.getRandomInt(1, 5))
  },
  destroyed () {
    this.fetchQuestions({ genre: "exit" })
  }
}
</script>

<style>
/* .hideAfter5Sec {
  animation: hideAnimation 0s ease-in 3s;
  animation-fill-mode: forwards;
}

@keyframes hideAnimation {
  to {
    visibility: hidden;
    width: 0;
    height: 0;
  }
} */

.back-btn {
  right: 0;
}
</style>