<template>
  <div>
    <div>
      {{ runtimeQ[state] }}
      <button @click="emitAns(state, true)">T</button>
      <button @click="emitAns(state, false)">F</button>
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
    // randomQ () {
    //   return this.genRandomInt()
    // }
  },
  methods: {
    // getRandomInt () {
    //   const min = Math.ceil(0)
    //   const max = Math.floor(6)
    //   return Math.floor(Math.random() * (max - min)) + min
    // },
    emitAns (idx, ans) {
      if (idx === 0) {
        if (ans) {
          return this.$emit("runtime", 1)
        } else {
          this.state += 1
        }
      } else if (idx === 1) {
        if (ans) {
          return this.$emit("runtime", 2)
        } else {
          this.state += 1
        }
      } else if (idx === 2) {
        if (ans) {
          return this.$emit("runtime", 3)
        } else {
          this.state += 1
        }
      } else if (idx === 3) {
        if (ans) {
          return this.$emit("runtime", 4)
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

</style>