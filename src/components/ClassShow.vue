<template>
  <div class="container">
    <div v-for="face in faces" :key="'line' + face.name">
      <div class="title">数据组 {{face.name}}</div>
      <div class="line">
        <div class="img-container" v-for="id in face.image" :key="id">
          <img :src="'assets/surface/' + face.name + '/' + id + '.jpg'" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "DataClass",
  data() {
    const names = ["黑斑", "黄斑", "丝光皱条", "眉皱"]
    const faces = names.map(v => ({
      name: v,
      image: Array(7).fill(0).map((_, i) => i),
    }))
    return {
      faces,
      names,
    }
  }
})
</script>
<style scoped>
  .container {
    text-align: center;
    max-width: 720px;
    border: 1px solid #4e4b4d;
    border-radius: 3px;
  }
  .title {
    margin: 24px auto 6px;
  }
  .line {
    border-top: 1px solid #4e4b4d;
    border-bottom: 1px solid #4e4b4d;
    display: flex;
    align-items: center;
    overflow-y: auto;
    overflow-x: scroll;
  }
  .img-container,
  .img-container > img {
    height: 86px;
    width: 86px;
    border-radius: 2px;
  }
  .img-container {
    margin: 12px 25px;
    padding: 2px;
    border: 2px solid #4e4b4d;
  }
</style>
