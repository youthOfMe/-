<template>
  <n-drawer v-model:show="drawer" placement="top">
    <div class="h-full flex justify-center items-center">
      <n-input-group class="flex justify-center items-center">
        <n-input size="large" v-model="keyword" placeholder="请输入关键字" :style="{ width: '50%' }" />
        <n-button size="large" type="primary" ghost :disabled="!keyword" @click="handleSearch">
          搜索
        </n-button>
      </n-input-group>
    </div>
  </n-drawer>
</template>

<script setup>
import {
  NDrawer,
  NInputGroup,
  NInput,
  NButton
} from 'naive-ui'

const drawer = ref(false)
const keyword = ref()

const open = () => {
  drawer.value = true
}

const handleSearch = () => {
  console.log("搜索")
}

defineExpose({
  open
})
</script>