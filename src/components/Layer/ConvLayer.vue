<template>
  <div class="layer">
    <div class="name">卷积层</div>
    <div class="param">
      <span>核种类：</span>
      <span v-if="!isUpdate">{{filters}}</span>
      <input v-if="isUpdate" class="input" type="text" placeholder="" :value="filters"/>
    </div>
    <div class="param">
      <span>核尺寸：</span>
      <input v-if="isUpdate" class="input" type="text" placeholder="数字逗号隔开" :value="size.join(', ')"/>      
      <span v-if="!isUpdate" v-for="(item, index) in size" :key="item">
        <span class="operation" v-if="index !== 0">×</span>
        <span>{{item}}</span>
      </span>
    </div>
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
  name: 'ConvLayer',
  props: ['filters', 'size', 'activation', 'isUpdate'],
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
  .operation {
    margin: 0 8px;
  }
  .input {
    width: 84px;
  }
  .select {
    width: 80px;
  }
</style>
