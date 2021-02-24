<template>
  <div id="app">
    <van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
<van-switch v-model="checked"  />
    <router-view></router-view>
    <div id="box"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  async created () {
    const data = await this.$http.get('/')
    console.log(data)
  }
}
</script>

<style lang="scss">
#app{
  #box{
    width: 375x;
    height: 200px;
    background-color: pink;
  }
}
</style>
