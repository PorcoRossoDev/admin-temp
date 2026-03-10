<template>

    

    <el-row :gutter="20">
      <el-col :span="4">
        <!-- Anchor menu -->
        <el-anchor :offset="70" class="!sticky top-20" @change="scrollToSection">
          <el-anchor-link href="#section1" title="Cấu hình chung" />
          <el-anchor-link href="#section2" title="Thông tin liên hệ" />
          <el-anchor-link href="#section3" title="Mạng xã hội" />
          <el-anchor-link href="#section4" title="Cấu hình website" />
          <el-anchor-link href="#section5" title="Thông tin Script" />
        </el-anchor>
      </el-col>

      <el-col :span="18">
        <div class="scroll-container">
          <div id="section1" class="mb-10 p-6 bg-white rounded-xl">
            <h2 class="text-xl font-bold mb-4">Cấu hình chung</h2>
            
            <div class="flex items-center mt-4">
              <label for="input1" class="w-1/3 font-medium label text-gray-500">Logo</label>
              <div class="w-2/3">
                
              </div>
            </div>
            
            <div class="flex items-center mt-4">
              <label for="input1" class="w-1/3 font-medium label text-gray-500">Thông tin công ty</label>
              <div class="w-2/3">
                <el-input id="input1" placeholder="Nhập thông tin công ty" class="custom-input" />
              </div>
            </div>

            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Khẩu hiệu</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập khẩu hiệu" class="custom-input" />
              </div>
            </div>
            
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Thời gian làm việc</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập thời gian làm việc" class="custom-input" />
              </div>
            </div>

            <div class="mt-4">
              <el-button class="!bg-transparent !rounded-xl border border-gray-300" type="primary" size="small">
                  <span class="text-[#409eff]">Lưu thay đổi</span>
              </el-button>
            </div>
          </div>

          <div id="section2" class="bg-white rounded-xl mb-10 p-6">
            <h2 class="text-xl font-bold mb-4">Thông tin liên hệ</h2>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Hotline</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập hotline" class="custom-input" />
              </div>
            </div>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Email</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập email" class="custom-input" />
              </div>
            </div>
            <div class="mt-4">
              <el-button class="!bg-transparent !rounded-xl border border-gray-300" type="primary" size="small">
                  <span class="text-[#409eff]">Lưu thay đổi</span>
              </el-button>
            </div>
          </div>

          <div id="section3" class="bg-white rounded-xl mb-10 p-6">
            <h2 class="text-xl font-bold mb-4">Mạng xã hội</h2>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Facebook</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập Facebook" class="custom-input" />
              </div>
            </div>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Twitter</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập Twitter" class="custom-input" />
              </div>
            </div>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Zalo</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập Zalo" class="custom-input" />
              </div>
            </div>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Youtube</label>
              <div class="w-2/3">
                <el-input id="input2" placeholder="Nhập Youtube" class="custom-input" />
              </div>
            </div>
            <div class="mt-4">
              <el-button class="!bg-transparent !rounded-xl border border-gray-300" type="primary" size="small">
                  <span class="text-[#409eff]">Lưu thay đổi</span>
              </el-button>
            </div>
          </div>

          <div id="section4" class="bg-white rounded-xl mb-10 p-6">
            <h2 class="text-xl font-bold mb-4">Cấu hình website</h2>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Bảo trì website</label>
              <div class="w-2/3">
                <el-switch
                  v-model="value2"
                  class="mt-2"
                  style="margin-left: 24px"
                  inline-prompt
                  :active-icon="Check"
                  :inactive-icon="Close"
                />
              </div>
            </div>
            <div class="mt-4">
              <el-button class="!bg-transparent !rounded-xl border border-gray-300" type="primary" size="small">
                  <span class="text-[#409eff]">Lưu thay đổi</span>
              </el-button>
            </div>
          </div>
          
          <div id="section5" class="bg-white rounded-xl mb-10 p-6">
            <h2 class="text-xl font-bold mb-4">Thông tin Script</h2>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Script Header</label>
              <div class="w-2/3">
                <el-mention
                  v-model="value"
                  type="textarea"
                  placeholder="Please input"
                  class="custom-input w-full"
                />
              </div>
            </div>
            <div class="flex items-center mt-4">
              <label for="input2" class="w-1/3 font-medium label text-gray-500">Script Footer</label>
              <div class="w-2/3">
                <el-mention
                  v-model="value"
                  type="textarea"
                  placeholder="Please input"
                  class="custom-input w-full"
                />
              </div>
            </div>
            <div class="mt-4">
              <el-button class="!bg-transparent !rounded-xl border border-gray-300" type="primary" size="small">
                  <span class="text-[#409eff]">Lưu thay đổi</span>
              </el-button>
            </div>
          </div>

        </div>
      </el-col>
    </el-row>

</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import { Tools, Right, Location, Apple, ArrowRight, Promotion, EditPen } from '@element-plus/icons-vue'

import { computed } from 'vue'
const handleChange = (href) => {
  const el = document.querySelector(href)

  el?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}
</script>

<style scoped>
:deep(.el-card__header) {
    background: #dddddd6b;
}
.el-card__body {
    padding: 11px;
}
:deep(.el-main) {
  scroll-behavior: smooth;
}
:deep(.custom-input .el-input__wrapper){
  border-radius: 15px;
}
:deep(.custom-input input){
  font-size: 12px;
  height: 33px;
}
:deep(.custom-input textarea){
  font-size: 12px;
  width: 100%;
  border-radius: 15px;
  padding-block: 10px;
}
:deep(.label){
  font-size: 13px;
}
</style>