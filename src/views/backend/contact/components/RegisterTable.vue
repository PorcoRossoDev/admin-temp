<template>
    <div>
        <el-table :data="contactList" stripe class="!w-full">
            <!-- Chọn hàng -->
            <el-table-column type="selection" width="30" />
            
            <!-- Tiêu đề -->
            <el-table-column label="Tiêu đề" width="" class-name="text-black font-medium text-left" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-normal block py-2">
                        {{ scope.row.name }}
                        <br>
                        {{ scope.row.email }}
                    </span>
                </template>
            </el-table-column>

            <!-- Nội dung -->
            <el-table-column label="Nội dung" width="300" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal">
                        <el-text line-clamp="2">{{scope.row.message}}</el-text>
                    </span>
                </template>
            </el-table-column>
            
            <!-- Số điện thoại -->
            <el-table-column label="Số điện thoại" width="200" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal">
                        {{scope.row.hotline}}
                    </span>
                </template>
            </el-table-column>
            
            <!-- Trạng thái -->
            <el-table-column label="Trạng thái" width="120" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal"
                    :class="
                        scope.row.status === 'read' ? 'text-green-500 bg-green-50 px-2 py-1 rounded-md' :
                        scope.row.status === 'unread' ? 'text-red-500 bg-red-50 px-2 py-1 rounded-md' :
                        'text-gray-500'">
                        {{scope.row.status}}
                    </span>
                </template>
            </el-table-column>

            <!-- Thời gian -->
            <el-table-column label="Ngày tạo" width="150" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal text-gray-600">
                        {{scope.row.created_at}}
                    </span>
                </template>
            </el-table-column>

            <!-- Action -->
            <el-table-column label="#" width="100" class-name="text-black font-medium">
                <template #default="scope">
                    <el-button @click="drawer = true" type="primary" circle size="small">
                        <el-icon class="cursor-pointer">
                            <EditPen />
                        </el-icon>
                    </el-button>
                    <el-button type="danger" circle size="small">
                        <el-icon class="cursor-pointer">
                            <DeleteFilled />
                        </el-icon>
                    </el-button>
                </template>
            </el-table-column>
            
        </el-table>

        <div class="flex justify-end">
            <el-pagination size="small" class="mt-5 " background layout="prev, pager, next" :total="1000" />
        </div>
    </div>
    <el-drawer v-model="drawer" :direction="rtl" size="45%" :with-header="false">
        <RegisterForm />
    </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, CirclePlus } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import RegisterForm from '@/views/backend/contact/components/RegisterForm.vue'
const drawer = ref(false)

const contactList = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        title: 'Yêu cầu hỗ trợ sản phẩm',
        message: 'Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này.',
        hotline: '1900-123-456',
        status: 'read',
        author: 'Admin',
        created_at: '2024-06-01 10:30:00',
    }
]
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