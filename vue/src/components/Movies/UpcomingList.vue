<template>
  <div>
    여기는 Upcoming
    <ul>
      <li v-for="movie in upcoming" :key="movie.pk">
        <router-link :to="{ name: 'detail', params: { moviePk: movie.pk } }">
          {{ movie.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "UpcomingList",
  computed: {
    ...mapGetters(["upcoming"]),
  },
  methods: {
    ...mapActions(["fetchUpcoming"]),
  },
  created () {
    this.fetchUpcoming()
  }
}
</script>

<style>

</style>