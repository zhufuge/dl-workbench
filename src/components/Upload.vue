<template>
  <div class="container">
    <div class="title" @click="handleToggle">
      <div style="margin:0 6px;">图片上传</div>
      <img
        :class="'animated ' + (show ? 'rotateDown' : 'rotateUp')"
        src="assets/chevron-down.svg" alt="" />
    </div>
    <div v-if="show">
      <div class="preview">
        <div class="upload-preview">
          <div
            class="preview-img"
            v-for="image of images"
            :key="image"
          >
          <img :src="image" alt=""/>
          </div>
          <div class="upload-img" @click="handleBoxClick">
            <p>点击加载图片</p>
            <p>或将图片拖到此处</p>
          </div>
          <input
            ref="image_input"
            type="file"
            accept="image/*"
            multiple
            id="upload_file"
            @change="handleImageChange"
            style="display:none"/>
        </div>
        <div class="operation">
          <a class="button" @click="uploadFile">上传图片并识别</a>
          <a class="button" @click="cleanFile">清空</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Ajax from '../common/Ajax'
export default Vue.extend({
  name: 'Map',
  data() {
    return {
      show: true,
      files: [],
      images: [],
    }
  },
  methods: {
    handleToggle() {
      this.show = !this.show
    },
    handleBoxClick() {
      if (this.$refs['image_input']) this.$refs['image_input'].click()
    },
    handleImageChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return

      for (let file of files) {
        this.files.push(file)
      }
      this.readImages(files)
    },
    readImages(files, i=0) {
      if (files.length <= i) return
      const reader = new FileReader()
      reader.onload = (e) => {
        this.images.push(e.target.result)
        this.readImages(files, i + 1)
      }
      reader.readAsDataURL(files[i])
    },
    uploadFile() {
      this.$message({ message: '提交成功！', center: true, type: 'success' })
      const a = this.$message({ message: '正在识别...', center: true, duration: 0 })
      setTimeout(() => {
        a.close()
        this.$message({ message: '识别成功！', center: true, type: 'success' })
        this.$bus.$emit('showResult', true)
      }, 3000)
      for (let file of this.files) {
        Ajax('upload-image', file).then((res) => {
          console.log(res)
        })
      }
    },
    cleanFile() {
      this.$message({ message: '清空成功', center: true, type: 'success' })
      this.files = []
      this.images = []
      this.$bus.$emit('showResult', false)
    }
  },
})
</script>
<style scoped>
  .container {
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid rgba(89, 89, 89, 0.48);
    max-width: 900px;
    width: 100%;
    overflow: hidden;
  }
  .title {
    display: flex;
    margin: 0;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  @keyframes rotateDown {
    from { transform: rotate(0deg); }
    to { transform: rotate(180deg); }
  }
  .rotateDown {
    animation-name: rotateDown;
  }
  @keyframes rotateUp {
    from { transform: rotate(180deg); }
    to { transform: rotate(0deg); }
  }
  .rotateUp {
    animation-name: rotateUp;
  }
  .preview {
    width: 100%;
  }
  .upload-preview {
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
  }
  .preview-img,
  .upload-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 144px;
    width: 144px;
    border-radius: 6px;
    border: 1px solid #aaa;
    margin: 16px 16px 0;
    cursor: pointer;
    font-size: 14px;
    color: #ccc;
    overflow: hidden;
  }
  .upload-img {
    border: 2px dashed #aaa;
  }
  .upload-img > p {
    margin: 0;
  }
  .upload-img:hover {
    border-color: #f5d683;
    color: #fff;
  }
  .upload-img:active {
    border-color: #d3b972;
  }
  .operation {
    border-top: 1px solid rgba(89, 89, 89, 0.48);
    display: flex;
    justify-content: flex-end;
  }
  .button {
    width: 144px;
    height: 42px;
    margin: 10px 0 0 24px;
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