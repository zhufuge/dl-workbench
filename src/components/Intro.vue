<template>
  <section class="section--intro">
    <div class="header"><div>基于<strong>深度学习</strong>的图像识别</div></div>
    <div class="line">
      <div class="img-container" v-for="id in faces" :key="id">
        <img :src="'assets/surface/'+id+'.jpg'" alt="" />
      </div>
    </div>
    <div class="circles-container">
      <div class="circles">
        <img class="circle" src="assets/index-portal-red-semi.svg" alt="Index portal red semi"/>
        <img class="circle" src="assets/index-portal-red.svg" alt="Index portal red"/>
        <img class="circle" src="assets/index-portal-orange-semi.svg" alt="Index portal orange semi"/>
        <img class="circle" src="assets/index-portal-orange.svg" alt="Index portal orange"/>
        <img class="circle" src="assets/index-portal-yellow-semi.svg" alt="Index portal yellow semi"/>
        <img class="circle" src="assets/index-portal-yellow.svg" alt="Index portal yellow"/>
        <img class="circle" src="assets/index-portal-green-semi.svg" alt="Index portal green semi"/>
        <img class="circle" src="assets/index-portal-green.svg" alt="Index portal green"/>
        <img class="circle" src="assets/index-portal-blue-semi.svg" alt="Index portal blue semi"/>
        <img class="circle" src="assets/index-portal-blue.svg" alt="Index portal blue"/>
        <div class="tip-box">
          缺陷：黑斑
        </div>
        <div class="tip-slash"></div>
      </div>
    </div>
    <div class="intro-content">
      <p>一个基于<span>卷积神经网络</span>(Convolutional Neural Network，CNN)的机器学习模型。</p>
      <p>
        由
        <a href="">Keras</a>
        为前端及
        <a href="">TensorFlow</a>
        为后端强力驱动。
      </p>
    </div>
    <div class="features">
      <a class="link" href="#service">使用识别服务</a>
      <a class="link" href="#model">神经网络模型图</a>
      <a class="link" href="#data-class">数据类别</a>
    </div>
  </section>  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "Intro",
  data() {
    return {
      faces: ['1', '2', '3', '4', '5', '6', '7']
    }
  }
})
</script>
<style scoped>
  .section--intro {
    background-image: radial-gradient(ellipse closest-side at 50% 50%, #393e44, #36383b 25%, #343233);
    background-repeat: no-repeat;
    background-size: 100% 1000px;
    background-position: center -120px;
    height: 800px;
  }
  .header {
    font-size: 32px;
    font-style: italic;
    padding: 16px 120px 40px;
    font-weight: 100;
  }
  .line {
    position: absolute;
    top: 250px;
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
  }
  .img-container:nth-child(3) {
    border: 3px solid #ffea73;
  }
  .img-container > img {
    border-radius: 3px;
  }
  .circles-container {
    flex: 0 0 500px;
    height: 366px;
    background-repeat: no-repeat;
    background-image: url("/assets/index-portal-sides.svg");
    background-position: center;
    user-select: none;
    position: absolute;
    top: 150px;
    left: 240px;
    width: 600px;
  }
  .circles {
    position: relative;
    width: 366px;
    height: 366px;
    margin: auto;
  }
  @keyframes circle {
    0%{transform: rotate(0deg)}
    50%{transform: rotate(180deg)}
    100%{transform: rotate(360deg)}
  }
  .circle {
    position: absolute;
    left: 0;
    top: 0;
    animation: circle 1s linear infinite;
    will-change: transform;
  }
  .circle:nth-child(1) {
  	animation-duration: 30s;
  }
  .circle:nth-child(2) {
    animation-duration: 40s;
  }
  .circle:nth-child(3) {
    animation-duration: 50s;
  }
  .circle:nth-child(4) {
    animation-duration: 60s;
  }
  .circle:nth-child(5) {
    animation-duration: 70s;
  }
  .circle:nth-child(6) {
    animation-duration: 80s;
  }
  .circle:nth-child(7) {
    animation-duration: 90s;
  }
  .circle:nth-child(8) {
    animation-duration: 100s;
  }
  .circle:nth-child(9) {
    animation-duration: 110s;
  }
  .circle:nth-child(10) {
    animation-duration: 120s;
  }
  .tip-box {
    position: absolute;
    top: 15px;
    left: 360px;
    width: 300px;
    height: 48px;
    color: #ffea73;
    font-size: 36px;
    border-bottom: 2px solid;
    font-weight: 100;
    text-align: center;
  }
  .tip-slash {
    height: 2px;
    width: 113px;
    background: #ffea73;
    transform: rotate(-30deg);
    position: relative;
    top: 91px;
    left: 255px;
    border-radius: 1px;
  }
  .intro-content {
    margin-top: 460px;
    font-size: 16px;
    font-weight: 100;
  }
  .intro-content > p {
    text-align: center;
  }
  .intro-content span {
    color: #78b0a0;
    font-weight: 500;
  }
  .intro-content a {
    font-weight: 500;
    color: #efdab9;
  }
  .intro-content a:hover {
    color: #ebac00;
  }
  .features {
    display: flex;
    justify-content: center;
    font-weight: 100;
    font-size: 18px;
  }
  .link {
    display: inline-block;
    margin: 24px 24px;
    border-radius: 4px;
    border: 1px solid #4e4b4d;
    padding: 8px 24px;
    color: #ffd152;
    text-decoration: none;
    cursor: pointer;
  }
  .link:hover {
    color: #ebac00;
    border-color: #666;
    background-color: #3333;
  }
</style>
