<template>
  <div>
    <login-modal></login-modal>
    <select-algo></select-algo>
    <intersections-algo></intersections-algo>
    <questions-algo></questions-algo>
  </div>
</template>

<script>
import LoginModal from '../components/Accounts/LoginModal.vue'
import SelectAlgo from '../components/Recommendations/SelectAlgo.vue'
import IntersectionsAlgo from '../components/Recommendations/IntersectionsAlgo.vue'
import QuestionsAlgo from '../components/Recommendations/QuestionsAlgo.vue'

export default {
  name: 'RecommendationsView',
  components: {
    LoginModal,
    SelectAlgo,
    IntersectionsAlgo,
    QuestionsAlgo,
  }
}
</script>

<style>

</style>