<template>
  <div class="container">
    <div class="item title">
      识别结果
    </div>
    <div class="item" v-for="item of dataClass" :key="item">
      <div class="img-container">
        <img :src="'assets/surface/' + item + '/1.jpg'" alt=""/>
        <div class="info">
          <div class="result">
            类别：<strong>{{item}}</strong>
          </div>
          <a class="button single" v-if="show !== item" @click="showSelect(item)">识别错误，点击修正</a>
          <div class="report" v-if="show === item">
            <div class="select">
              <multiselect
                v-model="value"
                :options="options"
                placeholder="选择正确的类别"
              ></multiselect>
            </div>
            <a class="button">点击确认修正</a>
            <a class="button" @click="hideSelect">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
export default Vue.extend({
  name: "Result",
  components: { Multiselect },
  data() {
    const dataClass = ['黑斑', '黄斑', '丝光皱条', '眉皱']
    return {
      show: '',
      value: null,
      options: ['黑斑', '黄斑', '丝光皱条', '眉皱'],
      dataClass,
    }
  },
  methods: {
    showSelect(selected) {
      this.show = selected;
      this.value = null;
    },
    hideSelect() {
      this.show = '';
      this.value = null;
    }
  },
})
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
  .item {
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid rgba(89, 89, 89, 0.48);
    max-width: 900px;
    width: 100%;
  }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  .img-container {
    margin: auto 25px;
    border-radius: 2px;
    border: 1px solid #4e4b4d;
    display: flex;
  }
  .img-container > img {
    border-radius: 2px;
  }
  .img-container,
  .img-container > img {
    height: 96px;
    width: 96px;
  }
  .button {
    width: 144px;
    margin-left: 12px;
    border-radius: 3px;
    background: #ffd152;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #333;
    height: 40px;
  }
  .button:hover {
    background: #ffc31f;
    color: #333;
  }
  .button:active {
    background: #be9218;
  }
  .info {
    margin-left: 12px;
    padding: 6px;
  }
  .result {
    font-size: 18px;
  }
  .report {
    display: flex;
    margin-top: 16px;
  }
  .select {
    width: 250px;
  }
  .single {
    margin-top: 16px;
    margin-left: 0;
    width: 180px;
  }
</style>
