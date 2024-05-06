<template>
  <div>
    <template v-if="pending">
      加载中...
    </template>
    <template v-else-if="error">
      错误提示: {{ error?.data?.data }}
    </template>
    <template v-else>
      <template v-for="(item, index) in data" :key="index">
        <Banner :data="item.data" v-if="item.type === 'swiper'"></Banner>
        <ImageNav :data="item.data" v-else-if="item.type === 'icons'"></ImageNav>
        <ImageAd :data="item.data" v-else-if="item.type === 'imageAd'"></ImageAd>
        <ListCard :title="item.title" :data="item.data" v-else-if="item.type === 'list'"></ListCard>
        <ListCard :title="item.title" :type="item.listType" :data="item.data" v-else-if="item.type === 'promotion'">
        </ListCard>
      </template>
    </template>
  </div>
</template>
<script setup>

useHead({
  title: "牛马编程首页"
})

const { pending, data, refresh, error } = await useIndexDataApi()

// 服务端时直接报错
if (process.server && error.value) {
  createError(error.value?.data?.data)
}
</script>