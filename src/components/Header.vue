<template>
  <nav class="top-bar" aria-label="Primary">
    <div class="wrapper no-pad">
      <ul class="navigation">
        <li><a class="" href="/">首页</a></li>
        <li><a class="" href="/service">产品服务</a></li>
        <li><a class="" href="/docs">文档</a></li>
      </ul>
      <div class="top-bar-right">
          <a href="https://github.com/zhufuge/DeepLearning">
            GitHub
          </a>
      </div>
    </div>
  </nav>  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header',
})
</script>
<style scoped>
  .top-bar {
    text-align: left;
    padding: 5px 0;
    background-color: #584b4f;
    color: #efeae1;
    font-size: 14px;
  }
  .wrapper {
    width: 860px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    overflow: hidden;
  }
  .top-bar .navigation {
    display: inline-block;
  }
  .navigation {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .navigation li {
    display: inline-block;
    padding-right: 5px;
    height: 33px;
    vertical-align: top;
  }
  .navigation a {
    padding: 5px;
    display: inline-block;
    transition: color 0.2s;
  }
  .top-bar a {
  	color: #efeae1;
  }
  a {
  	color: #3b9b6d;
  	text-decoration: none;
  }
  .top-bar .top-bar-right {
    float: right;
    line-height: 33px;
  }
</style>
