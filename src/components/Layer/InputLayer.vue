<template>
  <div class="layer">
    <div class="name">输入层</div>
    <div class="param">
      <span>输入：</span>
      <input v-if="isUpdate" class="input" type="text" placeholder="数字逗号隔开" :value="size.join(', ')"/>
      <span v-if="!isUpdate" v-for="(item, index) in size" :key="item">
        <span class="operation" v-if="index !== 0">×</span>
        <span>{{item}}</span>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'InputLayer',
  props: ['size', 'isUpdate'],
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
    width: 100px;
  }
</style>

