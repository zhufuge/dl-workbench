<template>
  <div class="container">
    <div class="current">
      <div class="title">当前配置</div>
      <div v-for="(layer, index) of model" :key="index">
        <input-layer
          v-if="layer.name === 'input'"
          :size="layer.size"
        />
        <conv-layer
          v-if="layer.name === 'conv'"
          :filters="layer.filters"
          :size="layer.size"
          :activation="layer.activation"
        />
        <pooling-layer
          v-if="layer.name === 'pooling'"        
          :size="layer.size"
        />
        <dense-layer
          v-if="layer.name === 'dense'"
          :units="layer.units"
          :activation="layer.activation"
        />
        <output-layer
          v-if="layer.name === 'output'"
          :units="layer.units"
          :activation="layer.activation"
        />
      </div>
    </div>
    <div class="update">
      <div class="title">修改参数</div>
      <div v-for="(layer, index) of model" :key="index">
        <input-layer
          v-if="layer.name === 'input'"
          :is-update="true"
          :size="layer.size"
        />
        <conv-layer
          v-if="layer.name === 'conv'"
          :is-update="true"
          :filters="layer.filters"
          :size="layer.size"
          :activation="layer.activation"
        />
        <pooling-layer
          v-if="layer.name === 'pooling'"
          :is-update="true"
          :size="layer.size"
        />
        <dense-layer
          v-if="layer.name === 'dense'"
          :is-update="true"
          :units="layer.units"
          :activation="layer.activation"
        />
        <output-layer
          v-if="layer.name === 'output'"
          :is-update="true"
          :units="layer.units"
          :activation="layer.activation"
        />
      </div>
      <div class="operation">
        <a class="button" @click="uploadFile">点击提交修改</a>
        <a class="button" @click="uploadFile">重置</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import InputLayer from './Layer/InputLayer.vue'
import ConvLayer from './Layer/ConvLayer.vue'
import PoolingLayer from './Layer/PoolingLayer.vue'
import OutputLayer from './Layer/OutputLayer.vue'
import DenseLayer from './Layer/DenseLayer.vue'

export default Vue.extend({
  name: 'Config',
  components: {
    InputLayer,
    ConvLayer,
    PoolingLayer,
    DenseLayer,
    OutputLayer,
  },
  data() {
    return {
      model: [
        { name: 'input', size: [64, 64] },
        { name: 'conv', filters: 6, size: [5, 5], activation: 'relu' },
        { name: 'pooling', size: [2, 2] },
        { name: 'conv', filters: 6, size: [5, 5], activation: 'relu' },
        { name: 'pooling', size: [2, 2] },
        { name: 'conv', filters: 6, size: [5, 5], activation: 'relu' },
        { name: 'pooling', size: [2, 2] },
        { name: 'conv', filters: 6, size: [5, 5], activation: 'relu' },
        { name: 'dense', units: 84, activation: 'relu' },
        { name: 'output', units: 6, activation: 'softmax' },
      ],
    }
  }
})
</script>
<style scoped>
  .current,
  .update {
    border: 1px solid #4e4b4d;
    border-bottom: none;
    margin-bottom: 16px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid #4e4b4d;
  }
  .layer {
    border-bottom: 1px solid #4e4b4d;
    padding: 12px;
    display: flex;
  }
  .name {
    padding: 0 12px;
    width: 80px;
    border-right: 1px solid #4e4b4d;
  }
  .operation {
    border-bottom: 1px solid #4e4b4d;
    display: flex;
    justify-content: flex-end;
  }
  .button {
    width: 144px;
    height: 42px;
    margin: 10px 12px;
    border-radius: 3px;
    background: #ffd152;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #333;
  }
  .button:hover {
    background: #ffc31f;
    color: #333;
  }
  .button:active {
    background: #be9218;
  }
</style>
