<template>
  <div class="new-container">
    <div class="date">
      <p class="live-date">2020-09-10 星期五</p>
    </div>
    <LiveList v-for="item in livelist" :live="item" :key="item.id"></LiveList>
  </div>
</template>

<script>
import LiveList from './LiveList'
import {get}  from '@/api/http'

export default {
    
    data(){
        return{
           livelist:[], 
        }
    },
    components:{
        LiveList
    },

    async created(){
        let ls = await get('/api/livelist')
        this.livelist = ls.data;
        
    },
}
</script>




<style lang="scss" scoped>
.new-container {
  .date {
    background: #f5f5f5;
    .live-date {
      width: 100%;
      height: 27px;
      line-height: 27px;
      font-size: 12px;
      color: #555;
      padding: 0 16px;
      box-sizing: border-box;
    }
  }
}
</style>