<template>
  <n-carousel autoplay show-arrow class="mb-6">
    <img v-for="(item, index) in data" :key="index" class="carousel-img rounded cursor-pointer" :src="item?.src"
      @click="$commonOpen(item)">
  </n-carousel>
</template>
<script setup>
import { NCarousel } from "naive-ui"

defineProps({
  data: Array
})

// 将该函数通过插件的形式抽取到全局
const open = (item) => {
  if (item.type === 'webview') {
    window.open(item?.url)
  }
}
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>