<template>
  <div>
    公共列表: {{ $route.params.bbs_id }} ~ {{ $route.params.page }} ~ {{ $route.name }}
  </div>
</template>
<script setup>
useHead({
  title: "社区问答列表"
})
</script>