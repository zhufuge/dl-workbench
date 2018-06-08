<template>
  <div class="layer">
    <div class="name">全连接层</div>
    <div class="param">
      维度：
      <span v-if="!isUpdate">{{units}}</span>
      <input v-if="isUpdate" class="input" type="text" placeholder="" :value="units"/>
    </div>
    <div class="param"></div>
    <div class="param">
      <span>激活函数：</span>
      <span v-if="!isUpdate">{{activation}}</span>
      <select class="select" v-if="isUpdate">
        <option v-for="a of activations" :key="a" value="a" :selected="activation === a">{{a}}</option>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import activations from '../../common/activations'

export default Vue.extend({
  name: 'DenseLayer',
  props: ['units', 'activation', 'isUpdate'],
  data() {
    return {
      activations,
    }
  }
})
</script>
<style scoped>
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
  .param {
    padding: 0 12px;
    width: 180px;
  }
  .input {
    width: 100px;
  }
  .select {
    width: 80px;
  }
</style>