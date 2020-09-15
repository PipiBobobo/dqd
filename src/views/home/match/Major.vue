<template>
  <div class="match-list">
    <h3>2020-09-10 星期五</h3>
    <MatchList v-for="item in expectlist" :soccer="item" :key="item.id"></MatchList>
  </div>
</template>



<script>
import MatchList from './MatchList'
import {get}  from '@/api/http'

export default {
    
    data(){
        return{
           expectlist:[], 
        }
    },
    components:{
        MatchList
    },

    async created(){
        let ms = await get('/api/expectlist')
        this.expectlist = ms.data;
    },
}
</script>

<style lang="scss" scoped>
.match-list {
  h3 {
    line-height: 26px;
    font-size: 10px;
    color: #333;
    background: #e8e8e8;
    text-align: center;
    height: 26px;
  }
}
</style>