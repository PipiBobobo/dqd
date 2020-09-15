<template>
  <div class="list-container">
  <HotList v-for="item in hotlist" :hot="item" :key="item.id"></HotList>  
  </div>
</template>

<script>
import {get}  from '@/api/http'
import HotList from './HotList'

export default {
          data(){
            return{
              hotlist:[]
            }
          },

    components:{
        HotList
    },

 async created(){
        let rs = await get('/app/tabs/iphone/1.json',{
          mark: 'gif',
          version: 576,
          from: 'msite_com',
        })
        this.hotlist = rs.data.articles
    },

}
</script>

<style lang="scss" scoped>
  .list-container{
    padding-top: 44px;
  }
</style>




