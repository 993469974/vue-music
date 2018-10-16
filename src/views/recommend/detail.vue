<template>
    <transition name="slide">
        <music-list :title="title" :bgUrl="bgUrl" :songList="songList"></music-list>
    </transition>
</template>
<script>
import MusicList from '@/components/musicList'
import {getCdInfo} from "@/api"
export default {
    data(){
        return{
            title:"",
            bgUrl:"",
            songList:[]
        }
    },
    //获取
    created(){
        this.getCdInfoList()
    },
    methods:{
        getCdInfoList(){
            getCdInfo().then(res =>{
                console.log(res)
                this.title = res.data.cdlist[0].dissname
                this.bgUrl =res.data.cdlist[0].logo
                this.songList=res.data.cdlist[0].songlist
            })
        }
    },

    components:{
        MusicList
    }
}
</script>
<style lang="less" scoped>
.slide-enter-active,.slide-leave-active{
    transition:all 0.5s;
}
.slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0)
}

</style>
