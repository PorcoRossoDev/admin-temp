<template>



  <el-row :gutter="20">
    <el-col :span="4">
      <!-- Anchor menu -->
      <el-anchor :offset="70" container=".el-main" v-model="activeLink" default-active="#section1"
        class="!sticky top-20" @change="scrollToSection">
        <el-anchor-link href="#section1" title="Cấu hình chung" />
        <el-anchor-link href="#section2" title="Thông tin liên hệ" />
        <el-anchor-link href="#section3" title="Mạng xã hội" />
        <el-anchor-link href="#section4" title="Cấu hình website" />
        <el-anchor-link href="#section5" title="Thông tin Script" />
        <el-anchor-link href="#section6" title="Thông tin gửi email" />
        <el-anchor-link href="#section7" title="Thông tin thanh toán" />
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
              <el-switch v-model="value2" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Check"
                :inactive-icon="Close" />
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
              <el-mention v-model="value" type="textarea" placeholder="Please input" class="custom-input w-full" />
            </div>
          </div>
          <div class="flex items-center mt-4">
            <label for="input2" class="w-1/3 font-medium label text-gray-500">Script Footer</label>
            <div class="w-2/3">
              <el-mention v-model="value" type="textarea" placeholder="Please input" class="custom-input w-full" />
            </div>
          </div>
          <div class="mt-4">
            <el-button class="!bg-transparent !rounded-xl border border-gray-300" type="primary" size="small">
              <span class="text-[#409eff]">Lưu thay đổi</span>
            </el-button>
          </div>
        </div>

        <div id="section6" class="bg-white rounded-xl mb-10 p-6">
          <h2 class="text-xl font-bold mb-4">Thông tin gửi email</h2>
          <div class="flex items-center mt-4">
            <label for="input2" class="w-1/3 font-medium label text-gray-500">SMTP username</label>
            <div class="w-2/3">
              <el-input id="input2" placeholder="SMTP username" class="custom-input" />
            </div>
          </div>
          <div class="flex items-center mt-4">
            <label for="input2" class="w-1/3 font-medium label text-gray-500">SMTP password</label>
            <div class="w-2/3">
              <el-input id="input2" placeholder="SMTP password" class="custom-input" />
            </div>
          </div>
          <div class="flex items-center mt-4">
            <label for="input2" class="w-1/3 font-medium label text-gray-500">Gửi từ địa chỉ</label>
            <div class="w-2/3">
              <el-input id="input2" placeholder="Địa chỉ email bạn muốn dùng để gửi" class="custom-input" />
            </div>
          </div>
          <div class="flex items-center mt-4">
            <label for="input2" class="w-1/3 font-medium label text-gray-500">Tên người gửi</label>
            <div class="w-2/3">
              <el-input id="input2" placeholder="Tên người gửi hiển thị trong email" class="custom-input" />
            </div>
          </div>
          <div class="mt-4">
            <el-button class="!bg-transparent !rounded-xl border border-gray-300" type="primary" size="small">
              <span class="text-[#409eff]">Lưu thay đổi</span>
            </el-button>
          </div>
        </div>

        <div id="section6" class="bg-white rounded-xl mb-10 p-6">
          <h2 class="text-xl font-bold mb-4">Thông tin thanh toán</h2>
          <el-tabs>
            <el-tab-pane>
              <template #label>
                <span class="custom-tabs-label">
                  <el-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" color="currentColor" viewBox="0 0 24 24" class="svg-icon undefined text-3xl" data-component-name="Icon-Huge" data-name="Huge--CreditCard"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.537 0-5.306 1.053-6.487q.253-.284.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C22 6.693 22 8.463 22 12s0 5.306-1.053 6.487a4.4 4.4 0 0 1-.555.522C19.138 20 17.26 20 13.5 20h-3c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 17.307 2 15.537 2 12"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 16h1.5M14.5 16H18"></path><path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M2 9h20"></path></svg>
                  </el-icon>
                  <span>Credit card</span>
                </span>
              </template>
              <el-row :gutter="20">
                <el-col :span="16">
                  <el-input id="input2" placeholder="" class="custom-input" />
                </el-col>
                <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane>
              <template #label>
                <span class="custom-tabs-label">
                  <el-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" color="currentColor" viewBox="0 0 24 24" class="svg-icon undefined text-3xl" data-component-name="Icon-Huge" data-name="Huge--Paypal"><path stroke="currentColor" stroke-width="1.5" d="M6.294 4.835 4.165 17.671c-.18 1.081-.269 1.622.03 1.975.297.354.842.354 1.933.354h.402c.823 0 1.234 0 1.515-.244.28-.245.339-.654.455-1.473l.468-3.29c.037-.26.055-.39.084-.501a1.99 1.99 0 0 1 1.697-1.479c.113-.013.244-.013.505-.013h1.162a6.636 6.636 0 0 0 6.464-5.186C19.554 4.836 17.302 2 14.263 2h-4.64c-1.114 0-1.67 0-2.11.235-.25.134-.47.32-.642.547-.303.397-.394.949-.577 2.053Z"></path><path stroke="currentColor" stroke-width="1.5" d="m8.243 19.5-.228 1.332c-.105.61.37 1.168.996 1.168h1.99c.495 0 .917-.354.998-.836l.73-4.329c.08-.482.503-.835.997-.835h1.803c2.581 0 4.816-1.773 5.376-4.265C21.297 9.99 20.444 8.31 19 7.5"></path></svg>
                  </el-icon>
                  <span>Paypal</span>
                </span>
              </template>
              Route
            </el-tab-pane>
          </el-tabs>
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

import { computed, onMounted } from 'vue'
// Sử dụng ref để kiểm soát trạng thái active
const activeLink = ref('#section1')

const handleChange = (href) => {
  activeLink.value = href
  // Logic scroll mượt mà của bạn
  const el = document.querySelector(href)
  if (el) {
    const offset = 80; // Khoảng cách bù trừ cho header
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

onMounted(() => {
  // Đảm bảo cập nhật lại hash khi load trang
  if (window.location.hash) {
    activeLink.value = window.location.hash
  }
})
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

:deep(.custom-input .el-input__wrapper) {
  border-radius: 15px;
}

:deep(.custom-input input) {
  font-size: 12px;
  height: 33px;
}

:deep(.custom-input textarea) {
  font-size: 12px;
  width: 100%;
  border-radius: 15px;
  padding-block: 10px;
}

:deep(.label) {
  font-size: 13px;
}
:deep(.el-anchor__item a) {
    font-size: 13px;
}

:deep(.el-anchor__list) {
    padding-block: 8px;
}
</style>