<template>
  <n-grid x-gap="12" :cols="4" class="mb-6">
    <n-gi v-for="(item, index) in data" :key="index" @click="$commonOpen(item)">
      <n-card class="cursor-pointer">
        <template #cover>
          <img :src="item?.src" class="w-[100%] h-[90px]" />
        </template>
        <div class="text-center pt-4">
          {{ item?.name }}
        </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup>
import {
  NGrid, NGi, NCard
} from 'naive-ui'

defineProps({
  data: Array
})
</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>