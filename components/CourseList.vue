<template>
  <n-card class="cursor-pointer mb-5 shadow-md !border-0">
    <template #cover>
      <img :src="item?.cover" class="w-[100%] h-[150px]" />
    </template>
    <div class="pt-4">
      <span class="font-fold w-full truncate font-semibold">{{ item?.title }}</span>
      <div class="mt-2 flex">
        价格
      </div>
    </div>
  </n-card>
</template>

<script setup>
import {
  NCard
} from 'naive-ui'

defineProps({
  item: Object
})
</script>