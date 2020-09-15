<template>
    <div class="live-header">
      <p class="live-time">
        <span>{{live.comingTitle}}</span>
        <b>{{live.match}}</b>
      </p>
      <div class="live-link">
        <p>
          <a href="#">网络直播</a>｜
        </p>
        <p>
          <a href="#">文字</a>｜
        </p>
        <p>
          <a href="#">手机看直播</a>
        </p>
      </div>
    </div>
</template>


<script>
export default {
    props:['live']
}
</script>


<style lang="scss" scoped>

.live-header {
    width: 100%;
    background: #fff;
    padding: 11px 15px;
    border-bottom: 1px solid #e8e8e8;
    box-sizing: border-box;
    .live-time {
      display: block;
      margin-bottom: 11px;
      span {
        font-size: 12px;
        color: #555;
        margin-right: 20px;
      }
      b {
        font-size: 11px;
      }
    }
    .live-link {
      p {
        float: left;
        color: #16b13a;
        a {
          color: #16b13a;
          font-size: 14px;
          line-height: 32px;
        }
      }
      &::after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
    }
}
    
</style>