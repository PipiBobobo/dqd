<template>
    <ul>
      <li>
        <a href="#" class="match-list-item">
          <div class="match-item-a">
              <img :src="soccer.img1" alt="">
              <p>{{soccer.p1}}</p>
          </div>
          <div class="match-item-c">
              <p class="list-p-a">{{soccer.comingTitle}}</p>
              <p class="list-p-b">{{soccer.nm}}</p>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAoBAMAAAClR805AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcQCzMQCzLwCyMQSyMACzMQCzMAWwMQCxLwiyMwiyNACyMQCyLxaxOQCzMRaxOp6G9rMAAAAOdFJOUwCAQL8n5pgPYK9wz07xtx2fbQAAAmpJREFUSMftl89rE0EUx7/ZpN0UZM1UbRAlrKOIpxKdFg+FJRXxIpaGpUUQQoONB4XSQymiKJEi6MVD1UvBHMQiXkQo6EVELx48C+Jt82OjpGHxP9A3s0lJrNgkZUEwb3fezkzgs7PfeW8mg8iTn4HY1xQuPEcgduMz1hCQvcCXoNC38CMo9N4++j9BR0y/+I1T/lOL46pfm5e9j3pDhxy/kGeMXaISA8KvkPPfVSIX/dYJek/GU+a+3442NoQrMmKCGqO2eLchxByidW6ujNsiuTN6wGvY9B/QJopIQHOgzzCWyDKWx5DnOYc4P+7sjDaaaAeD7egUwlPql0oSQ5ucjz7lHLidB/Y1390pWi+0oY/WZUOOGtBzDdmAl4tAQo2kC/RNr4EuCxGqrJdpeFGlNVXeCiUPmc15qltBKplWtDebkuHAq3yBy9q4EBZNI/SC58W6FUR97pYgFVk7wliZWYwNAxNNrWHEuhakHe346EKWHay2oE2FPsNr3NwdGpPfyR2Ik7OaYXQncZIyqNRJyvwNfd9V3Rl/z7un/GXLTsrOYk/TuIUe4Q7OwhjOStUZZY2UhgSpkSDdoJ3zv6FHIPMwLVlq4hpjpWaJruIuUgYPJZpWI4mm6kVxNw/0hm5J9I+ThH5NcZ0MTc+HJTGSywvNlmFhxOc6RG9fngZrj91PdX5CRoee2F9IU8pct8YgsLz5DJiaOU3oa/VeFtUBdy0Vod430JiVhr5eXcTCKgiNc7PAg1WMofQh38tWoMnE1vgxUkEcpsUIK8ASPa7Ir1A3CN7f0fvofwod4F/3AA8cAR6Tgjvc/QIJZyVcRvsrLwAAAABJRU5ErkJggg==" alt="">
          </div>
          <div class="match-item-b">
              <img :src="soccer.img2" alt="">
              <p>{{soccer.p2}}</p>
          </div>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
    props:['soccer']
}
</script>

<style lang="scss" scoped>
.match-list-item {
    position: relative;
    display: block;
    width: auto;
    height: 94px;
    padding: 0 30px;
    border-bottom: 1px solid #e8e8e8;
    background: #f7f7f7;
  }
  .match-item-a{
    float: left;
    width: 75px;
    padding-top: 16px;
    img{
        display: block;
    width: 42px;
    margin: 0 auto;
    }
    p{
        line-height: 1;
    margin-top: 10px;
    font-size: 10px;
    color: #333;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
  }
  .match-item-c{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 13px;
        p{
            font-size: 10px;
        line-height: 16px;
        color: #999;
        text-align: center;
        }
        img{
        display: block;
        width: 93px;
        margin: 0 auto;
        margin-top: -0.5px;
        }
        .list-p-a{
            width: 160px;
        line-height: 13px;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }
        .list-p-b{
        font-size: 24px;
        line-height: 24px;
        margin: 10px 0;
        color: #333;
        }
    }
    .match-item-b{
        float: right;
        width: 75px;
        padding-top: 16px;
        img{
            display: block;
            width: 42px;
            margin: 0 auto;
        }
        p{
            line-height: 1;
            margin-top: 10px;
            font-size: 10px;
            color: #333;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    
</style>