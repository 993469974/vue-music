<template>
      <div class="music-list">
        <div class="back" @click="back">
            <i class="icon-back"></i>
        </div>
        <h1 class="title">{{title}}</h1>
        <div class="bg-image" ref="bgImage" :style="bgImg">
            <div class="play-wrapper">
                <div ref="playBtn" class="play">
                    <i class="icon-play"></i>
                    <span class="text">随机播放全部</span>
                </div>
            </div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <!-- 加载列表 -->
        <scroll ref="scroll" class="list" @scroll="scroll" :listenScroll=true :probeType=3>
            <div class="song-list-wrapper">
                <div class="song-list">
                    <ul>
                        <li class="item" v-for="(item,index) in songList" :key="item.key">
                            <div class="rank">
                                <span class="text">{{index+1}}</span>
                            </div>
                            <div class="content">
                                <h2 class="name">{{item.songname}}</h2>
                                <p class="desc"><span v-for="b in item.singer" :key="b.key">{{b.name}} </span>{{item.albumname}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </scroll>
        <!-- <div class="loading-container">
            <loading></loading>
        </div> -->
    </div>
</template>

<script>
import Scroll from '@/components/scroll'
export default {
  props:{
    title:{
        type:String,
        default:""
    },
    bgUrl:{
        type:String,
        default:""
    },
    songList:{
        type:Array,
        default:""
    }
  },
  data(){
      return {
          scrollY:0
      }
  },
  mounted(){
      //获取背景图片的高度，并将活动区域的top设置成背景图片的高度
          this.bgHeight = this.$refs.bgImage.clientHeight
          
          this.$refs.scroll.$el.style.top = `${this.bgHeight}px`
            this.ty= -this.bgHeight + 44
        },
  methods:{
    back(){
      this.$router.back()
     },
     scroll(pos){
         this.scrollY = pos.y
     }
  },
  computed:{
      bgImg(){
          return `background-image:url(${this.bgUrl})`
      }
     
  },
    watch:{
          scrollY(v){
              let translateY = Math.max(this.ty,v)
              let zIndex=0
              let scale=1
              const p = Math.abs(v/this.ty,v)
              if(v>0){
                  scale = 1+p
                  zIndex = 10
              }
              this.$refs.layer.style.transform=`translate3d(0,${translateY}px,0)`
              if(v<this.ty){
                  zIndex=10
                 this.$refs.bgImage.style.paddingTop=0
                 this.$refs.bgImage.style.height='44px'
                 this.$refs.playBtn.style.display='none'
              }else{
                 this.$refs.bgImage.style.paddingTop='70%'
                 this.$refs.bgImage.style.height='0'
                 this.$refs.playBtn.style.display='block'
              }
              this.$refs.bgImage.style.zIndex=zIndex
              this.$refs.bgImage.style.transform = `scale(${scale})`
          }
      },
  components:{
      Scroll
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/less/variable.less';
  .music-list{
      position:fixed;
      z-index:100;
      top:0;
      left:0;
      bottom:0;
      right:0;
      background:@color-background;
      .back{
          position:absolute;
          top:0;
          z-index:50;
          .icon-back{
              display:block;
              padding:10px;
              font-size: @font-size-large-x;
              color:@color-theme;
          }
      }
      .title{
          position: absolute;
          top: 0;
          left:10%;
          z-index:40;
          width:80%;
          text-align: center;
          line-height: 40px;
          font-size: @font-size-large;
          color:@color-text;
      }
      .bg-image{
          position: relative;
          width:100%;
          height:0;
          padding-top: 70%;
          transform-origin: top;
          background-size: cover;
          .play-wrapper{
              position:absolute;
              bottom:20px;
              z-index: 50;
              width:100%;
              .play{
                  box-sizing: border-box;
                  width:135px;
                  padding: 7px 0;
                  margin: 0 auto;
                  text-align: center;
                  border: 1px solid @color-theme;
                  color:@color-theme;
                  border-radius: 100px;
                  font-size: 0;
                  .icon-play{
                      display: inline-block;
                      vertical-align: middle;
                      margin-right:  6px;
                      font-size: @font-size-medium-x;
                  }
                  .text{
                      display:inline-block;
                      vertical-align:  middle;
                      font-size: @font-size-small;
                  }
              }
              .filter{
                  position: absolute;
                  top:0;
                  left:0;
                  width:100%;
                  height:100%;
                  background:rgba(7,17,27,0.4);
              }
          }
      }
      .bg-layer{
          position: relative;
          height:100%;
          background:@color-background;
      }
      .list{
          position:fixed;
          top:0;
          bottom:0;
          width:100%;

          background:@color-background;
          transition:all 0.5s;
          .song-list-wrapper{
              padding:10px 20px;
          }
      }
      .loading-container{
          position: absolute;
          width:100%;
          top:50%;
          transform:translateY(-50%);
          height:100%;
          z-index:99;
          background:#222;
      }
      .song-list{
          .item{
              display:flex;
              align-items:center;
              box-sizing: border-box;
              height: 64px;
              font-size: @font-size-medium;
              .rank{
                  flex:0 0 25px;
                  width:25px;
                  margin-right:20px;
                  text-align: center;
                  .text{
                      color:@color-theme;
                      font-size: @font-size-large;
                  }
              }
              .content{
                  flex:1;
                  line-height: 20px;
                  overflow:hidden;
                  .name{
                      color:@color-text;
                  }
                  .desc{
                      margin-top:4px;
                      color:@color-text-d;
                  }
              }
          }
      }
  }

</style>

