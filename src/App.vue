<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<NaveList></NaveList>-->
    <router-view/>
  </div>
</template>

<script>
import NaveList from './components/NaveList'
export default {
  name: 'App',
  components: {NaveList}
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
