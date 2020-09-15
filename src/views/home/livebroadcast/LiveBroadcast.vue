<template>
  <div class="container">
    <div class="nav-box">
      <div class="nav">
        <router-link to="/home/livebroadcast/important" tag="a" active-class="active">重要</router-link>
        <router-link to="#2" tag="a" active-class="active">足彩</router-link>
        <router-link to="#3" tag="a" active-class="active">足球</router-link>
        <router-link to="#4" tag="a" active-class="active">篮球</router-link>
        <router-link to="#5" tag="a" active-class="active">电竞</router-link>
        <router-link to="#6" tag="a" active-class="active">中超</router-link>
        <router-link to="#7" tag="a" active-class="active">英超</router-link>
        <router-link to="#8" tag="a" active-class="active">西甲</router-link>
        <router-link to="#9" tag="a" active-class="active">NBA</router-link>
        <router-link to="#11" tag="a" active-class="active">意甲</router-link>
        <router-link to="#12" tag="a" active-class="active">德甲</router-link>
        <router-link to="#13" tag="a" active-class="active">法甲</router-link>
        <router-link to="#14" tag="a" active-class="active">葡超</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .nav-box {
        height: 32px;
        color: #333;
        position: relative;
        border-bottom: 1px solid #e9e9e9;
        background: #fff;
        position: fixed;
        overflow: hidden;
        z-index: 999;
        .nav {
            height: 32px;
            width: 100%;
            overflow: auto;
            display: block;
            white-space: nowrap;
            text-align: center;
            a{
                margin: 0 13px;
                font-size: 15px;
                height: 30px;
                line-height: 32px;
                display: inline-block;
                text-align: center;
                position: relative;
                white-space: nowrap;
                border-bottom: 0.1rem solid transparent;
                color: #333;
            }
            .active{
                color: #16b13a;
                border-bottom-color: #16b13a;
            }
        }
    }
}
</style>