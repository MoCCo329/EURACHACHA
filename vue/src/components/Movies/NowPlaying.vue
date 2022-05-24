<template>
  <div>
    여기는 NowPlaying
    <div class="d-flex">
      <div v-for="movie in nowPlaying" :key="movie.pk">
        <router-link :to="{ name: 'detail', params: { moviePk: movie.pk } }">
          {{ movie.title }}
        </router-link>
      </div>
    </div>
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