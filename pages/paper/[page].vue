<template>
  <div>
    考试列表 {{ $route.params.page }} ~ {{ $route.name }}
  </div>
</template>
<script setup>
useHead({
  title: "考试列表"
})
</script>