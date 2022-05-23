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
  computed: {
    ...mapGetters(["questions"])
  },
  methods: {
    ...mapActions(["fetchQuestions"])
  },
  created () {
    this.fetchQuestions()
  }
}
</script>

<style>

</style>