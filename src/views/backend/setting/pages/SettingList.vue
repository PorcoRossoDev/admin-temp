<template>

    <div class="bg-gray-100 p-8 hidden">
      <div class="grid md:grid-cols-3 gap-6">

        <!-- iOS -->
        <div class="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
          <div class="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" color="currentColor" viewBox="0 0 24 24" class="svg-icon text-blue-500 text-8xl" data-component-name="Icon-Huge" data-name="Huge--AppStore"><path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 7 1 1.667M17 17l-3.6-6M13 7 7 17M6.5 14h6m5 0h-2"></path></svg>
          </div>

          <h3 class="font-semibold text-lg mb-2">Cấu hình chung</h3>

          <p class="text-gray-500 text-sm mb-4">
            Cấu hình chung cho website, bao gồm các thông tin cơ bản như: tên website, logo, favicon, tiêu đề, mô tả, từ khóa, v.v.
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
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" color="currentColor" viewBox="0 0 24 24" class="svg-icon undefined text-8xl" data-component-name="Icon-Huge" data-name="Huge--Apple"><path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12 5.75c0-2 1.5-4 3.5-4 0 2-1.5 4-3.5 4ZM12.5 8.09c-.515 0-.913-.164-1.359-.346-.563-.232-1.202-.494-2.248-.494C7.023 7.25 4 8.75 4 12.75c0 4.652 3.105 9.5 5.105 9.5.67 0 1.272-.263 1.849-.514.527-.23 1.033-.45 1.546-.45s1.018.22 1.546.45c.577.251 1.18.514 1.85.514 1.392 0 3.061-2.35 4.104-5.35-1.62-.68-2.662-2.282-2.662-4.15 0-1.629.866-2.71 2.162-3.5-1-1.5-2.487-2-3.555-2-1.046 0-1.685.262-2.248.494-.446.182-.682.346-1.197.346Z"></path></svg>
          </div>

          <h3 class="font-semibold text-lg mb-2">Cấu hình chung</h3>

          <p class="text-gray-500 text-sm mb-4">
            Cấu hình chung cho website, bao gồm các thông tin cơ bản như: tên website, logo, favicon, tiêu đề, mô tả, từ khóa, v.v.
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
        <el-col :span="6">
          <div>
            <div class="">
              <h3 class="text-xs text-gray-400">Thông tin chung</h3>
              <div class="mt-1">
                <el-button color="#626aef" class="!border-0 mb-2 !block w-full !text-left">
                  <span class="mr-2">
                    <svg width="22" height="22" class="transition-transform group-hover:scale-[0.85] scale-[0.85]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12793 12.4473C10.5144 13.9865 13.5892 13.9913 15.9824 12.4482L18.1475 13.0459C18.9899 13.2784 19.8348 13.2388 20.5977 12.9883L20.2471 17.0635L20.2432 17.1133L20.2324 17.1621L20.0361 18.0459C19.5247 20.3467 17.6671 22.0824 15.376 22.4668L15.291 21.4375C15.2905 21.4313 15.2897 21.4251 15.2891 21.4189L14.9072 17.9053C14.7738 16.6791 13.7383 15.7501 12.5049 15.75H11.5078C10.2667 15.7503 9.22722 16.6908 9.10352 17.9258L8.75391 21.4258L8.75293 21.4316L8.65723 22.4736C6.35076 22.1006 4.47781 20.3579 3.96387 18.0459L3.76758 17.1621L3.75684 17.1133L3.75293 17.0635L3.40234 13.002C4.15811 13.2505 4.99411 13.2922 5.8291 13.0674L8.12793 12.4473Z" fill="currentColor"></path><path opacity="0.4" d="M12.5049 17.25C12.9726 17.2501 13.3654 17.6024 13.416 18.0674L13.7959 21.5625L13.7979 21.5811L13.8828 22.6064L13.7451 22.6172C12.5836 22.7065 11.4164 22.7065 10.2549 22.6172L10.1514 22.6084L10.2461 21.5674L10.5957 18.0752C10.6426 17.6069 11.0372 17.2503 11.5078 17.25H12.5049Z" fill="currentColor"></path><path d="M10.908 1.49607C11.6296 1.46822 12.372 1.47107 13.0936 1.499L13.2625 2.4326L13.2645 2.44041L13.2655 2.44822L14.8358 10.1621L15.075 11.2461C13.2407 12.3792 10.9284 12.3876 9.08967 11.2793L9.30452 10.1387L9.30549 10.1377L10.7381 2.43553L10.7391 2.4326L10.908 1.49607Z" fill="currentColor"></path><path d="M9.2635 2.16209L7.82991 9.86326L7.6092 11.0342L5.43928 11.6191C3.81557 12.0564 2.18212 10.947 1.99104 9.27635L1.85237 8.05564L1.85041 8.0449C1.66332 6.17394 2.26892 4.67775 3.43049 3.60838C4.56309 2.56602 6.16386 1.98257 7.90315 1.75584L7.92463 1.75389L9.36311 1.60838L9.2635 2.16209Z" fill="currentColor"></path><path d="M16.075 1.75389L16.0965 1.75584C17.8358 1.98251 19.4364 2.56521 20.5692 3.6074C21.7312 4.67678 22.3364 6.17357 22.1492 8.0449L22.1483 8.05564L22.0106 9.2617C21.8187 10.9392 20.1744 12.0498 18.5467 11.6006L16.5682 11.0547L16.2996 9.83787L14.7391 2.16502L14.6385 1.60935L16.075 1.75389Z" fill="currentColor"></path></svg>
                  </span>
                  <span class="text-sm">Hệ thống</span>
                </el-button>
                <el-button class="!border-0 !bg-transparent mb-2 !block !ml-0">
                  <span class="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.14829 9.33075C3.35161 5.67103 6.15683 2.68743 9.79708 2.25917V2.25917C11.2606 2.08698 12.7394 2.08698 14.2029 2.25917V2.25917C17.8432 2.68743 20.6484 5.67103 20.8517 9.33075L20.8609 9.49692C20.9535 11.1631 20.9166 12.834 20.7505 14.4945L20.21 19.9002C20.126 20.7397 19.1044 21.1044 18.5078 20.5078L16.79 18.79C16.3686 18.3686 15.6744 18.407 15.3021 18.8724L12.7809 22.0239C12.3805 22.5243 11.6195 22.5243 11.2191 22.0239L8.69795 18.8724C8.32563 18.407 7.63142 18.3686 7.20997 18.79L5.49217 20.5078C4.89563 21.1044 3.87397 20.7397 3.79002 19.9002L3.24945 14.4945C3.0834 12.834 3.04649 11.1631 3.13906 9.49691L3.14829 9.33075Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.6" d="M8 10L16 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.6" d="M8 14L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                  </span>
                  <span>Thông tin liên lạc</span>
                </el-button>
                <el-button class="!border-0 !bg-transparent mb-2 !block !ml-0">
                  <span class="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M17.5 6.5C17.5 6 17.3715 5.41996 16.7315 4.78996L14.9815 3.02C13.6115 1.66 11.3915 1.66 10.0215 3.02L7 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1898 6.46553C19.0214 6.78016 21.2815 8.97074 21.6845 11.7912V11.7912C21.8938 13.2563 21.8938 14.7437 21.6845 16.2088V16.2088C21.2815 19.0293 19.0214 21.2198 16.1898 21.5345L15.3666 21.6259C13.1291 21.8745 10.8709 21.8745 8.63344 21.6259L7.81025 21.5345C4.97857 21.2198 2.71847 19.0293 2.31554 16.2088V16.2088C2.10624 14.7437 2.10624 13.2563 2.31554 11.7912V11.7912C2.71847 8.97074 4.97857 6.78016 7.81025 6.46553L8.63343 6.37406C10.8709 6.12545 13.1291 6.12545 15.3666 6.37406L16.1898 6.46553Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.6" d="M21.5 12H19C17.9 12 17 12.9 17 14C17 15.1 17.9 16 19 16H21.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>                  </span>
                  <span>Mạng xã hội</span>
                </el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="18">

            <!-- Breadcrumb -->
            <h1 class="text-[20px] font-bold">Hệ thống</h1>
            <el-breadcrumb separator="/" class="mt-2 !text-xs">
              <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
              <el-breadcrumb-item>Cấu hình</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="bg-white shadow-amber-100 p-5 pt-3 rounded-2xl border border-gray-200 mt-4">

            

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