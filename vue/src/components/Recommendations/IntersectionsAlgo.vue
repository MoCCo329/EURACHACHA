<template>
  <div class="d-flex">
    <!-- {{ intersections }} -->
    
    <div class="mx-5" v-for="movie in intersections" :key="movie.pk">
      <!-- <img :src="poster_url(movie.poster_path)" alt="..."> -->
      <router-link class="contain" :to="{ name: 'detail', params: { moviePk: movie.pk } }">
        <div class="front card-front ca" style="width: 12rem;">
        </div>

        <div class="card back ca" style="width: 12rem;">
          <img :src="poster_url(movie.poster_path)" class="card-img-top" alt="...">
          <div class="card-body position-absolute bottom-0 start-0">
            <p class="card-text text-white">{{ movie.title }}</p>
          </div>
        </div>
      </router-link>
    </div>

    <div v-if="intersections.length===0">There are too few movies you like to recommend. Please LIKE more movies</div>
    
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
    ...mapActions(["fetchIntersections"]),
    poster_url(poster_path) {
      return `https://image.tmdb.org/t/p/w500` + poster_path
    }
  },
  created () {
    this.fetchIntersections()
  }
}
</script>

<style>
.card-front {
  width: 200px;
  height: 300px;
}

.front {
  position: absolute;
  background: linear-gradient(#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
  transform: rotateY(-180deg);
}

.back {
  transform: rotateY(-180deg);
}

.contain:hover .back{
  transform: rotateY(0deg); /*y축을 기준으로 180도까지회전*/
}

.front {
  transform: rotateY(0deg);
}

.contain:hover .front{
  transform: rotateY(180deg);/*y축을 기준으로 0도 까지회전*/
}

.ca {
  backface-visibility: hidden;
  transition: 2s;
}
</style>