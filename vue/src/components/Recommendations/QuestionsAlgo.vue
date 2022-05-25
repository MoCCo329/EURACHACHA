<template>
  <div>
    여기는 스무고개

    <genre-q v-if="randomQ[state] === 'genre'" @genre="getGenre" @changeQ="changeQ"></genre-q>
    <release-date-q v-if="randomQ[state] === 'releaseDate'" @releaseDate="getReleaseDate" @changeQ="changeQ"></release-date-q>
    <runtime-q v-if="randomQ[state] === 'runtime'" @runtime="getRuntime" @changeQ="changeQ"></runtime-q>

    <answer v-if="state > 2">
      {{ questions }}
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
          runtime: this.runtime,
        }
        this.fetchQuestions(data)
      } else {
        this.state += 1
      }
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
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