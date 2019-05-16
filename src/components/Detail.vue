<template>
  <div class="box">
    <h1>我是详细页面{{id}}</h1>
    <ul>
      <li>
        <div class="p1">
          {{obj.content}}
        </div>
        <div class="p2">
          <img :src="obj.imgUrl">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      obj: {},
      id: this.$route.query.ids
    }
  },
  mounted () {
    var url = '../../static/new.json'
    var self = this
    this.$axios.get(url, {
      params: {id: this.id}
    })
      .then(function (response) {
        self.obj = response.data.result.data[0]
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<!-----
1、html 标签开头的。如： a { text-decoration:none;} 这种直接应用到对应的 html 标签
2、. 开头的。 如： .mystyle { font-size:1.2em; } 这种应用到 class="mystyle" 的 html 标签上。
3、 #开头的。 如： #mystyle { color:#fff; } 这种是应用到 id="mystyle" 的 html 标签上。----->
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
  }
  a{
    color:#42b983;
  }
  .box{
    width: 980px;
  }
  .p1{
    float:left;
    width:700px;
  }
  .p2{
    float:right;
  }
</style>
