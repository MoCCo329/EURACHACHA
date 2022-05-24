<template>
  <div>
    여기는 스무고개
    {{ questions }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "QuestionsAlgo",
  data () {
    return {
      genre: [],
      releaseDate: [],
      popularity: [],
      runtime: [],
      budget: [],
      revenue: [],
    }
  },
  computed: {
    ...mapGetters(["questions"])
  },
  methods: {
    ...mapActions(["fetchQuestions"])

  },
  created () {
    this.fetchQuestions()
  },

  // questions () {
  //   const randomClassify =
  //   [this.genre, this.releaseDate, this.popularity, this.runtime, this.budget, this.revenue]
  //   .sort(() => Math.random() - 0.5)

  //   randomClassify.forEach((element) => {
  //     if (element === []) {

  //     }
  //   })
  // },
}
</script>

<style>

</style>