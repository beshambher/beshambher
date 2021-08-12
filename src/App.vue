<template>
  <div id="app">
    <div v-if="false">
      <img alt="Vue logo" src="./assets/images/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

    <Resume/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Resume from './components/Resume.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Resume
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
