<template>
  <div>
    <!-- <login-modal></login-modal> -->
    <!-- <label for="intersections">교집합</label>
    <input type="radio" id="intersections" name="selectAlgo" v-model="intersections" value="Intersections" checked=true>
    <label for="questions">스무고개</label>
    <input type="radio" id="intersections" name="selectAlgo" v-model="questions" value="Questions"> -->
    
    <div style="height: 100px"></div>
    <div class="my-container mx-auto d-flex justify-content-center align-items-center flex-column ">
    <img src="../assets/main.gif" alt="recommendation-img" class="main-img">
    <button v-show="isclicked" class="reco-btn btn btn-light my-5 btn-lg" @click="[selectIntersections(), hide()]"> 1 : Based on Your Likes</button>
    <button v-show="isclicked" class="reco-btn btn btn-light btn-lg" @click="[selectQuestions(), hide()]"> 2 : Based on a few Questions</button>
    
    <div class="my-3">
      <intersections-algo v-if="selectedAlgo === 'intersections'" @reset="this.restart"></intersections-algo>
      <questions-algo v-if="selectedAlgo === 'questions'" @reset="this.restart"></questions-algo>
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
      clicked: true,
    }
  },
  computed: {
    isclicked () {
      return this.clicked
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
    },
    restart() {
      this.clicked = true
      this.selectedAlgo = ""
    }
  },
  created () {
    this.clicked = true
    this.selectedAlgo = ""
  }
}
</script>

<style>
.my-container {
  height: 600px;
}

.main-img {
  border-radius: 30px;
  width: 450px;
  height: 450px;
}

.reco-btn {
  min-width: 302px;
}
</style>