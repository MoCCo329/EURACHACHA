<template>
  <div class="questions-box">
    <p class="fs-2 text-center">{{ genreQ[state] }}</p> 
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
      genreQ: 
      ["나는 힙합같은 풍을 좋아한다", 
      "나는 상상력이 풍부하다고 생각한다", 
      "일어나지 않을법한 일들을 상상하는것이 재밌다", 
      "나는 mbti 2번째가 N 이다", 
      "나는 mbti 3번째가 F 이다", 
      "무서운 영화를 잘 보는 편이다"],
    }
  },
  computed: {
  },
  methods: {
    emitAns (idx, ans) {
      if (idx === 0) {
        if (ans) {
          return this.$emit("genre", "1")
        } else {
          this.state += 1
        }
      } else if (idx === 1 || idx === 2 || idx === 3) {
        if (ans) {
          return this.$emit("genre", "2")
        } else {
          this.state += 1
        }
      } else if (idx === 4) {
        if (ans) {
          return this.$emit("genre", "3")
        } else {
          this.state += 1
        }
      } else if (idx === 5) {
        if (ans) {
          return this.$emit("genre", "4")
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