<template>
  <section id="data-class" class="section--class">
    <h2>数据类别展示</h2>
    <p>下列包含部分训练模型里的数据类别。我们可以在这里看出哪些图片是属于一类的，也可以观察出同一类可能会有的特征。</p>
    <p>未来将会提供更丰富的内容，以及更方便的操作方式。</p>
    <div v-for="face in faces" :key="'line' + face.name">
      <h3>数据组 {{face.name}}</h3>
      <div class="line">
        <div class="img-container" v-for="id in face.image" :key="id">
          <img :src="'assets/surface/' + face.name + '/' + id + '.jpg'" alt=""/>
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
    margin: auto 25px;
    height: 150px;
    width: 150px;
    padding: 6px;
    border-radius: 6px;
    border: 2px solid #4e4b4d;
  }
  .img-container > img {
    width: 150px;
    height: 150px;
    border-radius: 3px;
  }
</style>
