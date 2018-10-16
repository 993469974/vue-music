<template>
    <transition name="slide">
        <singer-detail :title="title" :bgUrl="bgUrl" :songList="songList"></singer-detail>
    </transition>
</template>
<script>
import singerDetail from '@/components/singerList/detail.vue'
import {getSingerInfo} from "@/api"
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
        this.getSingerInfoList()
    },
    methods:{
        getSingerInfoList(){
            let id= this.$route.params.id
            getSingerInfo(id).then(res =>{
                console.log(res)
                this.title=res.data.singer_name;
                this.bgUrl=`http://y.gtimg.cn/music/photo_new/T001R300x300M000${res.data.singer_mid}.jpg?max_age=2592000`;
                this.songList=res.data.list;
            })
        }
    },

    components:{
        singerDetail
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
