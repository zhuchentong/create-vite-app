<template>
  <n-drawer v-model:show="app.settingDrawerVisible" :width="350">
    <n-drawer-content>
      <!-- <el-drawer
    :size="350"
    v-model="app.settingDrawerVisible"
    :with-header="false"
    :before-close="handleClose"
    :append-to-body="true"
    :show-close="false"
    :close-on-press-escape="true"
  > -->
      <div text-center>
        <!-- <GlobalLayout /> -->
        <GlobalTheme />
        <!-- <GlobalConfig /> -->
      </div>
      <!-- <GlobalCopy /> -->
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'

const app = useAppStore()
console.log(app.settingDrawerVisible)

const handleClose = (done: () => void) => {
  done()
}
</script>
<style scoped lang="scss">
:deep(.el-overlay) {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>
