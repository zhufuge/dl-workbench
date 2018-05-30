<template>
  <section id="data-class" class="section--class">
    <h2>数据类别展示</h2>
    <p>下列包含部分训练模型里的数据类别。我们可以在这里看出哪些图片是属于一类的，也可以观察出同一类可能会有的特征。</p>
    <p>未来将会提供更丰富的内容，以及更方便的操作方式。</p>
    <div v-for="i in faces" :key="'line' + i[0]">
      <h3>数据组 {{names[i[0] / 10]}}</h3>
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
      names: ["Alice", "Bob", "Joe", "Naruto", "Sakura", "Sasike"]
    }
  }
})
</script>
<style scoped>
  .section--class {
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
    overflow: hidden;
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
