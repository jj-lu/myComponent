<template>
  <el-select v-model="treeVal" placeholder="Select">
    <el-option style="height: auto">
      <div>
        <el-tree
          ref="treeRef"
          :data="testArray"
          node-key="value"
          highlight-current
        />
      </div>
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
// import {ref} from 'vue'
import { onMounted, PropType, ref, watch, nextTick } from "vue";
import { ElTree } from "element-plus";

const props = defineProps({
  testArray: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  testValue: {
    type: String,
  },
});

// const value = ref("2");
const treeVal = ref(props.testValue);
const treeRef = ref<null | InstanceType<typeof ElTree>>(null);

const data = ref<any[]>([]);

const test = () => {
  setTimeout(() => {
    data.value = [
      {
        value: "1",
        label: "Level one 1",
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            children: [
              {
                value: "1-1-1",
                label: "Level three 1-1-1",
              },
            ],
          },
        ],
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1",
              },
            ],
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1",
              },
            ],
          },
        ],
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1",
              },
            ],
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1",
              },
            ],
          },
        ],
      },
    ];
  }, 1000);
  setTimeout(() => {
    // treeRef.value?.setCurrentKey("1");
    // treeVal.value = "1";
  }, 100);
};

const onSelectChange = (val: string) => {
  console.log(val);

  treeRef.value?.setCurrentKey(val);
};

watch(
  () => props.testArray,
  (newVal) => {
    data.value = newVal;
    console.log(newVal);
    // treeRef.value?.setCurrentKey("2");
    // const val = treeRef.value?.getCurrentKey();
    // console.log(val);
    // treeRef.value = val.label;

    // setTimeout(() => {
    //   treeRef.value?.setCurrentKey("2");
    //   const val = treeRef.value?.getCurrentNode();
    //   console.log(val);
    //   treeVal.value = val?.label;
    // }, 1);

    nextTick(() => {
      treeRef.value?.setCurrentKey("2");
      const val = treeRef.value?.getCurrentNode();
      console.log(val);
      treeVal.value = val?.label;
    });
  }
);

onMounted(() => {
  // test();
});
</script>

<style lang="less" scoped>
:deep(.el-select-dropdown__item) {
  padding: 0;
}
</style>
