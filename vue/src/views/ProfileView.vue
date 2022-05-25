<template>
  <div>
    <div class="my-3 fs-3 fw-bold">Profile</div>

    <hr>
    <!-- <p>{{ profile.username }} Profile</p> -->
    <div class="my-3 fs-3 fw-bold">{{ profile.username }}'s Profile</div>
    <!-- <p>좋아요한 영화들 : {{ profile.like_movies }}</p> -->
    <div class="my-3 fs-3 fw-bold">Movies {{ profile.username }} liked</div>
    <div>
      <swiper
      class="swiper"
      :options="swiperOption"
      >
        <swiper-slide class="bg-black" v-for="movie in profile.like_movies" :key="movie.pk">
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
    <div class="my-3 fs-3 fw-bold">{{ profile.username }}'s reviews</div>
    <!-- <p>작성한 리뷰들 : {{ profile.reviews }}</p> -->
    <div v-for="review in profile.reviews" :key="review.pk">
      <div class="card mb-3 bg-black" style="max-width: 450px;">
        <div class="row g-0">
          <div class="col-md-3">
            <router-link :to="{ name: 'detail', params: { moviePk: review.movie.pk } }">
            <img :src="poster_url(review.movie.poster_path)" class="img-fluid rounded-start" alt="...">
            </router-link>         
          </div>
          <div class="col-md-9">
            <div class="card-body mt-3">
              <!-- <h5 class="card-title">Card title</h5> -->
              <i class="fa-solid fa-star">{{ review.score }}</i>
              <p class="card-text">{{review.content}}</p>
              
              <p class="card-text">last edit : {{review.updated_at | getDate}}  </p>
              <!-- <p class="card-text"><small>
                last edit : {{review.updated_at}}                
                </small></p> -->
            </div>
          </div>
        </div>
      </div> 
    </div>
    
    <!-- <login-modal></login-modal> -->
  </div>
</template>

<script>
// import LoginModal from "../components/Accounts/LoginModal.vue"
import { mapGetters, mapActions } from "vuex"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ProfileView",
  components: {
    // LoginModal,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["profile"])
  },
  methods: {
    ...mapActions(["fetchProfile", "fetch"]),
    poster_url(poster_path) {
      return `https://image.tmdb.org/t/p/w500` + poster_path
    }
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
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
  filters: {
    getDate(date) {
      return date.slice(0,10) +' '+date.slice(11,19)
    }
  }
}
</script>

<style>

</style>