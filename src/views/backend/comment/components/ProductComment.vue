<template>
    <div class="">
        <el-table :data="contactList" stripe class="!w-full">
            <!-- Chọn hàng -->
            <el-table-column type="selection" width="30" />

            <!-- Họ và tên -->
            <el-table-column label="Họ và tên" width="" class-name="text-black font-medium text-left" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-normal block py-2">
                        {{ scope.row.name }}
                        <br>
                        {{ scope.row.email }}
                    </span>
                </template>
            </el-table-column>
            
            <!-- Bài viết -->
            <el-table-column label="Bài viết" width="" class-name="text-black font-medium text-left" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-normal block py-2 text-indigo-600 underline">
                        {{ scope.row.title }}
                        <el-icon class="relative top-0.5 text-indigo-600"><Link /></el-icon>
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
            
            <!-- Trạng thái -->
            <el-table-column label="Trạng thái" width="120" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal text-xs inline-block"
                    :class="
                        scope.row.status === 'read' ? 'text-green-500 bg-green-50 border-[0.5px] border-green-500 px-2 py-0.5 rounded-md' :
                        scope.row.status === 'unread' ? 'text-red-500 bg-red-50 border-[0.5px] border-red-500 px-2 py-0.5 rounded-md' :
                        'text-gray-500'">
                        {{scope.row.status=='read' ? 'Đã đọc' : scope.row.status === 'unread' ? 'Chưa đọc' : scope.row.status}}
                    </span>
                </template>
            </el-table-column>

            <!-- Thời gian -->
            <el-table-column label="Ngày tạo" width="150" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal text-xs text-gray-600">
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
        <ProductForm />
    </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, CirclePlus, Link } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import ProductForm from '@/views/backend/comment/components/ProductForm.vue'
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
    },
    {
        id: 2,
        name: 'Trần Thị B',
        email: 'tranthib@example.com',
        title: 'Yêu cầu hỗ trợ kỹ thuật',
        message: 'Xin chào, tôi gặp vấn đề với sản phẩm ABC và cần hỗ trợ kỹ thuật.',
        hotline: '1900-123-456',
        status: 'unread',
        author: 'Admin',
        created_at: '2024-06-02 11:00:00',
    },
    {
        id: 3,
        name: 'Lê Văn C',
        email: 'levanc@example.com',
        title: 'Yêu cầu hỗ trợ sản phẩm',
        message: 'Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này.',
        hotline: '1900-123-456',
        status: 'read',
        author: 'Admin',
        created_at: '2024-06-01 10:30:00',
    },
    {
        id: 4,
        name: 'Phạm Thị D',
        email: 'phamthid@example.com',
        title: 'Yêu cầu hỗ trợ kỹ thuật',
        message: 'Xin chào, tôi gặp vấn đề với sản phẩm DEF và cần hỗ trợ kỹ thuật.',
        hotline: '1900-123-456',
        status: 'unread',
        author: 'Admin',
        created_at: '2024-06-02 11:00:00',
    },
    {
        id: 5,
        name: 'Nguyễn Văn E',
        email: 'nguyenvane@example.com',
        title: 'Yêu cầu hỗ trợ sản phẩm',
        message: 'Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này.',
        hotline: '1900-123-456',
        status: 'read',
        author: 'Admin',
        created_at: '2024-06-01 10:30:00',
    },
    {
        id: 6,
        name: 'Trần Thị F',
        email: 'tranthif@example.com',
        title: 'Yêu cầu hỗ trợ sản phẩm',
        message: 'Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này.',
        hotline: '1900-123-456',
        status: 'read',
        author: 'Admin',
        created_at: '2024-06-01 10:30:00',
    },
    {
        id: 7,
        name: 'Lê Văn G',
        email: 'levang@example.com',
        title: 'Yêu cầu hỗ trợ sản phẩm',
        message: 'Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này.',
        hotline: '1900-123-456',
        status: 'read',
        author: 'Admin',
        created_at: '2024-06-01 10:30:00',
    },
    {
        id: 8,
        name: 'Phạm Thị H',
        email: 'phamthih@example.com',
        title: 'Yêu cầu hỗ trợ sản phẩm',
        message: 'Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này.',
        hotline: '1900-123-456',
        status: 'read',
        author: 'Admin',
        created_at: '2024-06-01 10:30:00',
    },
    {
        id: 9,
        name: 'Nguyễn Văn I',
        email: 'nguyenvani@example.com',
        title: 'Yêu cầu hỗ trợ sản phẩm',
        message: 'Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này.',
        hotline: '1900-123-456',
        status: 'read',
        author: 'Admin',
        created_at: '2024-06-01 10:30:00',
    }
]

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