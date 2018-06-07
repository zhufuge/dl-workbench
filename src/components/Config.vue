<template>
  <div class="container">
    <div class="current">
      <div class="title">当前配置</div>
      
    </div>
    <div class="update">
      <div class="title">修改参数</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
<style scoped>
  .current,
  .update {
    border: 1px solid #4e4b4d;
    margin-bottom: 16px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid #4e4b4d;
  }
</style>
