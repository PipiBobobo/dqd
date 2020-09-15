<template>
  <div class="container">
    <div class="header-top">
      <img src="../../assets/img/download-logo.8b6339b.jpg" alt />
    </div>
    <div class="nav-box">
      <img src="../../assets/img/left-logo.png" alt />
      <div class="top-nav">
        <router-link to="/home/homepage" tag="a" active-class="active">首页</router-link>
        <router-link to="/home/livebroadcast" tag="a" active-class="active">直播</router-link>
        <router-link to="/home/match" tag="a" active-class="active">比赛</router-link>
        <router-link to="/home/matchdata" tag="a" active-class="active">数据</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 42.8px;
  .header-top {
    width: 375px;
    height: 50px;
    position: fixed;
    overflow: hidden;
    z-index: 1100;
    top: 0;
    img {
      width: 100%;
    }
  }
  .nav-box {
    width: 100%;
    height: 40px;
    display: flex;
    background: #16b13a;
    position: relative;
    justify-content: flex-end;
    position: fixed;
    z-index: 30;
    width: 100%;
    top: 48px;
    img {
      width: 62px;
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-45%);
      -webkit-transform: translateY(-45%);
    }
    .top-nav {
      height: 100%;
      width: 70%;
      display: table;
      float: right;
      a{
        font-size: 16px;
        height: 100%;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        color: #9af3af;
      }
      .active{
        color: #fff;
        &::before {
          position: absolute;
          content: "";
          left: 50%;
          bottom: 0;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid #fff;
          margin-left: -5px;
        }
      }
    }
  }
}
</style>