<template>
  <div>
    <h5 class="text-lg my-3">"{{ title }}"的搜索的相关结果</h5>
    <UiTab>
      <UiTabItem :active="type === item.value" v-for="(item, index) in tabs" :key="index"
        @click="handleClick(item.value)">{{
          item.label }}</UiTabItem>
    </UiTab>

    <LoadingGroup :pending="pending" :error="error">
      <n-grid :x-gap="20" :cols="4">
        <n-gi v-for="(item, index) in rows" :key="index">
          <CourseList :item="item"></CourseList>
        </n-gi>
      </n-grid>
    </LoadingGroup>
  </div>
</template>
<script setup>
import { NGrid, NGi } from 'naive-ui'

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

const page = ref(parseInt(route.params.page))
const {
  data,
  pending,
  err,
  refresh
} = await useSearchListApi({
  page: page.value,
  keyword: encodeURIComponent(title.value),
  type: type.value
})
const rows = computed(() => data.value?.rows ?? [])

definePageMeta({
  middleware: ["search"]
})
</script>