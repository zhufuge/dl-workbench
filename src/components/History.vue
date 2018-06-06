<template>
  <div class="container">
    <div class="item" v-for="item of dataClass" :key="item">
      <img :src="'assets/surface/' + item + '/1.jpg'" alt=""/>
      <div class="info">
        <div class="result">识别为：<strong>{{item}}</strong></div>
        <div class="date">记录日期：2018-06-03</div>
        <div class="time">记录时间： 12:32</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "History",
  data() {
    const dataClass = ['黑斑', '黄斑', '丝光皱条', '眉皱']
    return {
      dataClass,
    }
  },
})
</script>
<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    padding: 12px;
    margin: 8px;
    border: 1px solid rgba(89, 89, 89, 0.48);
    width: 200px;
    text-align: center;
  }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  .item > img {
    border-radius: 2px;
    height: 96px;
    width: 96px;
  }
  .info {
    margin-left: 12px;
    padding: 6px;
  }
  .result {
    font-size: 18px;
  }
</style>
