<template>
  <div id="home">
    <div class="root">
      <router-link to="/login">
        <div>
          点击跳转login
        </div>
      </router-link>
      <router-link to="/vmodel">
        <div>
          点击跳转vmodel
        </div>
      </router-link>
      <router-link to="/watch">
        <div>
          点击跳转watch
        </div>
      </router-link>
      <router-link to="/vifelse">
        <div>
          点击跳转vifelse
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: "home",
    methods: {},
    created() {
      console.log('created')
    }
  }
</script>

<style scoped>

</style>
