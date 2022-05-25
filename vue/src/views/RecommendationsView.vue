<template>
  <div>
    <!-- <login-modal></login-modal> -->
    <!-- <label for="intersections">교집합</label>
    <input type="radio" id="intersections" name="selectAlgo" v-model="intersections" value="Intersections" checked=true>
    <label for="questions">스무고개</label>
    <input type="radio" id="intersections" name="selectAlgo" v-model="questions" value="Questions"> -->
    <div style="height: 200px"></div>
    <div class="my-container mx-auto d-flex justify-content-center align-items-center flex-column ">
    
    <button v-show="clicked" class="btn btn-success my-3" @click="[selectIntersections(), hide()]">Recommend Movies based on your likes</button>
    <button v-show="clicked" class="btn btn-warning" @click="[selectQuestions(), hide()]">Recommend Movies based on few questions</button>
    
    <div>
      <intersections-algo v-if="selectedAlgo === 'intersections'"></intersections-algo>
      <questions-algo v-if="selectedAlgo === 'questions'"></questions-algo>
    </div>
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
      selectedAlgo: "",
      clicked: true
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
    },
    hide() {
      this.clicked = !this.clicked
    }
  }
}
</script>

<style>
.my-container {
  height: 600px;
}
</style>