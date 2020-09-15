<template>
<div class="list-box">
    <ul class="new-list">
      <li class="new-list-item">
        <a :href="hot.url">
          <div class="news-list-img-side">
            <img :src="hot.thumb" alt />
          </div>
          <div class="new-list-info">
            <h3>{{hot.title}}</h3>
            <div class="new-list-tag">
              <span class="news-list-comment">{{hot.ut}}评论</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
</div>
</template>

<script>
export default {
    props:['hot']
}
</script>

<style lang="scss" scoped>
  a {
    color: #8c9399;
  }
  .new-list {
    display: block;
    list-style-type: disc;
  }
  .new-list-item {
    display: list-item;
    text-align: -webkit-match-parent;
    a {
      padding: 12px;
      border-bottom: 1px solid #e9e9e9;
      background: #f7f7f7;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      min-height: 67px;
    }
  }
  .news-list-img-side {
    width: 90px;
    float: left;
    margin-right: 16px;
    position: relative;
    line-height: 0;
    margin-bottom: 3.2px;
    height: 67.2px;
    img {
      width: 100%;
    }
  }
  .new-list-info {
    overflow: hidden;
    h3 {
      font-size: 16px;
      line-height: 21px;
      color: #333;
      margin-bottom: 5px;
      font-weight: 400;
    }
  }
  .new-list-tag {
    position: absolute;
    bottom: 6px;
    right: 12px;
    font-size: 10px;
    line-height: 15px;
  }
  .new-list-comment {
    color: #8c9399;
  }
</style>