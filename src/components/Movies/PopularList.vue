<template>
  <div>
    <div class="my-3 fs-3 fw-bold">Popular</div>
    <swiper
    class="swiper"
    :options="swiperOption"
    >
      <swiper-slide class="bg-black" v-for="movie in popular" :key="movie.pk">
        <router-link :to="{ name: 'detail', params: { moviePk: movie.pk } }">
          <div class="a">
          <div class="card screen" style="width: 12rem;">
            <img :src="poster_url(movie.poster_path)" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="top">{{ movie.title }}</div>
              <div class="bottom">
                <i class="fa-solid fa-hourglass-end"> {{ movie.runtime }}</i> min.
                <div>{{movie.tagline}}</div>
              </div>     
            </div>
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
  name: "PopularList",
  computed: {
    ...mapGetters(["popular"]),
  },
  methods: {
    ...mapActions(["fetchPopular"]),
    poster_url(poster_path) {
      return `https://image.tmdb.org/t/p/w500` + poster_path
    }
  },
  created () {
    this.fetchPopular()
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
.screen {
  position: relative;
  overflow: hidden;
  height: 285px;
}

.screen .top {
  position: absolute;
  bottom:-350%;
  /* left:30px; */
  z-index:2;
  color:#fff;
  font-size:20px;
  font-weight: 900;
  transition: all .35s;
}

.screen .bottom {
  position: absolute;
  top:100%;
  /* left:30px; */
  z-index:2;
  color:#fff;
  font-size:14px;
  transition: all .35s;
}

.screen:hover .top {
  bottom: 52%;
}

.screen:hover .bottom {
  top: 50%;
}

.screen::after {
  content: '';
  display: block;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 1;
  opacity: 0;
  transition: all .35s;
}

.a:hover .screen::after {
  opacity: 1;
}
</style>