<template>
  <h1>树形下拉</h1>
  <div>
    <el-tree-select
      check-strictly="true"
      v-model="value"
      :data="data"
      @change="onSelectChange"
    />
  </div>
  <div>
    <el-tree
      ref="treeRef"
      :data="data"
      :current-node-key="value"
      node-key="value"
      highlight-current
    />
    <!-- :default-checked-keys="['2']"
      show-checkbox -->
  </div>
  <div>
    <!-- <el-select v-model="value" placeholder="Select">
      <el-option style="height: auto">
        <div>
          <el-tree
            ref="treeRef"
            :data="data"
            :current-node-key="value"
            node-key="value"
            highlight-current
          />
        </div>
      </el-option>
    </el-select> -->
    <JJTreeSelect :testArray="data"></JJTreeSelect>
  </div>
</template>

<script setup lang="ts">
// import {ref} from 'vue'
import { onMounted, ref, watch } from "vue";
import { ElTree } from "element-plus";
import JJTreeSelect from "./JJTreeSelect.vue";

// const value = ref("2");
const value = ref();
const treeRef = ref<null | InstanceType<typeof ElTree>>(null);

const data = ref<any[]>([]);
// const data = ref<any[]>([
//   {
//     value: "1",
//     label: "Level one 1",
//     children: [
//       {
//         value: "1-1",
//         label: "Level two 1-1",
//         children: [
//           {
//             value: "1-1-1",
//             label: "Level three 1-1-1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "2",
//     label: "Level one 2",
//     children: [
//       {
//         value: "2-1",
//         label: "Level two 2-1",
//         children: [
//           {
//             value: "2-1-1",
//             label: "Level three 2-1-1",
//           },
//         ],
//       },
//       {
//         value: "2-2",
//         label: "Level two 2-2",
//         children: [
//           {
//             value: "2-2-1",
//             label: "Level three 2-2-1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "3",
//     label: "Level one 3",
//     children: [
//       {
//         value: "3-1",
//         label: "Level two 3-1",
//         children: [
//           {
//             value: "3-1-1",
//             label: "Level three 3-1-1",
//           },
//         ],
//       },
//       {
//         value: "3-2",
//         label: "Level two 3-2",
//         children: [
//           {
//             value: "3-2-1",
//             label: "Level three 3-2-1",
//           },
//         ],
//       },
//     ],
//   },
// ]);

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
    treeRef.value?.setCurrentKey("1");
    value.value = "1";
  }, 100);
};

const onSelectChange = (val: string) => {
  console.log(val);

  treeRef.value?.setCurrentKey(val);
};

onMounted(() => {
  test();
});
</script>

<style lang="less" scoped>
:deep(.el-select-dropdown__item) {
  padding: 0;
}
</style>
