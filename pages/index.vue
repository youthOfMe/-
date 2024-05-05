<template>
  <div>
    {{ data }}
  </div>
</template>
<script setup>
const { data } = await useFetch("/index", {
  key: "IndexData",
  baseURL: "http://demonuxtapi.dishait.cn/pc",
  headers: {
    appid: "bd9d01ecc75dbbaaefce"
  },
  // 响应拦截器
  transform: (res) => {
    return res.data
  }
})
</script>