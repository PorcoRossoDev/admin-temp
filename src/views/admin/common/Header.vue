<template lang="">
    <el-header class="bg-white !h-[70px] shadow-[-2px_0_3px_0_rgb(0_0_0_/_0.1)] border-l border-gray-200 items-center justify-between flex">

        <!-- Ẩn/Hiển thị sidebar -->
        <div>
          <el-button circle size="medium" @click="isCollapse = !isCollapse" :icon="isCollapse ? Expand : Fold" />
        </div>
        <div class="flex items-center gap-x-5">

          <!-- Chế độ toàn màn hình -->
          <el-icon><FullScreen /></el-icon>

          <!-- Thông báo -->
          <el-dropdown placement="bottom-end">
            <span class="el-dropdown-link"><el-badge :value="12" style="--el-badge-font-size: 8px"><el-button circle size="medium" :icon="Bell" /></el-badge></span>
            <template #dropdown>
              <div class="flex justify-between items-center w-[300px] p-3 border-b border-gray-200">
                <div class="font-medium">Thông báo</div>
                <span class="underline">Xoá tất cả</span>
              </div>

              <!-- Danh sách thông báo -->
               <el-scrollbar height="300px" @end-reached="loadMore">
              <div class="px-3 mt-3 flex flex-col gap-y-2">
                <div >
                  <div class="text-gray-400 font-medium">06/01/2026</div>
                  <div class="mt-2 flex flex-col gap-y-2">
                    <div class="flex gap-x-2">
                      <el-avatar
                      class="w-7 h-7"
                        src="https://themes.coderthemes.com/konrix_r/assets/avatar-6-2eef30df.jpg"
                      />
                      <div>
                        <h3 class="font-medium text-[14px]">Karen Robinson <small class="text-gray-400">5 ngày trước</small></h3>
                         <el-text class="w-[200px] mb-2 !text-[12px]" truncated>Wow ! this admin looks good and awesome design this admin looks good and awesome design</el-text>
                      </div>
                    </div>
                    <div class="flex gap-x-2">
                      <el-avatar
                      class="w-7 h-7"
                        src="https://themes.coderthemes.com/konrix_r/assets/avatar-6-2eef30df.jpg"
                      />
                      <div>
                        <h3 class="font-medium text-[14px]">Karen Robinson <small class="text-gray-400">5 ngày trước</small></h3>
                         <el-text class="w-[200px] mb-2 !text-[12px]" truncated>Wow ! this admin looks good and awesome design this admin looks good and awesome design</el-text>
                      </div>
                    </div>
                    <div class="flex gap-x-2">
                      <el-avatar
                      class="w-7 h-7"
                        src="https://themes.coderthemes.com/konrix_r/assets/avatar-6-2eef30df.jpg"
                      />
                      <div>
                        <h3 class="font-medium text-[14px]">Karen Robinson <small class="text-gray-400">5 ngày trước</small></h3>
                         <el-text class="w-[200px] mb-2 !text-[12px]" truncated>Wow ! this admin looks good and awesome design this admin looks good and awesome design</el-text>
                      </div>
                    </div>
                    <div class="flex gap-x-2">
                      <el-avatar
                      class="w-7 h-7"
                        src="https://themes.coderthemes.com/konrix_r/assets/avatar-6-2eef30df.jpg"
                      />
                      <div>
                        <h3 class="font-medium text-[14px]">Karen Robinson <small class="text-gray-400">5 ngày trước</small></h3>
                         <el-text class="w-[200px] mb-2 !text-[12px]" truncated>Wow ! this admin looks good and awesome design this admin looks good and awesome design</el-text>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="text-gray-400 font-medium">06/01/2026</div>
                  <div class="mt-2">
                    <div class="flex gap-x-2">
                      <el-avatar
                      class="w-7 h-7"
                        src="https://themes.coderthemes.com/konrix_r/assets/avatar-6-2eef30df.jpg"
                      />
                      <div>
                        <h3 class="font-medium text-[14px]">Karen Robinson <small class="text-gray-400">5 ngày trước</small></h3>
                         <el-text class="w-[200px] mb-2 !text-[12px]" truncated>Wow ! this admin looks good and awesome design this admin looks good and awesome design</el-text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              </el-scrollbar>
            </template>
</el-dropdown>


<!-- Thông tin tài khoản -->
<el-dropdown placement="bottom-end">
  <span class="el-dropdown-link">
    <el-image class="rounded-full w-9 h-9" src="https://themes.coderthemes.com/konrix_r/assets/avatar-6-2eef30df.jpg"
      :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="srcList" show-progress :initial-index="4"
      fit="cover" />
  </span>
  <template #dropdown>
    <div class="flex p-3 gap-x-3 border-b border-gray-200 min-w-[200px] ">
      <el-avatar
      class="w-7 h-7"
        src="https://themes.coderthemes.com/konrix_r/assets/avatar-6-2eef30df.jpg"
      />
      <div>
        <b>Bình Xuân</b>
        <p>xuanbinhtxb@gmail.com</p>
      </div>
    </div>

    <div class="flex items-center gap-x-2 px-3 py-3">
      <el-icon size="medium"><Bell /></el-icon>
      <span>Thông báo cá nhân</span>
    </div>
    <div class="flex items-center gap-x-2 px-3 py-3">
      <el-icon size="medium"><CreditCard /></el-icon>
      <span>Hồ sơ cá nhân</span>
    </div>
    <div class="flex items-center gap-x-2 px-3 py-3 border-t border-gray-200">
      <el-icon size="medium"><Open /></el-icon>
      <span>Đăng xuất</span>
    </div>
              </template>
</el-dropdown>


</div>
</el-header>
</template>
<script setup>
import { ref } from 'vue'
import { Bell, Expand, Fold, FullScreen, CreditCard, Open } from '@element-plus/icons-vue'
</script>
<style scoped></style>