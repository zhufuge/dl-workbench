<template>
  <section id="data-class" class="section--class">
    <h2>数据类别展示</h2>
    <div v-for="i in faces" :key="i">
      <h3>{{names[i[0] / 10]}}</h3>
      <div class="line">
        <div class="img-container" v-for="id in i" :key="id">
          <img :src="'assets/faces/face'+id+'.png'" alt=""/>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "DataClass",
  data() {
    const faces = Array(6)
    for (let i = 0; i < 6; i++) {
      faces[i] = Array(10)
      for (let j = 0; j < 10; j++) {
        faces[i][j] = i * 10 + j
      }
    }
    return {
      faces,
      names: ["Alice", "Bob", "Joe", "Naruto", "Sakura", "Sasiki"]
    }
  }
})
</script>
<style scoped>
  .section--class {
    height: 700px;
    text-align: center;
  }
  .line {
    margin: 24px 0;
    width: 100%;
    height: 200px;
    border-top: 1px solid #4e4b4d;
    border-bottom: 1px solid #4e4b4d;
    display: flex;
    align-items: center;
    overflow-x: scroll;
  }
  .img-container {
    margin: auto 36px;
    height: 160px;
    width: 131px;
    padding: 6px;
    border-radius: 6px;
    border: 2px solid #4e4b4d;
  }
  .img-container > img {
    border-radius: 3px;
  }
</style>
