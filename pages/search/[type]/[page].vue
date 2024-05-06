<template>
  <div>
    <h5 class="text-lg my-3">"{{ title }}"的搜索的相关结果</h5>
    <UiTab>
      <UiTabItem :active="type === item.value" v-for="(item, index) in tabs" :key="index"
        @click="handleClick(item.value)">{{
          item.label }}</UiTabItem>
    </UiTab>
  </div>
</template>
<script setup>
const route = useRoute()
const title = ref(route.query.keyword)
const type = ref(route.params.type)
useHead({
  title
})

const tabs = [{
  label: "课程",
  value: "course"
}, {
  label: "专栏",
  value: "column"
}]

const handleClick = (t) => {
  navigateTo({
    params: {
      ...route.params,
      type: t
    },
    query: {
      ...route.query
    }
  })
}

definePageMeta({
  middleware: ["search"]
})
</script>