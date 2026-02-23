<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Danh sách menu' />

    <el-row :gutter="20">
        <el-col :span="8">
            <!-- Danh sách -->
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Thêm các mục menu</h2>
                <el-collapse class="mt-4">
                    <el-collapse-item name="1">
                        <template #title="{ isActive }">
                            <h3 class="font-semibold text-md text-[14px]" :class="['title-wrapper', { 'is-active': isActive }]">
                                Bài viết
                                <el-icon class="header-icon"><info-filled /></el-icon>
                            </h3>
                        </template>
                        <div class="group flex flex-col">
                            <el-checkbox>10 mẹo tối ưu SEO cho website bán hàng</el-checkbox>
                            <el-checkbox>Hướng dẫn viết content chuẩn SEO cho người mới</el-checkbox>
                            <el-checkbox>Top 5 framework JavaScript được sử dụng nhiều nhất 2025</el-checkbox>
                            <el-checkbox>Cách chọn hosting phù hợp cho doanh nghiệp nhỏ</el-checkbox>
                            <el-checkbox>5 bước đơn giản để tăng tốc độ website</el-checkbox>
                            <el-checkbox>Thiết kế UI/UX: 7 nguyên tắc quan trọng cần nhớ</el-checkbox>
                        </div>
                        <div class="flex justify-end">
                            <el-button type="primary" size="small" class="mt-2">Thêm vào menu</el-button>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template #title="{ isActive }">
                            <h3 class="font-semibold text-md text-[14px]" :class="['title-wrapper', { 'is-active': isActive }]">
                                Danh mục bài viết
                                <el-icon class="header-icon"><info-filled /></el-icon>
                            </h3>
                        </template>
                        <div class="group flex flex-col">
                            <div class="">
                                <el-checkbox>10 mẹo tối ưu SEO cho website bán hàng</el-checkbox>
                                <div class="group-child flex flex-col pl-3">
                                    <el-checkbox>Top plugin WordPress cần có cho website bán hàng</el-checkbox>
                                    <el-checkbox>Marketing</el-checkbox>
                                    <el-checkbox>Công nghệ</el-checkbox>
                                </div>
                            </div>
                            <el-checkbox>Hướng dẫn viết content chuẩn SEO cho người mới</el-checkbox>
                            <el-checkbox>Top 5 framework JavaScript được sử dụng nhiều nhất 2025</el-checkbox>
                            <el-checkbox>Cách chọn hosting phù hợp cho doanh nghiệp nhỏ</el-checkbox>
                            <el-checkbox>5 bước đơn giản để tăng tốc độ website</el-checkbox>
                            <el-checkbox>Thiết kế UI/UX: 7 nguyên tắc quan trọng cần nhớ</el-checkbox>
                        </div>
                        <div class="flex justify-end">
                            <el-button type="primary" size="small" class="mt-2">Thêm vào menu</el-button>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">

                <h1 class="font-bold capitalize pb-4 border-b border-gray-200">Cấu trúc menu</h1>

                <div class="mt-5">
                    <MenuItem v-model="menus" :level="0" />
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import { Search, EditPen, DeleteFilled, CirclePlus, Connection } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import MenuItem from '../components/MenuItem.vue'
import draggable from 'vuedraggable'
const value = ref('')
const publish = ref('1')
const drawer = ref(false)

const menus = ref([
  {
    id: 1,
    title: 'Trang chủ',
    children: [
      {
        id: 2,
        title: 'Giới thiệu',
        children: [
          {
            id: 3,
            title: 'Tầm nhìn',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Blog',
    children: []
  }
])
</script>

<style scoped>
:deep(.el-collapse-item__header){
    min-height: 40px!important;
    line-height: 40px!important;
}

.menu-row {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  background: #fff;
  transition: 0.2s;
}

.menu-row:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.title {
  flex: 1;
  font-weight: 500;
}
</style>