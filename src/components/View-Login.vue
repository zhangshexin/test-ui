<template>
 <div>
   <form v-if="!isReg">
     <div>用户名：
      <input type="text" v-model="name">
     </div>
     <div>密码：
      <input type="password" v-model="password">
     </div>
     <button id="a" type="button" @click="login()">登录</button>
     <button type="button" @click="reg()">注册</button>
   </form>
   <form v-else>
     <div>用户名:
     <input type="text" v-model="name"></div>
     <div>密码：
     <input type="password" v-model="password"></div>
     <div>再次输入密码
     <input type="password" v-model="repeat"></div>
     <button id="b" type="button" @click="addUser()">确定</button>
     <button type="button" @click="cancel()">取消</button>
   </form>
 </div>
</template>

<script>
export default {
  name: 'View-Login',
  data () {
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login () {
      // this.$router.push('/specialList')
      if (this.name.length === 0) { alert('用户名不能为空') } else if (this.password.length === 0) { alert('密码不能为空') }
      /* eslint-disable */
      this.axios.get('http://localhost:8090/ucenter/login', {
        params: {
          phoneNum: this.name,
          pwd: this.password
        }
      }).then((response) => {
        localStorage.setItem('user', response)
        this.$router.push('/specialList')
      }).catch((error) => {
        console.log(error)
      });
      /* eslint-enable */
    },
    reg () {
      this.isReg = true
    },
    addUser () {},
    cancel () {
      this.isReg = false
    }
  }
}
</script>

<style scoped>
  #a,#b{
    margin: 30px;
  }
</style>
