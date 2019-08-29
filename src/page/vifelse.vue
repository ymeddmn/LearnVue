<template>
  <div>
    <div>
      <span @click="setName()">用户名登陆</span> <input v-if="!isMobil"/>
    </div>
    <div>
      <span @click="setMobil()">手机号登陆</span><input v-if="isMobil"/>
    </div>

  </div>
</template>


<script>
  export default {
    name: "vifelse",
    data() {
      return {
        isMobil: true
      }
      person:{

      }
    },
    methods: {
      setName() {
        this.isMobil = false
      },
      setMobil() {
        this.isMobil = true
      }
    }
  }
</script>

<style scoped>

</style>
