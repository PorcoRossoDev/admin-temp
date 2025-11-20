<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Thêm sản phẩm' />

    <!-- Main -->
     <el-row :gutter="20">
        <el-col :span="16">
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">

                <!-- Tiêu đề -->
                <div>
                    <h3><span class="text-red-600 mr-1">*</span>Tiêu đề</h3>
                    <el-input
                        v-model="input1"
                        size="large"
                        class="w-full mt-2"
                        placeholder="Nhập tiêu đề"
                    />
                </div>
                
                <!-- Đường dẫn -->
                <div class="mt-4">
                    <h3><span class="text-red-600 mr-1">*</span>Đường dẫn</h3>
                    <el-input
                        v-model="input1"
                        size="large"
                        class="w-full mt-2"
                        placeholder="Nhập đường dẫn"
                        >
                        <template #prepend>Http://</template>
                    </el-input>
                </div>

                <!-- Tiêu đề -->
                <div class="mt-4">
                    <h3><span class="text-red-600 mr-1">*</span>Mã sản phẩm</h3>
                    <el-input
                        v-model="input1"
                        size="large"
                        class="w-full mt-2"
                        placeholder=""
                    />
                </div>

            </div>
        </el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
    
</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, Plus } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/admin/common/Breadcrumb.vue'

const categories = ref([
  {
    id: 1,
    label: "Tin tức doanh nghiệp",
    slug: "tin-tuc-doanh-nghiep",
    description: "Cập nhật hoạt động và thông tin nội bộ doanh nghiệp."
  },
  {
    id: 2,
    label: "Công nghệ & chuyển đổi số",
    slug: "cong-nghe-chuyen-doi-so",
    description: "Tin tức công nghệ, xu hướng mới và chuyển đổi số."
  },
  {
    id: 3,
    label: "Sự kiện & hội thảo",
    slug: "su-kien-hoi-thao",
    description: "Thông tin các sự kiện, hội thảo quan trọng."
  },
  {
    id: 4,
    label: "Tuyển dụng",
    slug: "tuyen-dung",
    description: "Cơ hội việc làm và thông tin nhân sự."
  },
  {
    id: 5,
    label: "Khuyến mãi",
    slug: "khuyen-mai",
    description: "Các chương trình ưu đãi và giảm giá."
  },
  {
    id: 6,
    label: "Thông cáo báo chí",
    slug: "thong-cao-bao-chi",
    description: "Thông cáo chính thức từ doanh nghiệp."
  }
])

</script>

<style scoped>
/* Kéo full width header wrapper */
:deep(.el-table__header, .el-table__body) {
  width: 100% !important;
  overflow-x: auto; /* giữ scroll nếu table rộng hơn container */
}
:deep(.el-table__body) {
  width: 100% !important;
  overflow-x: auto; /* giữ scroll nếu table rộng hơn container */
}
</style>