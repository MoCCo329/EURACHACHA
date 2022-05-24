<template>
  <div>
    <div class="my-3 fs-3 fw-bold">MovieList</div>
    <swiper
    class="swiper"
    :options="swiperOption"
    >
      <swiper-slide class="bg-black" v-for="movie in movieList" :key="movie.pk">
        <router-link :to="{ name: 'detail', params: { moviePk: movie.pk } }">
          <div class="card" style="width: 12rem;">
            <img :src="poster_url(movie.poster_path)" class="card-img-top" alt="...">
            <div class="card-body position-absolute bottom-0 start-0">
              <p class="card-text text-white">{{ movie.title }}</p>
            </div>
          </div>
        </router-link>
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
        >
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "MovieList",
  computed: {
    ...mapGetters(["movieList"]),
  },
  methods: {
    ...mapActions(["fetchMovieList"]),
    poster_url(poster_path) {
      return `https://image.tmdb.org/t/p/w500`+ poster_path
    }
  },
  created () {
    this.fetchMovieList()
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
          swiperOption: { 
          slidesPerView: 5, 
          spaceBetween: 10, 
          slidesPerGroup: 5,
          loop: true, 
          pagination: { 
              el: '.swiper-pagination', 
              clickable: true, 
            }, 
          navigation: { 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev' 
          } 
      },
    }
  }
}
</script>

<style>

</style>