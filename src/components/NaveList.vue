<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/duanzi">段子</router-link>
  </div>
</template>

<script>
export default {
  name: 'NaveList',
  data () {
    return {}
  }
}
</script>

<style scoped>
h1,h2{
  font-weight: normal;
}
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #42b983;
  }
</style>
