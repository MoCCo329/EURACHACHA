<template>
  <div>
    여기는 NowPlaying
    <ul>
      <li v-for="movie in nowPlaying" :key="movie.pk">
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
  name: "NowPlaying",
  computed: {
    ...mapGetters(["nowPlaying"]),
  },
  methods: {
    ...mapActions(["fetchNowPlaying"]),
  },
  created () {
    this.fetchNowPlaying()
  }
}
</script>

<style>

</style>