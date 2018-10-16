    <template>
    <div class="tabs">
      <router-link to="/tuicun">
        <span class="tabs_txt">推存</span>
      </router-link>
      <router-link to="/geshou">
        <span class="tabs_txt">歌手</span>
      </router-link>
      <router-link to="/paihang">
        <span class="tabs_txt">排行</span>
      </router-link>
      <router-link to="/sousuo">
        <span class="tabs_txt">搜索</span>
      </router-link>
      </div>
    </template>
    <script >
      export default{

      }
    </script>
    <style lang="less" scoped>
    @import '~@/assets/less/variable.less';
      .tabs{
        height:44px;
        display:flex;
        a{
          flex:1;
          text-align:center;
          line-height:44px;
          color:@color-text-ll;
          &.router-link-active{
            color:@color-theme;
            .tabs_txt{
              border-bottom:3px solid @color-theme;
              margin-top:6px;
            }
          }

        }

      }
    </style>
