<template>
  <div class="count-down">
    <small>{{ data }}</small>
  </div>
</template>
<script setup>
const props = defineProps({
  time: {
    type: [String, Number],
    default: ""
  }
})

const emit = defineEmits(["start", "end"])

const data = ref('')
onNuxtReady(() => {
  data.value = useCountDown(props.time)
})

function useCountDown(end_time) {
  const timeout = ref(0)
  const Timer = ref(null)

  if (typeof end_time === "string") {
    end_time = (new Date(end_time)).getTime()
  }

  // 结束时间戳 - 当前时间戳 毫秒转为秒
  timeout.value = (end_time - Date.now()) / 1000

  // 如果timeout <= 0, 直接结束
  if (timeout.value <= 0) return emit("end")

  close()

  // 开启倒计时
  Timer.value = setInterval(() => {
    timeout.value--
    // 如果 timeout.value <= 0, 关闭定时器, 触发结束
    if (timeout.value <= 0) {
      close()
      emit("end")
    }
  }, 1000);

  function close() {
    if (Timer.value) clearInterval(Timer.value)
  }

  // 将 秒 转为 天/时/分/秒
  const d = computed(() => getDuration(timeout.value))

  return d
}

function getDuration(second) {
  let duration
  const days = Math.floor(second / 86400);
  const hours = Math.floor((second % 86400) / 3600);
  const minutes = Math.floor(((second % 86400) % 3600) / 60);
  const seconds = Math.floor(((second % 86400) % 3600) % 60);
  if (days > 0) duration = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
  else if (hours > 0) duration = hours + "小时" + minutes + "分" + seconds + "秒";
  else if (minutes > 0) duration = minutes + "分" + seconds + "秒";
  else if (seconds > 0) duration = seconds + "秒";
  return duration;
}
</script>

<style scoped>
.count-down small {
  background-color: #fff;
  border-radius: 2px;
  padding: 2px 3px;
  margin: 0 3px;
  @apply text-yellow-500;
}
</style>