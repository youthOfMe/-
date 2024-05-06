import { useHttpGet } from "../composables/useHttp"

export function useIndexDataApi() {
  return useHttpGet("IndexData", "/index", {
    // 懒加载
    lazy: true
  })
}

export function useGroupDataApi(query) {
  let q = useQueryToString(query)
  return useHttpGet("groupData", `/group/list${q}`)
}