<template>
  <div>
    <!-- <login-modal></login-modal> -->
    <input type="radio" name="selectAlgo" v-model="selectedAlgo" value="Intersections" checked>교집합
    <input type="radio" name="selectAlgo" v-model="selectedAlgo" value="Questions">스무고개
    <div>
      <intersections-algo></intersections-algo>
      <questions-algo></questions-algo>
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
      selectedAlgo: ''
    }
  },
}
</script>

<style>

</style>