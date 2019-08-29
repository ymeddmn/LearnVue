<template>
  <div>
    <input v-model="question"/>
    <span>{{answer}}</span>
  </div>
</template>

<script>
  export default {
    name: "watch",
    data() {
      return {
        question: 12,
        answer: 12

      }
    },
    methods: {},
    watch: {
      question() {//question的内容改变的时候改变answer的值，这个方法名必须和声明的question一致
        this.answer = '请听下一题'
      }
    }
  }
</script>

<style scoped>

</style>
