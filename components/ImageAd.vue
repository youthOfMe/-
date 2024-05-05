<template>
  <img v-for="(item, index) in data" :key="index" :src="item?.src"
    class="w-[100%] h-[100px] rounded mb-6 cursor-pointer" @click="$commonOpen(item)">
</template>
<script setup>
defineProps({
  data: Array
})

// 这个也可以调用插件中定义的方法 如$commonOpen
// const nuxtApp = useNuxtApp()

</script>