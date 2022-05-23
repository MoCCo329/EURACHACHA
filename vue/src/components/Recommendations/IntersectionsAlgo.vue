<template>
  <div>
    여기는 교집합
    {{ intersections }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "IntersectionsAlgo",
  computed: {
    ...mapGetters(["intersections"])
  },
  methods: {
    ...mapActions(["fetchIntersections"])
  },
  created () {
    this.fetchIntersections()
  }
}
</script>

<style>

</style>