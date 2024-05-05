<template>
  <div>
    <n-button type="primary" size="medium">123456</n-button>
    <button class="btn">666</button>
  </div>
</template>
<script setup>
import {
  NButton
} from "naive-ui"

showError("故意报错的")
</script>
<style>
.btn {
  @apply text-purple-500 border border-purple-700 px-[20px] py-[20px] !rounded-full hover:(bg-purple-400 text-white)
}
</style>
