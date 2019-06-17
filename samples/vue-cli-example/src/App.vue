<template>
  <div id="app">
    <vue-logo width=200 height=200></vue-logo>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import VueLogo from './components/vue-logo.frag'
import HelloWorld from './components/HelloWorld.vue'



export default {
  name: 'app',
  components: {
    "vue-logo": VueLogo,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
