<template>
  <JJHorizontalScrollVue>
    <div class="scrollbar-flex-content">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </JJHorizontalScrollVue>
</template>

<script setup lang="ts">
// import {ref} from 'vue'
import JJHorizontalScrollVue from './JJHorizontalScroll.vue'
</script>

<style lang="less" scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
