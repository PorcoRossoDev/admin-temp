<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Thêm danh mục thành viên' />

    <!-- Main -->
    <div class="bg-white shadow-amber-100 p-5 border rounded-2xl border-gray-200 mt-6">

        <h1 class="font-bold capitalize pb-4 border-b border-gray-200">Thông tin chung</h1>

        <!-- Tiêu đề -->
        <div class="mt-4">
            <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Tiêu đề</h3>
            <el-input v-model="input1" size="large" class="w-full mt-2 !text-xs" placeholder="" />
        </div>

        <div class="mt-4 hidden">
            <h3 class="text-sm">Nội dung</h3>
            <div class="mt-2">
                <Editor api-key="lfjyp1zowgxr0wayowsfvj10hjllwhpai8cyyzdip55ylql9" v-model="content" :init="{
                    height: 300,
                    menubar: false,
                    plugins: 'lists link image code table',
                    toolbar:
                        'undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image | code',
                }" />
            </div>
        </div>

        <div class="mt-4">
            <PermissionList />
        </div>

        <div class="mt-4 text-right">
            <el-button type="primary">Cập nhật</el-button>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, Plus, UploadFilled } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import Editor from "@tinymce/tinymce-vue";
import PermissionList from '@/views/backend/user/components/PermissionList.vue'

// Danh mục
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

// Thông tin xuất bản
const publish = ref(0)
const optionsPublish = [
    {
        id: 0,
        name: 'Xuất bản',
    },
    {
        id: 1,
        name: 'Không xuất bản',
    },
]

// Ảnh đại diện
const image = ref(null)
const handleChange = (file) => {
    image.value = URL.createObjectURL(file.raw)
}

// Albums
const fileList = ref([
    { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
    { name: 'plant-1.png', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
    { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
    { name: 'plant-2.png', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
    { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
    { name: 'figure-1.png', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
    { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
    { name: 'figure-2.png', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}

</script>

<style scoped>
/* Kéo full width header wrapper */
:deep(.el-table__header, .el-table__body) {
    width: 100% !important;
    overflow-x: auto;
    /* giữ scroll nếu table rộng hơn container */
}

:deep(.el-table__body) {
    width: 100% !important;
    overflow-x: auto;
    /* giữ scroll nếu table rộng hơn container */
}

:deep(.el-select__selected-item span) {
    font-size: 12px
}

/* albums */
:deep(.el-upload-list--picture-card > *) {
    width: calc(20% - 5px) !important;
    height: auto!important;
    margin-bottom:  5px !important;
}
:deep(.el-upload-list--picture-card .el-upload-list__item-thumbnail) {
    object-fit: cover!important;
}
:deep(.el-upload-list--picture-card > *:not(:nth-child(3n))) {
    margin-right: 5px !important;
}
:deep(.el-upload-list--picture-card > *:nth-child(3n)) {
    margin-inline: 0 !important;
}
</style>