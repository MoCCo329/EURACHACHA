<template>
  <div>
    여기는 Popular
    <ul>
      <li v-for="movie in popular" :key="movie.pk">
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
  name: "PopularList",
  computed: {
    ...mapGetters(["popular"]),
  },
  methods: {
    ...mapActions(["fetchPopular"]),
  },
  created () {
    this.fetchPopular()
  }
}
</script>

<style>

</style>