<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Danh mục thành viên' />

    <!-- Main -->
    <div class="bg-white shadow-amber-100 p-5 pt-3 rounded-2xl border border-gray-200 mt-6">

        <div class="flex justify-end border-b gap-x-3 border-gray-100 items-center pb-4 mb-4">

            <!-- Tìm kiếm -->
            <div class="input-group">
                <div class="input-container">
                    <el-input
                    class="!text-xs"
                    placeholder="Tìm kiếm..."
                    >
                    <template #prefix>
                        <el-icon><Search /></el-icon>
                    </template>
                    </el-input>
                </div>
            </div>

            <!-- Thêm mới -->
            <el-button @click="$router.push({ name: 'admin.category_user_add' })" type="primary" :dark="isDark" class="flex gap-x-3">
                <span class="mr-1">
                    <el-icon :size="16"><CirclePlus /></el-icon>
                </span>  
                <span>Thêm mới</span>
            </el-button>
        </div>

        <el-table :data="users" stripe class="!w-full">
            <!-- Chọn hàng -->
            <el-table-column type="selection" width="30" />

            <!-- Quyền -->
            <el-table-column label="Tên" width="" class-name="text-black font-medium text-left">
                <template #default="scope">
                    <span class="font-medium py-1 px-2 rounded-md">
                        {{ scope.row.role }}
                    </span>
                </template>
            </el-table-column>

            <!-- Trạng thái -->
            <el-table-column label="Trạng thái" width="120" class-name="text-black font-medium">
                <template #default="scope">
                    <el-tooltip content="Đã xuất bản" placement="top">
                        <el-switch
                            size="small"
                            v-model=scope.row.status
                            active-value="100"
                            inactive-value="0"
                            />
                    </el-tooltip>
                </template>
            </el-table-column>
            
            <!-- Tạo bởi -->
            <el-table-column label="Người tạo" width="120" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-medium text-gray-500 text-xs">
                        {{scope.row.created_by}}
                    </span>
                </template>
            </el-table-column>

            <!-- Thời gian -->
            <el-table-column label="Ngày tạo" width="150" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal text-gray-500 text-xs">
                        {{scope.row.created_at}}
                    </span>
                </template>
            </el-table-column>

            <!-- Action -->
            <el-table-column label="#" width="100" class-name="text-black font-medium">
                <template #default="scope">
                    <el-button type="primary" circle size="small">
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

    <!-- Modal list permission -->
    <el-dialog v-model="outerVisible" title="" width="800">
        <PermissionList />
    </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, CirclePlus } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import PermissionList from '@/views/backend/user/components/PermissionList.vue'

const outerVisible = ref(false)

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

const users = [
    {
        id: 1,
        name: "Admin",
        email: "admin@example.com",
        role: "Administrator",
        avatar: "https://ui-avatars.com/api/?name=Admin",
        status: 1,
        total_posts: 6,
        total_views: 4460,
        created_by: 'Xuân Bình',
        created_at: "2025-11-07"
    },
    {
        id: 2,
        name: "Trung Nguyen",
        email: "trungnguyen@example.com",
        role: "Editor",
        avatar: "https://ui-avatars.com/api/?name=Trung+Nguyen",
        status: 1,
        total_posts: 1,
        total_views: 300,
        created_by: 'Xuân Bình',
        created_at: "2025-11-15"
    },
    {
        id: 3,
        name: "Huy Bui",
        email: "huybui@example.com",
        role: "Author",
        avatar: "https://ui-avatars.com/api/?name=Huy+Bui",
        status: 0,
        total_posts: 1,
        total_views: 650,
        created_by: 'Xuân Bình',
        created_at: "2025-11-13"
    },
    {
        id: 4,
        name: "Minh Duc",
        email: "minhduc@example.com",
        role: "Designer",
        avatar: "https://ui-avatars.com/api/?name=Minh+Duc",
        status: 0,
        total_posts: 1,
        total_views: 540,
        created_by: 'Xuân Bình',
        created_at: "2025-11-11"
    },
    {
        id: 5,
        name: "An Nguyen",
        email: "annguyen@example.com",
        role: "Author",
        avatar: "https://ui-avatars.com/api/?name=An+Nguyen",
        status: 0,
        total_posts: 1,
        total_views: 450,
        created_by: 'Xuân Bình',
        created_at: "2025-11-08"
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