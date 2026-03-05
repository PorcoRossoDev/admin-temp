<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Cấu hình chung' />

    <div class="bg-gray-100 p-8">
      <div class="grid md:grid-cols-3 gap-6">

        <!-- iOS -->
        <div class="bg-white rounded-xl shadow-sm p-8 text-center border">
          <div class="flex justify-center mb-4">
            <div class="border-2 border-blue-500 rounded-xl p-3">
              <el-icon size="40" color="#3b82f6">
                <Apple />
              </el-icon>
            </div>
          </div>

          <h3 class="font-semibold text-lg mb-2">iOS App</h3>

          <p class="text-gray-500 text-sm mb-4">
            Boltify App is an easier way to work with iOS.
          </p>

          <a href="#" class="text-blue-500 text-sm block mb-4">
            View website
          </a>

          <el-button round>
            Download with AppStore
            <el-icon class="ml-1">
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>


        <!-- macOS -->
        <div class="bg-white rounded-xl shadow-sm p-8 text-center border">
          <div class="flex justify-center mb-4">
            <el-icon size="48">
              <Apple />
            </el-icon>
          </div>

          <h3 class="font-semibold text-lg mb-2">macOS App</h3>

          <p class="text-gray-500 text-sm mb-4">
            Boltify App is an easier way to work with macOS.
          </p>

          <a href="#" class="text-blue-500 text-sm block mb-4">
            View website
          </a>

          <el-button round>
            Download with AppStore
            <el-icon class="ml-1">
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>


        <!-- Android -->
        <div class="bg-white rounded-xl shadow-sm p-8 text-center border">
          <div class="flex justify-center mb-4">
            <div class="border-2 border-green-500 rounded-xl p-3">
              <el-icon size="40" color="#10b981">
                <Promotion />
              </el-icon>
            </div>
          </div>

          <h3 class="font-semibold text-lg mb-2">Android App</h3>

          <p class="text-gray-500 text-sm mb-4">
            Boltify App is an easier way to work with Android.
          </p>

          <a href="#" class="text-blue-500 text-sm block mb-4">
            View website
          </a>

          <el-button round>
            Download with Play Store
            <el-icon class="ml-1">
              <ArrowRight />
            </el-icon>
          </el-button>
        </div>

      </div>
    </div>

    <el-row :gutter="20" class="mt-6">
        <el-col :span="8">
            <div class="bg-white border-[#f3f2f9] p-4 mb-4">
              <div class="p-4 bg-[#F7F8FA] border border-[#f3f2f9] border-b-0">
                <div class="flex items-center gap-3">
                  <span class="bg-[#E3E1FB] w-12 h-12 inline-flex items-center justify-center rounded-xs">
                    <svg class="w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Compiler Explorer</title><path fill="#735DFF" d="M8.78 14.147h8.914v1.657H8.78Zm0-2.94h7.355v1.657H8.78Zm0-2.943h8.914V9.92H8.78Zm13.203 9.195a.656.656 0 0 1 0-.638c.13-.238.252-.476.366-.728a.271.271 0 0 0-.249-.383h-2.166a.656.656 0 0 0-.552.297 7.59 7.59 0 0 1-.977 1.208 7.323 7.323 0 0 1-5.21 2.156 7.321 7.321 0 0 1-5.208-2.157 7.32 7.32 0 0 1-2.157-5.21c0-1.969.766-3.821 2.156-5.211a7.323 7.323 0 0 1 5.21-2.156c1.967 0 3.819.766 5.21 2.157.368.369.696.783.976 1.207.12.186.327.297.551.297H22.1a.273.273 0 0 0 .248-.383 9.894 9.894 0 0 0-.365-.728.665.665 0 0 1 0-.638l.735-1.332a.663.663 0 0 0-.11-.787l-1.836-1.836a.659.66 0 0 0-.787-.11l-1.335.738a.656.656 0 0 1-.638-.004 9.767 9.768 0 0 0-2.005-.824.657.657 0 0 1-.452-.449L15.131.48a.664.664 0 0 0-.635-.48h-2.598a.657.657 0 0 0-.634.48l-.421 1.46a.657.657 0 0 1-.452.448c-.697.203-1.37.48-2.005.828-.2.11-.438.11-.638.003L6.41 2.484a.663.663 0 0 0-.787.11L3.788 4.432a.659.66 0 0 0-.11.787l.737 1.335c.11.2.107.438-.003.638a9.767 9.768 0 0 0-.825 2.005.657.657 0 0 1-.448.452l-1.46.42a.664.664 0 0 0-.479.635v2.599c0 .293.193.556.48.635l1.459.42a.657.657 0 0 1 .448.453c.204.697.48 1.37.828 2.004.11.2.11.438.004.64l-.738 1.334a.663.663 0 0 0 .11.786l1.835 1.837a.659.66 0 0 0 .787.11l1.335-.738c.2-.11.438-.107.638.003a9.767 9.768 0 0 0 2.005.825c.217.062.39.23.452.448l.42 1.46c.083.283.342.48.635.48h2.598a.657.657 0 0 0 .635-.48l.421-1.46a.657.657 0 0 1 .452-.448 9.975 9.976 0 0 0 2.004-.828.67.67 0 0 1 .639-.004l1.335.739c.259.14.58.096.786-.11l1.836-1.837a.659.66 0 0 0 .11-.787z"/></svg>
                  </span>
                  <div>
                    <span class="font-semibold text-[17px]">Cấu hình chung website</span>
                    <p class="text-[12px] text-gray-500">Quản lý các thông tin cơ bản cho website</p>
                  </div>
                </div>
              </div>
              <div class="bg-white px-4 border border-[#f3f2f9] py-5">
                <div>
                  <span class="bg-[#F7F8FA] border border-[#f3f2f9] rounded-sm inline-flex items-center px-1 mr-2">
                    <el-icon color="#98a5c3" :size=12><Location /></el-icon><span class="ml-0.5 text-[11px]">Trang chủ</span>
                  </span>
                  <span class="bg-[#F7F8FA] border border-[#f3f2f9] rounded-sm inline-flex items-center px-1 mr-2">
                    <el-icon color="#98a5c3" :size=12><Location /></el-icon><span class="ml-0.5 text-[11px]">Logo</span>
                  </span>
                  <span class="bg-[#F7F8FA] border border-[#f3f2f9] rounded-sm inline-flex items-center px-1 mr-2">
                    <el-icon color="#98a5c3" :size=12><Location /></el-icon><span class="ml-0.5 text-[11px]">Tiêu đề</span>
                  </span>
                  <span class="bg-[#F7F8FA] border border-[#f3f2f9] rounded-sm inline-flex items-center px-1 mr-2">
                    <el-icon color="#98a5c3" :size=12><Location /></el-icon><span class="ml-0.5 text-[11px]">Favicon</span>
                  </span>
                  <span class="bg-[#F7F8FA] border border-[#f3f2f9] rounded-sm inline-flex items-center px-1 mr-2">
                    <el-icon color="#98a5c3" :size=12><Location /></el-icon><span class="ml-0.5 text-[11px]">Brand</span>
                  </span>
                </div>
                <div class="text-right mt-2">
                  <el-button class="!bg-[#735DFF] !text-white !text-[12px]">Chỉnh sửa <el-icon class="ml-2"><Right /></el-icon></el-button>
                </div>
              </div>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import { Tools, Right, Location, Apple, ArrowRight, Promotion } from '@element-plus/icons-vue'
</script>

<style scoped>
:deep(.el-card__header) {
    background: #dddddd6b;
}
.el-card__body {
    padding: 11px;
}
</style>