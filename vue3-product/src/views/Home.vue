<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h2>111111111111</h2>
      <h3>222222222222</h3>
    </div>
    <div>
      <button 
        v-for="(item, index) in girls" 
        :key="index"
        @click="setSelectGirl(index)"
      >
        {{ item }} : {{ index }}
      </button>
      <button @click="overAction()">
        点餐完成
      </button>
      <div>{{ overText }}</div>
    </div>
    <div>{{ selectGirl }}</div>
    <div><button @click="getNowTime()">显示时间</button></div>
    <div>{{ nowTime }}</div>
  </div>
</template>

<script lang="ts">
interface DataProps {
  girls: string[];
  selectGirl: string;
  setSelectGirl: (index: number) => void;
  overText?: string;
  overAction?: () => void;
}

enum person {
  wahaha = 'oooo',
  shuangwaiwai = 'iiii',
  pinduoduo = 'pinduoduo',
  dashanghai = 'dashanghai'
}

import { 
  defineComponent, 
  reactive, 
  ref, 
  toRefs,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
  watch
  } from 'vue'
import { nowTime, getNowTime } from '../use/useNowTime'
// setup 函数的用法，可以代替 Vue2 中的 date 和 methods 属性，直接把逻辑卸载 setup 里就可以
// ref 函数的使用，它是一个神奇的函数，我们这节只是初次相遇，要在template中使用的变量，必须用ref包装一下
// return出去的数据和方法，在模板中才可以使用，这样可以精准的控制暴漏的变量和方法
export default defineComponent({
  name: 'home',
  components: {},
  setup() {
    console.log("1-开始创建组件-----setup()");
    // const girls = ref(['dajiao', 'xiaojiao', 'zhulao', 'aaaa'])
    // const selectGirl = ref('')
    // const setSelectGirl = (index: number) => {
    //   selectGirl.value = girls.value[index]
    // }
    // return {
    //   girls,
    //   selectGirl,
    //   setSelectGirl
    // }

    const data: DataProps = reactive({
      girls: ['dajiao', 'xiaojiao', 'zhulao', 'aaaa'],
      selectGirl: '',
      setSelectGirl: (index: number) => {
        data.selectGirl = data.girls[index]
      },
      // overText: 'oooooooooooo',
      // overAction: () => {
      //   data.overText = data.overText + '点餐完成 | '
      //   document.title = data.overText;
      // }
    })
    const overText = ref("红浪漫");
    const overAction = () => {
      overText.value = overText.value + "点餐完成 | ";
      // document.title = overText.value;
    };
    const refData = toRefs(data)

    watch(overText, (newValue, oldValue) => {
      document.title = newValue;
    })

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });

    onRenderTracked((event) => {
      // console.log("状态跟踪组件----------->", event);
    })

    onRenderTriggered((event) => {
      console.log("状态触发组件--------------->");
      console.log(event);
    });

    return {
      ...refData,
      overText,
      overAction
    }
  }
})

</script>
