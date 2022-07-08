<template>
  <div style="height: 100%;width:100%;">
    <div class="show-info" style="text-align:center;">
      <h2>自动裁剪图片</h2>
      <div>
        <el-form :inline="true" :model="formInline">
          <el-form-item v-for="item in formItem" :key="item.value" :label="item.label">
            <el-input-number v-model="formInline[item.value]"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="startImageFragments">启动</el-button>
            <el-upload class="upload-demo" :before-upload="beforeUpload" action=""
              style="display: inline-block;margin:0 10px;">
              <el-button type="primary">点击上传</el-button>
            </el-upload>
            <el-button type="primary" @click="() => { cropImage = [] }">清除截图</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div style="text-align:center;">
        <div style="height:842px;width: 595px;;margin:auto;">
          <vueCropper ref="cropper" :img="option.img" :outputSize="option.size"
            :outputType="option.outputType" :info="true" :full="option.full"
            :canMove="option.canMove" :canMoveBox="option.canMoveBox" :fixedBox="option.fixedBox"
            :original="option.original" :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth" :autoCropHeight="option.autoCropHeight"
            :centerBox="option.centerBox" :high="option.high" :infoTrue="option.infoTrue"
            :cropOffsertX="0" :cropOffsertY="0" @realTime="realTime" @imgLoad="imgLoad"
            @cropMoving="cropMoving" :enlarge="option.enlarge"></vueCropper>
        </div>
        <div>
          <img v-for="item in cropImage" :key="item" :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'

// 将file文件上传转化为base64进行显示
function getBase64 (file) {
  return new Promise((resolve, reject) => {
    /// FileReader类就是专门用来读文件的
    const reader = new FileReader()
    // 开始读文件
    // readAsDataURL: dataurl它的本质就是图片的二进制数据， 进行base64加密后形成的一个字符串，
    reader.readAsDataURL(file)
    // 成功和失败返回对应的信息，reader.result一个base64，可以直接使用
    reader.onload = () => resolve(reader.result)
    // 失败返回失败的信息
    reader.onerror = error => reject(error)
  })
}

export default {
  components: {
    VueCropper
  },
  data () {
    return {
      option: {
        img: require('../assets/a4.jpg'),
        size: 1,
        outputType: 'jpeg',
        autoCrop: true,
        autoCropWidth: 95,
        autoCropHeight: 100
      },
      cropImage: [],
      formInline: {
        x: 93,
        y: 103,
        w: 95,
        h: 100,
        xOffset: 105,
        yOffset: 170,
        xNumber: 4,
        yNumber: 4
      },
      formItem: [
        {
          label: '宽',
          value: 'w'
        },
        {
          label: '高',
          value: 'h'
        },
        {
          label: 'x起始坐标',
          value: 'x'
        },
        {
          label: 'y起始坐标',
          value: 'y'
        },
        {
          label: 'x移动距离',
          value: 'xOffset'
        },
        {
          label: 'y移动距离',
          value: 'yOffset'
        },
        {
          label: 'x切割数量',
          value: 'xNumber'
        },
        {
          label: 'y切割数量',
          value: 'yNumber'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    async beforeUpload (file) {
      this.option.img = await getBase64(file)
      this.cropImage = []
      return false
    },
    startImageFragments () {
      this.cropImage = []
      this.option.autoCropWidth = this.formInline.w
      this.option.autoCropHeight = this.formInline.h
      const { x, y, xOffset, yOffset, xNumber, yNumber } = this.formInline
      this.getImageFragments(x, y, xOffset, yOffset, xNumber, yNumber)
    },
    //
    getImageFragments (x, y, xOffset, yOffset, xNumber, yNumber) {
      // const arr = [
      //   { x: 88 + 5, y: 73 + 30 }, { x: 88 + 5 + 105, y: 73 + 30 }, { x: 88 + 5 + 105 * 2, y: 73 + 30 }, { x: 88 + 5 + 105 * 3, y: 73 + 30 },
      //   { x: 88 + 5, y: 73 + 30 + 170 }, { x: 88 + 5 + 105, y: 73 + 30 + 170 }, { x: 88 + 5 + 105 * 2, y: 73 + 30 + 170 }, { x: 88 + 5 + 105 * 3, y: 73 + 30 + 170 },
      //   { x: 88 + 5, y: 73 + 30 + 170 * 2 }, { x: 88 + 5 + 105, y: 73 + 30 + 170 * 2 }, { x: 88 + 5 + 105 * 2, y: 73 + 30 + 170 * 2 }, { x: 88 + 5 + 105 * 3, y: 73 + 30 + 170 * 2 },
      //   { x: 88 + 5, y: 73 + 30 + 170 * 3 }, { x: 88 + 5 + 105, y: 73 + 30 + 170 * 3 }, { x: 88 + 5 + 105 * 2, y: 73 + 30 + 170 * 3 }, { x: 88 + 5 + 105 * 3, y: 73 + 30 + 170 * 3 }
      // ]
      // const arr = [
      //   { x: x, y: y }, { x: x + xOffset, y: y }, { x: x + xOffset * 2, y: y }, { x: x + xOffset * 3, y: y },
      //   { x: x, y: y + yOffset }, { x: x + xOffset, y: y + yOffset }, { x: x + xOffset * 2, y: y + yOffset }, { x: x + xOffset * 3, y: y + yOffset },
      //   { x: x, y: y + yOffset * 2 }, { x: x + xOffset, y: y + yOffset * 2 }, { x: x + xOffset * 2, y: y + yOffset * 2 }, { x: x + xOffset * 3, y: y + yOffset * 2 },
      //   { x: x, y: y + yOffset * 3 }, { x: x + xOffset, y: y + yOffset * 3 }, { x: x + xOffset * 2, y: y + yOffset * 3 }, { x: x + xOffset * 3, y: y + yOffset * 3 }
      // ]

      // x 和 y 轴 切割图片的数量
      const arr1 = []
      for (let j = 0; j < yNumber; j++) {
        for (let i = 0; i < xNumber; i++) {
          arr1.push({ x: x + xOffset * i, y: y + yOffset * j })
        }
      }

      for (let i = 0; i < (xNumber * yNumber); i++) {
        setTimeout(() => {
          this.x = arr1[i].x
          this.y = arr1[i].y
          this.changeOffser(arr1[i].x, arr1[i].y)
        }, i * 500)
      }
    },

    changeOffser (x = 0, y = 0) {
      this.$nextTick(() => {
        this.$refs.cropper.cropOffsertX = x
        this.$refs.cropper.cropOffsertY = y
      })
    },

    realTime (data, x, y) {
      console.log(data, x, y)
      if (data.w !== 0 && data.h !== 0) {
        this.down()
      }
    },

    imgLoad (data) { },

    cropMoving (data) {
    },

    down (type = 'base64') {
      if (type === 'base64') {
        this.$refs.cropper.getCropData(data => {
          if (this.cropImage.indexOf(data) !== -1) {
            return
          }
          this.cropImage.push(data)
        })
      } else {
        this.$refs.cropper.getCropBlob(data => {
          console.log(data)
        })
      }
    }
  }
}
</script>

<style>
</style>
