<template>
  <div class='box'>
    <ul>
      <li v-bind:key="item" v-for='item in arr'>
        <div class='p1'>
          <router-link :to="{path:'/detail',query:{ids:item.id}}">
            {{item.content}}
          </router-link>
        </div>

        <div class="p2">
          <img alt="" :src="item.imgUrl">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Hello world',
  data () { return {arr: []} },
  mounted () {
    var url = '../../static/news.json'
    var self = this
    this.$axios.get(url).then(function (response) {
      console.log(response.data.result.data)
      self.arr = response.data.result.data
    }).catch(function (error) {
      console.log(error)
    })
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
  .box{
    width: 980px;
  }
  .p1{
    float:left;
    width:780px;
  }
  img{
    float:right;
  }
</style>
