<template>
  <div>
    <ul>
      <li v-for="movie in movieList" :key="movie.pk">
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
  name: "MovieList",
  computed: {
    ...mapGetters(["movieList"]),
  },
  methods: {
    ...mapActions(["fetchMovieList"]),
  },
  created () {
    this.fetchMovieList()
  }
}
</script>

<style>

</style>