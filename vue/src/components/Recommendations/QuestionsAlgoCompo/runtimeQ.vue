<template>
  <div class="questions-box">
    <p class="fs-2 text-center">{{ runtimeQ[state] }}</p> 
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
      runtimeQ:
      ["나는 쉽게 지루함을 느낀다", 
      "나는 집중력이 좋은것 같지 않다", 
      "긴 영화가 더 여운에 남는다고 생각한다",
      "복잡함 보단 느린 템포의 영화가 좋다"],
    }
  },
  computed: {
  },
  methods: {
    emitAns (idx, ans) {
      if (idx === 0) {
        if (ans) {
          return this.$emit("runtime", "1")
        } else {
          this.state += 1
        }
      } else if (idx === 1) {
        if (ans) {
          return this.$emit("runtime", "2")
        } else {
          this.state += 1
        }
      } else if (idx === 2) {
        if (ans) {
          return this.$emit("runtime", "3")
        } else {
          this.state += 1
        }
      } else if (idx === 3) {
        if (ans) {
          return this.$emit("runtime", "4")
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