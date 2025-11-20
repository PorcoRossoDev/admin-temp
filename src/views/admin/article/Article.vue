<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Bài viết' />

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

            <!-- Danh mục -->
             <div class="w-60">
                <el-select
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    :reserve-keyword="false"
                    placeholder="Chọn danh mục"
                    style="width: 240px"
                >
                    <el-option
                    v-for="item in categories"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
             </div>

            <!-- Thêm mới -->
            <el-button color="#626aef" :dark="isDark" class="flex gap-x-3">
                <span class="border-[0.5px] rounded-full w-4 h-4 flex items-center justify-center mr-1">
                    <el-icon :size="12"><Plus /></el-icon>
                </span>  
                <span>Thêm mới</span>
            </el-button>
        </div>

        <el-table :data="posts" stripe class="!w-full">
            <!-- Chọn hàng -->
            <el-table-column type="selection" width="30" />

            <!-- Hình ảnh -->
            <el-table-column label="" width="100" class-name="text-black font-medium">
                <template #default="scope">
                    <div class="flex justify-center">
                        <div class="w-[45px] h-[45px] rounded-md">
                            <el-image :src="scope.row.image" class="rounded-md" />
                        </div>
                    </div>
                </template>
            </el-table-column>

            <!-- Tiêu đề -->
            <el-table-column label="Tiêu đề" width="250" class-name="text-black font-medium text-left" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-normal text-blue-600">
                        {{ scope.row.title }}
                    </span>
                </template>
            </el-table-column>
            
            <!-- Danh mục -->
            <el-table-column label="Danh mục" width="200" class-name="text-black font-medium text-left" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-normal text-gray-600">
                        {{ scope.row.category }}, {{ scope.row.category }}, {{ scope.row.category }}
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
                    <span class="font-normal">
                        {{scope.row.author}}
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

const posts = [
    {
        id: 1,
        title: "10 mẹo tối ưu SEO cho website bán hàng",
        slug: "10-meo-toi-uu-seo-cho-website-ban-hang",
        category: "SEO",
        author: "Admin",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 1200,
        created_at: "2025-11-16"
    },
    {
        id: 2,
        title: "Hướng dẫn viết content chuẩn SEO cho người mới",
        slug: "huong-dan-viet-content-chuan-seo",
        category: "Content",
        author: "Trung Nguyen",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 1,
        views: 300,
        created_at: "2025-11-15"
    },
    {
        id: 3,
        title: "Top 5 framework JavaScript được sử dụng nhiều nhất 2025",
        slug: "top-5-framework-js-2025",
        category: "Công nghệ",
        author: "Admin",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 1,
        views: 980,
        created_at: "2025-11-14"
    },
    {
        id: 4,
        title: "Cách chọn hosting phù hợp cho doanh nghiệp nhỏ",
        slug: "cach-chon-hosting-cho-doanh-nghiep",
        category: "Hosting",
        author: "Huy Bui",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 650,
        created_at: "2025-11-13"
    },
    {
        id: 5,
        title: "5 bước đơn giản để tăng tốc độ website",
        slug: "5-buoc-tang-toc-website",
        category: "Website",
        author: "Admin",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 740,
        created_at: "2025-11-12"
    },
    {
        id: 6,
        title: "Thiết kế UI/UX: 7 nguyên tắc quan trọng cần nhớ",
        slug: "thiet-ke-ui-ux-7-nguyen-tac",
        category: "UI/UX",
        author: "Minh Duc",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 540,
        created_at: "2025-11-11"
    },
    {
        id: 7,
        title: "So sánh Laravel và NodeJS trong dự án lớn",
        slug: "so-sanh-laravel-va-nodejs",
        category: "Backend",
        author: "Admin",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 120,
        created_at: "2025-11-10"
    },
    {
        id: 8,
        title: "Hướng dẫn bảo mật website WordPress",
        slug: "huong-dan-bao-mat-wordpress",
        category: "WordPress",
        author: "Admin",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 820,
        created_at: "2025-11-09"
    },
    {
        id: 9,
        title: "Cách chọn theme WordPress chuẩn SEO",
        slug: "cach-chon-theme-wordpress-chuan-seo",
        category: "WordPress",
        author: "An Nguyen",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 450,
        created_at: "2025-11-08"
    },
    {
        id: 10,
        title: "Top plugin WordPress cần có cho website bán hàng",
        slug: "top-plugin-wordpress-ban-hang",
        category: "Plugin",
        author: "Admin",
        image: "https://preview.sprukomarket.com/blazor/server-app/bootstrap/mamix/dist/assets/images/media/media-79.jpg",
        status: 0,
        views: 600,
        created_at: "2025-11-07"
    },
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