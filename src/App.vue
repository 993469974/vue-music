<template>
  <div id="app">
  <music-header></music-header>
  <!--头部公共组件 -->
  <!--选项卡的公共组件 -->
  <tabs></tabs>
  <!--路由页面 -->
  <router-view></router-view>
  </div>
</template>

<script>
import MusicHeader from"@/components/musicheader"
import tabs from "@/components/tabs"
export default {
  components:{
    MusicHeader,
    tabs
    }
}
</script>

<style lang="less">
  @import '~@/assets/less/index.less';
</style>
