<template>
  <div class="questions-box">
    <p class="fs-2 text-center">{{ releaseDateQ[state] }}</p> 
    <div class="d-flex justify-content-around mt-5 choice-questions">
      <button class="btn btn-primary" @click="emitAns(state, true)">Yes</button>
      <button class="btn btn-danger" @click="emitAns(state, false)">No</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "genreQ",
  data () {
    return {
      state: 0,
      releaseDateQ: 
      ["투박한 고전영화에도 나름의 매력을 느낀다", 
      "나는 오래됐어도 유명한 영화는 찾아본다", 
      "나는 가끔 부모님은 어떤 영화를 보고 자라셨는지 궁금하다", 
      "내가 어렸을 때 개봉했던 영화들이 궁금하다",      
      "평소 영화관에서 최신영화를 보는것을 좋아한다"],
    }
  },
  computed: {
  },
  methods: {
    emitAns (idx, ans) {
      if (idx === 0 || idx === 1) {
        if (ans) {
          return this.$emit("releaseDate", "1")
        } else {
          this.state += 1
        }
      } else if (idx === 2) {
        if (ans) {
          return this.$emit("releaseDate", "2")
        } else {
          this.state += 1
        }
      } else if (idx === 3) {
        if (ans) {
          return this.$emit("releaseDate", "3")
        } else {
          this.state += 1
        }
      } else if (idx === 4) {
        if (ans) {
          return this.$emit("releaseDate", "4")
        } else {
          this.state = 0
          return this.$emit("changeQ")
        }
      }
    },
  },
  created () {
    this.state = 0
  },
}
</script>

<style>
.choice-questions {
  width: 850px;
}
.questions-box {
  min-width: 850px
}
</style>