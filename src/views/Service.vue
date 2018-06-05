<template>
  <div class="docs">
    <div class="aside">
      <ul>
        <li
          v-for="item of list"
          :key="item"
          @click="onAsideClick(item)"
          :class="{'active-li': item === selected}"
        >{{item}}</li>
      </ul>
    </div>
    <div class="main">
      <h2>{{selected}}</h2>
      <div class="content">
        <upload />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Upload from '../components/Upload.vue'
export default Vue.extend({
  name: 'Service',
  components: {
    Upload,
  },
  data() {
    return {
      list: ['图像识别', '模型配置', '历史记录', '类别展示'],
      selected: '图像识别',
    }
  },
  methods: {
    onAsideClick(item) {
      this.selected = item
    }
  },
})
</script>
<style scoped>
  .docs {
    margin: 24px auto 0;
    max-width: 1000px;
    display: flex;
  }
  .aside {
    width: 300px;
    margin-top: 12px;
  }
  .aside ul {
    padding: 6px;
    margin: 6px;
  }
  .aside li {
    list-style: none;
    padding: 6px 18px;
    margin: 6px 3px;
    border-radius: 2px;
  }
  .active-li,
  .aside li:hover {
    background: #4e4b4d;
    color: #eee;
  }
  .main {
    width: 100%;
    padding: 0 12px;
  }
  h2 {
    margin: 12px;
  }
  .content {
    margin: 6px;
  }
</style>