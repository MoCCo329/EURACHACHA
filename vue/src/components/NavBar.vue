<template>
  <nav>
    {{ currentUser }}
    <ul class="nav-list">
      <li>
        <router-link :to="{ name: 'home' }">
          <i class='bx bx-home' ></i>
          <span class="links-name">Home</span>
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'search' }">
          <i class='bx bx-search-alt-2'></i>
          <span class="links-name">Search</span>
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'recommendations' }">
          <i class='bx bxs-direction-right' ></i>
          <span class="links-name">Recommendations</span>
        </router-link>
      </li>
      
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'articles' }">
          <i class='bx bxs-book-content' ></i>
          <span class="links-name"> Articles</span>
        </router-link>
      </li>

      <li class="nav-bottom2" v-if="isLoggedIn">
        <router-link :to="{ name: 'profile', params: { username } }">
          <i class='bx bx-user' ></i>
          <span class="links-name">Profile</span>
        </router-link>
      </li>

      <li class="nav-bottom1" v-if="!isLoggedIn">
        <router-link :to="{ name: 'login' }">
          <i class='bx bx-log-in' ></i>
          <span class="links-name"> Login</span>
        </router-link>
      </li>

      <li class="nav-bottom1" v-if="isLoggedIn">
        <router-link :to="{ name: 'logout' }">
          <i class='bx bx-log-out' ></i>
          <span class="links-name"> Logout</span>
        </router-link>
      </li>

      <li class="nav-bottom2" v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }">
          <i class='bx bx-user-plus' ></i>
          <span class="links-name"> Signup</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["isLoggedIn", "currentUser"]),
    username () {
      return this.currentUser.username ? this.currentUser.username : "guest"  // 로그인 안됐으면 guest
    },
  },
}
</script>
<style>
.nav-list {
  margin: 0;
  padding: 0;
}
.nav-list li {
  height: 50px;
  width: 100%;
  list-style: none;
}
.nav-list .nav-bottom1 {
  bottom: 0;
  left: 0;
}
.nav-list .nav-bottom2 {
  bottom: 50px;
  left: 0;
}
.nav-list li a {
  display: flex;
  align-items: center;
  text-decoration: None;
  color: white;
  transition: all 0;
  border-radius: 12px;
}
.nav-list li a:hover{
  color: #11101d;
  background: white;
}
.nav-list li a i {
  height: 30%;
  min-width: 20%;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
</style>