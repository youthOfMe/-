export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("commonOpen", (item) => {
    if (item.type === "webview") {
      window.open(item.url)
    }
  })
})