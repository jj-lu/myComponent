<template>
  <div class="horizontal-scroll-container">
    <el-icon v-show="leftShow" @click="onLeftClicked"><DArrowLeft /></el-icon>
    <el-scrollbar ref="scrollbarRef" wrap-class="jj-test-wrap" view-class="jj-test-view">
      <slot></slot>
    </el-scrollbar>
    <el-icon v-show="rightShow" @click="onRightClicked"><DArrowRight /></el-icon>
  </div>

  <el-button @click="onButtonClick">1</el-button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElScrollbar } from 'element-plus'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

const leftShow = computed(() => {
  console.log(index.value)
  return index.value !== 0
})

const rightShow = computed(() => {
  const view = document.getElementsByClassName('jj-test-view')
  if (view.length) {
    console.log(view[0].scrollWidth)
    console.log(view[0].scrollLeft)
    return index.value * 120 + view[0].clientWidth < view[0].scrollWidth
  } else return true
})

let index = ref<number>(0)
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const onRightClicked = () => {
  index.value++
  console.log(index.value)
  const wrap = document.getElementsByClassName('jj-test-wrap')
  console.log(wrap)
  scrollbarRef.value?.setScrollLeft(index.value * 120)
  // scrollbarRef.value?.scrollTo(index.value)
}
const onLeftClicked = () => {
  index.value--
  console.log(index.value)
  scrollbarRef.value?.setScrollLeft(index.value * 100)
}

onMounted(() => {
  // const res = new O()
  myDebounce(onButtonClick, 500)
})

const myDebounce = (fn: () => void, delay: number | undefined) => {
  // let timer: NodeJS.Timeout
  let timer: any
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

const onButtonClick = myDebounce(() => {
  console.log(1)
}, 500)
</script>

<style scoped lang="less">
.horizontal-scroll-container {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.el-icon {
  margin: 0 1em;
  line-height: 50px;
  cursor: pointer;
}
:deep(.el-scrollbar__bar) {
  display: none;
  // overflow-x: hidden;
}
.jj-test-view {
  transition: all 1s;
}
</style>
