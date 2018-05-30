<template>
  <section id="service" class="section--service">
    <div class="container">
      <div class="upload-box">
        <div class="preview">
          <h3>上传需要识别的图片</h3>
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
        </div>
        <div class="operation">
          <div class="bench">
            <div class="tip">提示信息：</div>
            <div class="result">识别结果：</div>
            <div class="other">其他信息：</div>
          </div>
          <a class="upload-button" @click="uploadFile">上传图片并识别</a>
        </div>
      </div>
      <div class="intro">
        <h2>使用识别服务</h2>
        <p>上传需要进行识别的图像数据样本，服务器将会使用神经网络模型进行识别，最后返回该数据样本所属的类别。</p>
        <p>目前只能识别属于同一数据集中的样本，未来可能会实现以自定义数据集或自定义新模型来训练和预测的强大功能。</p>
        <p class="more">
          <router-link class="more-link" to="/service">体验更多服务...</router-link>
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Ajax from '../common/Ajax'
export default Vue.extend({
  name: "Service",
  data() {
    return {
      files: [],
      images: [],
    }
  },
  methods: {
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
      for (let file of this.files) {
        Ajax('upload-image', file)
      }
    }
  } 
})
</script>
<style scoped>
  .section--service {
    background: no-repeat url("/assets/index-teletype-graphic.svg") calc(50% + 1000px) center;
    height: 700px;
  }
  .container {
    display: flex;
  }
  .upload-box {
    height: 500px;
    width: 800px;
    background:#eaeaeb;
    border-radius: 6px;
    margin: 30px;
    box-shadow: 0 20px 30px rgba(0,0,0,0.5);
    color: #333;
    overflow: hidden;
    display: flex;
  }
  .preview {
    padding: 12px;
    width: 100%;
  }
  .preview > h3 {
    margin: 8px 16px;
    font-size: 16px;
    font-weight: 500;
  }
  .upload-preview {
    height: 396px;
    background: white;
    margin: 12px;
    border-radius: 4px;
    box-shadow: 0 0 6px #888 inset;
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
  }
  .preview-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 164px;
    width: 135px;
    border-radius: 6px;
    border: 1px solid #aaa;
    margin: 6px 8px 0;
    cursor: pointer;
    font-size: 14px;
    color: #666;
    overflow: hidden;
  }
  .upload-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 164px;
    width: 135px;
    border-radius: 6px;
    border: 2px dashed #aaa;
    margin: 6px 8px 0;
    cursor: pointer;
    font-size: 14px;
    color: #666;
    overflow: hidden;
  }
  .upload-img > p {
    margin: 0;
  }
  .upload-img:hover {
    border-color: #f5d683;
  }
  .upload-img:active {
    border-color: #d3b972;
  }
  .operation {
    margin-top: 55px;
    margin-right: 24px;
    width: 240px;
    height: 418px;
    border: 1px solid #aaa;
    border-radius: 12px;
  }
  .bench {
    height: 350px;
    border-bottom: 1px solid #aaa;
  }
  .tip {
    height: 100px;
    padding: 12px;
    border-bottom: 1px solid #aaa;
  }
  .result {
    height: 100px;
    padding: 12px;
    border-bottom: 1px solid #aaa;
  }
  .other {
    padding: 12px;
  }
  .upload-button {
    width: 207px;
    height: 50px;
    margin: 10px;
    border-radius: 6px;
    background: #ffd152;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .upload-button:hover {
    background: #ffc31f;
    color: #333;
  }
  .upload-button:active {
    background: #be9218;
  }
  .intro {
    width: 250px;
    margin: 120px 42px;
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
