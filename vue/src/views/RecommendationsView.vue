<template>
  <div>
    <!-- <login-modal></login-modal> -->
    <!-- <label for="intersections">교집합</label>
    <input type="radio" id="intersections" name="selectAlgo" v-model="intersections" value="Intersections" checked=true>
    <label for="questions">스무고개</label>
    <input type="radio" id="intersections" name="selectAlgo" v-model="questions" value="Questions"> -->
    
    <button @click="selectIntersections">교집합</button>
    <button @click="selectQuestions">스무고개</button>
    <div>
      <intersections-algo v-if="selectedAlgo === 'intersections'"></intersections-algo>
      <questions-algo v-if="selectedAlgo === 'questions'"></questions-algo>
    </div>
  </div>
</template>

<script>
// import LoginModal from "../components/Accounts/LoginModal.vue"
import IntersectionsAlgo from "../components/Recommendations/IntersectionsAlgo.vue"
import QuestionsAlgo from "../components/Recommendations/QuestionsAlgo.vue"

export default {
  name: "RecommendationsView",
  components: {
    // LoginModal,
    IntersectionsAlgo,
    QuestionsAlgo,
  },
  data () {
    return {
      selectedAlgo: ""
    }
  },
  methods: {
    selectIntersections () {
      if (this.selectedAlgo !== "intersections") {
        this.selectedAlgo = "intersections"
      }
    },
    selectQuestions () {
      if (this.selectedAlgo !== "questions") {
        this.selectedAlgo = "questions"
      }
    }
  }
}
</script>

<style>

</style>