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
            <div class="result">
              <span>识别结果：</span>
              <div v-if="show" class="result-item" v-for="(image, index) in images" :key="index">
                <img :src="image" />
                <div>
                  <div>识别为：</div>
                  <div><strong>{{result[index]}}</strong></div>
                </div>
              </div>
            </div>
          </div>
          <a class="button" @click="uploadFile">上传图片并识别</a>
          <div class="divider"></div>
          <a class="button" @click="cleanFile">清空</a>
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
      result: ['丝光皱条', '黄斑'],
      show: false,
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
      this.$message({ message: '提交成功！', center: true, type: 'success' })
      const a = this.$message({ message: '正在识别...', center: true, duration: 0 })
      setTimeout(() => {
        a.close()
        this.$message({ message: '识别成功！', center: true, type: 'success' })
        this.show = true
      }, 2000)
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
    overflow: hidden;
  }
  .preview-img,
  .upload-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 136px;
    width: 136px;
    border-radius: 6px;
    border: 1px solid #aaa;
    margin: 6px 8px 0;
    cursor: pointer;
    font-size: 14px;
    color: #666;
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
    height: 280px;
    border-bottom: 1px solid #aaa;
  }
  .tip {
    height: 100px;
    padding: 12px;
    border-bottom: 1px solid #aaa;
  }
  .result {
    padding: 12px;
    overflow: hidden;
  }
  .other {
    padding: 12px;
  }
  .button {
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
  .button:hover {
    background: #ffc31f;
    color: #333;
  }
  .button:active {
    background: #be9218;
  }
  .divider {
    width: 100%;
    height: 1px;
    background: #aaa;
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
  .result-item {
    display: flex;
    margin: 6px 12px;
  }
  .result-item > img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
</style>
