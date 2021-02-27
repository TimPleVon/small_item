<template>
  <div class="login">
      <van-nav-bar title="登录"/>
<!-- 手机号 -->
<van-cell-group>
  <van-field v-model="mobile"
  label="手机号"
  placeholder="请输入手机号"
  required
  :error-message='errorMobile'
  @input="validate"
  />
</van-cell-group>
<!-- 验证码 -->
<van-field
    v-model="code"
    required
    label="验证码"
    placeholder="请输入验证码"
  :error-message='errorCode'
  @input="validate"
  />
  <!-- 登录按钮 -->
  <div class="btn-wrap">
  <van-button type="info" @click="login">登录按钮</van-button>
</div>
<!--  -->
<van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
<van-button type="primary" @click="getUserFollowings">获取关注列表</van-button>

  </div>
</template>

<script>
import { reqLogin, regetUserInfo, regetUserFollowings } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '',
      code: '',
      errorMobile: '',
      errorCode: ''
    }
  },
  methods: {
    ...mapMutations('user', ['setTokenInfo']),
    validate () {
      if (this.mobile.trim().length === 0) {
        this.errorMobile = '请输入手机号'
        return false
      }
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.errorMobile = '请输入正确的手机号'
        return false
      }
      this.errorMobile = ''
      if (!this.code.trim().length) {
        this.errorCode = '请输入验证码'
        return false
      }
      if (!/^\d{6}$/.test(this.code)) {
        this.errorCode = '验证码格式错误'
        return false
      }
      this.errorCode = ''
      return true
    },
    async login () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        overlay: true,
        duration: 0
      })
      const boo = this.validate()
      // console.log(boo)
      if (boo) {
        // const data = await this.$http({
        //   url: 'v1_0/authorizations',
        //   method: 'post',
        //   data: {
        //     mobile: this.mobile,
        //     code: this.code
        //   }
        // })
        const { data } = await reqLogin(this.mobile, this.code)
        // console.log(data)
        // this.$store.commit('user/setTokenInfo', data.data.data)
        this.setTokenInfo(data)
      }
      this.$toast.success('登陆成功')
      this.$router.push('/')
    },
    async getUserInfo () {
      const data = await regetUserInfo()
      console.log(data)
    },
    async getUserFollowings () {
      const data = await regetUserFollowings()
      console.log(data)
    }
  }

}
</script>

<style lang="scss" scoped>
.login{
  .btn-wrap{
    padding:20px;
    .van-button{
      width: 100%;
      color: #fff;
      border-radius: 5px;
    }
  }
}
</style>
