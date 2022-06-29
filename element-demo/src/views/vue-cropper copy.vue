<template>
  <div style="height: 100%;width:100%;">
    <div class="show-info" style="text-align:center;">
      <h2>example1 基本例子 无限制</h2>
      <div style="text-align:center;">
        <div style="height:300px;width: 300px;margin:auto;">
          <vueCropper ref="cropper" :img="option.img" :outputSize="option.size"
            :outputType="option.outputType" :info="true" :full="option.full"
            :canMove="option.canMove" :canMoveBox="option.canMoveBox" :fixedBox="option.fixedBox"
            :original="option.original" :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth" :autoCropHeight="option.autoCropHeight"
            :centerBox="option.centerBox" :high="option.high" :infoTrue="option.infoTrue"
            :cropOffsertX="0" :cropOffsertY="0" @realTime="realTime" @imgLoad="imgLoad"
            @cropMoving="cropMoving" :enlarge="option.enlarge"></vueCropper>
        </div>
      </div>
      <div class="test-button">
        <button @click="changeImg" class="btn">changeImg</button>
        <label class="btn" for="uploads">upload</label>
        <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
          accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
        <button @click="startCrop" v-if="!crap" class="btn">start</button>
        <button @click="stopCrop" v-else class="btn">stop</button>
        <button @click="clearCrop" class="btn">clear</button>
        <button @click="refreshCrop" class="btn">refresh</button>
        <button @click="changeScale(1)" class="btn">+</button>
        <button @click="changeScale(-1)" class="btn">-</button>
        <button @click="rotateLeft" class="btn">rotateLeft</button>
        <button @click="rotateRight" class="btn">rotateRight</button>
        <button @click="finish('base64')" class="btn">preview(base64)</button>
        <button @click="finish('blob')" class="btn">preview(blob)</button>
        <a @click="down('base64')" class="btn">download(base64)</a>
        <a @click="down('blob')" class="btn">download(blob)</a>
        <a :href="downImg" download="demo.png" ref="downloadDom"></a>
      </div>

      <p>截图框大小</p>
      <div class="show-preview"
        :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden','margin': '5px'}">
        <div :style="previews.div">
          <img :src="previews.url" :style="previews.img">
        </div>
      </div>

      <p>中等大小</p>
      <div :style="previewStyle1">
        <div :style="previews.div">
          <img :src="previews.url" :style="previews.img">
        </div>
      </div>

      <p>迷你大小</p>
      <div :style="previewStyle2">
        <div :style="previews.div">
          <img :src="previews.url" :style="previews.img">
        </div>
      </div>

      <div style="display:block; width: 100%;">
        <label class="c-item">
          <span>上传图片是否显示原始宽高 (针对大图 可以铺满)</span>
          <input type="checkbox" v-model="option.original">
          <span>original: {{ option.original}}</span>
        </label>
        <label class="c-item">
          <span>是否根据dpr生成适合屏幕的高清图片</span>
          <input type="checkbox" v-model="option.high">
          <span>high: {{ option.high}}</span>
        </label>
        <label class="c-item">
          <span>是否输出原图比例的截图</span>
          <input type="checkbox" v-model="option.full">
          <span>full: {{ option.full}}</span>
        </label>
        <label class="c-item">
          <span>截图信息展示是否是真实的输出宽高</span>
          <input type="checkbox" v-model="option.infoTrue">
          <span>infoTrue: {{ option.infoTrue}}</span>
        </label>
        <label class="c-item">
          <span>能否拖动图片</span>
          <input type="checkbox" v-model="option.canMove">
          <span>canMove: {{ option.canMove}}</span>
        </label>
        <label class="c-item">
          <span>能否拖动截图框</span>
          <input type="checkbox" v-model="option.canMoveBox">
          <span>canMoveBox: {{ option.canMoveBox}}</span>
        </label>
        <label class="c-item">
          <span>截图框固定大小</span>
          <input type="checkbox" v-model="option.fixedBox">
          <span>fixedBox: {{ option.fixedBox}}</span>
        </label>
        <label class="c-item">
          <span>是否自动生成截图框</span>
          <input type="checkbox" v-model="option.autoCrop">
          <span>autoCrop: {{ option.autoCrop}}</span>
        </label>
        <label class="c-item">
          <span>截图框是否限制在图片里(只有在自动生成截图框时才能生效)</span>
          <input type="checkbox" v-model="option.centerBox">
          <span>centerBox: {{ option.centerBox}}</span>
        </label>
        <label class="c-item">
          <span>是否按照截图框比例输出 默认为1 </span>
          <input type="number" v-model="option.enlarge">
        </label>
        <p>输出图片格式</p>
        <label class="c-item">
          <label>jpg <input type="radio" name="type" value="jpeg"
              v-model="option.outputType"></label>
          <label>png <input type="radio" name="type" value="png"
              v-model="option.outputType"></label>
          <label>webp <input type="radio" name="type" value="webp"
              v-model="option.outputType"></label>
        </label>
      </div>

      <!-- <codes>
        <div slot="body">{{ code1 }}</div>
      </codes> -->
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  components: {
    VueCropper
  },
  data () {
    return {
      option: {
        img: require('../assets/logo.png'),
        size: 1,
        outputType: 'png',
        autoCrop: true,
        autoCropWidth: 150,
        autoCropHeight: 150
      },
      downImg: '',
      crap: true,
      previews: {},
      previewStyle1: {},
      previewStyle2: {},
      code1: ''
    }
  },
  mounted () {
  },
  methods: {
    changeOffser (x = 0, y = 0) {
      this.$nextTick(() => {
        this.$refs.cropper.cropOffsertX = x
        this.$refs.cropper.cropOffsertY = y
      })
    },

    realTime (data) {
      console.log(data, 'data')
      this.previews = data
      var h = 0.5
      var w = 0.2

      this.previewStyle1 = {
        width: this.previews.w + 'px',
        height: this.previews.h + 'px',
        overflow: 'hidden',
        margin: '0',
        zoom: h
      }

      this.previewStyle2 = {
        width: this.previews.w + 'px',
        height: this.previews.h + 'px',
        overflow: 'hidden',
        margin: '0',
        zoom: w
      }

      this.changeOffser()
    },

    imgLoad (data) { },

    cropMoving (data) {
      console.log(data, '-------------------')
    },

    changeImg () { },

    startCrop () {
      this.crap = true
      this.$refs.cropper.startCrop()
    },

    stopCrop () {
      this.crap = false
      this.$refs.cropper.stopCrop()
    },

    clearCrop () {
      this.crap = false
      this.$refs.cropper.clearCrop()
    },

    refreshCrop () {
      this.crap = false
    },

    rotateLeft () {
      this.$refs.cropper.rotateLeft()
    },

    rotateRight () {
      this.$refs.cropper.rotateRight()
    },

    down (type) {
      if (type === 'base64') {
        this.$refs.cropper.getCropData(data => {
          // do something
          console.log(data)
        })
      } else {
        this.$refs.cropper.getCropBlob(data => {
          // do something
          console.log(data)
        })
      }
    },

    changeScale (count) {
      this.$refs.cropper.changeScale(count)
    },

    finish (type) {
      if (type === 'base64') {
        this.$refs.cropper.getCropData(data => {
          // do something
          console.log(data)
        })
      } else {
        this.$refs.cropper.getCropBlob(data => {
          // do something
          console.log(data)
        })
      }
    }
  }
}
</script>

<style>
</style>
