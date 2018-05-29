<template>
  <section id="model" class="section--model">
    <div class="container">
      <div class="intro">
        <h2>神经网络模型图</h2>
        <p>以上服务使用的是卷积神经网络模型，该模型的结构如图所示。</p>
        <p>根据该模型图，以 Keras 为前端并以 TensorFlow 为后端搭建该模型。使用数据进行训练并用训练好的模型进行对新样本的预测。</p>
        <p class="more">
          <router-link class="more-link" to="/docs">查看更多文档...</router-link>
        </p>
      </div>
      <div class="model-show">
        <div class="img-container">
          <img src="assets/cnn-model.jpg" alt="">
        </div>
        <p>卷积神经网络模型图</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "Model",
})
</script>
<style scoped>
  .section--model {
    background: no-repeat url("/assets/index-ide-graphic.svg") calc(50% - 600px) center;
    height: 700px;
  }
  .container {
    display: flex;
    justify-content: end;
    padding: 50px 0 0 0;
  }
  .intro {
    width: 250px;
    margin: 120px 42px;
  }
  .model-show {
    height: 500px;
    width: 800px;
    background:#eaeaeb;
    border-radius: 6px;
    margin: 30px;
    box-shadow: 0 20px 30px rgba(0,0,0,0.5);
    color: #333;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
  .img-container {
    height: 400px;
    width: 100%;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #aaa;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-container img {
    border-radius: 3px;
  }
  .more {
    margin: 24px 0;
  }
  .more-link {
    font-size: 20px;
    color: #ffd152;
  }
  .more-link:hover {
    color: #ffc31f;
  }
</style>
