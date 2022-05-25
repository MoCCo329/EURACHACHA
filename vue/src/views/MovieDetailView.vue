<template>
  <!-- <div class="main-div" :style="{ background: bg }"> -->
  <div>
    <div class="my-3 fs-3 fw-bold">MovieDetail</div>
    <!-- <div>{{ movieDetail }}</div> -->
    <!-- <img :src="poster_url(movieDetail.poster_path)" alt="...">  -->
    <!-- <img :src="poster_url(movieDetail.backdrop_path)" alt="..."> -->
    <!-- <div>{{movieDetail.title}}</div>
    <div>{{movieDetail.release_date}}</div>
    <div>{{movieDetail.overview}}</div>
    <div>{{movieDetail.runtime}}</div>
    <div>{{movieDetail.vote_average}}</div> -->
    <div class="card mb-3 bg-black ms-5" style="max-width: 900px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="poster_url(movieDetail.poster_path)" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body mt-5 ms-3">
            <h5 class="card-title fs-1 mb-3">{{movieDetail.title}}</h5>
            <p class="card-text">{{movieDetail.overview}}</p>
            <p class="card-text">
              Genre:
              <span v-for="genre in movieDetail.genres" :key="genre.name">
                {{genre.name}}
              </span>
            </p>
            <div class="card-detail">
              <p class="card-text"><small>
                <p><i class="fa-solid fa-calendar"> {{movieDetail.release_date}}</i> </p> 
                <i class="fa-solid fa-hourglass-end"> {{movieDetail.runtime}} min</i>    
              </small></p>
              <!-- 사용자가 누르면 하트 채워지고 비워지고 해야함 -->
              <p><i class="fa-solid fa-heart" @click="doLikeMovie"></i> {{ like_count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <hr>
    <!-- ReleaseDate Related : <br>{{ movieRelatedReleaseDate }} -->
    <div class="my-3 fs-3 fw-bold">ReleaseDate Related</div>
    <swiper
    class="swiper"
    :options="swiperOption"
    >
      <swiper-slide class="bg-black" v-for="movie in movieRelatedReleaseDate" :key="movie.pk">
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

    <hr>

    <!-- Genre Related: <br>{{ movieRelatedGenre }} -->
    <div class="my-3 fs-3 fw-bold">Genre Related</div>
    <swiper
    class="swiper"
    :options="swiperOption"
    >
      <swiper-slide class="bg-black" v-for="movie in movieRelatedGenre" :key="movie.pk">
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
    <hr>

    <movie-review-list></movie-review-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import MovieReviewList from "../components/Reviews/MovieReviewList.vue"

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "MovieDetailView",
  components: {
    MovieReviewList,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["movieDetail", "movieRelatedReleaseDate", "movieRelatedGenre"]),
    like_count () {
      return this.movieDetail.like_users?.length
    },
    backdropPath () {
      return this.movieDetail.backdrop_path
    },
  },
  methods: {
    ...mapActions(["fetchMovieDetail", "fetchMovieDetailRelated", "likeMovie", "fetchBackgroundImage"]),
    doLikeMovie () {
      return this.likeMovie(this.$route.params.moviePk)
    },
    poster_url(poster_path) {
      return `https://image.tmdb.org/t/p/w500` + poster_path
    },
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
  },
  created () {
    const moviePk = this.$route.params.moviePk
    this.fetchMovieDetail(moviePk)
    this.fetchMovieDetailRelated(moviePk)
    const backdropPath = this.movieDetail.backdrop_path
    console.log(backdropPath)
    this.fetchBackgroundImage(`url(https://image.tmdb.org/t/p/w500${backdropPath})`)
  },
  destroyed () {
    this.fetchBackgroundImage("")
  }
}
</script>

<style>
.card-detail {
  word-spacing: 3px;
}
</style>