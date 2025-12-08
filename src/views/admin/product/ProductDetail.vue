<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Thêm sản phẩm' />

    <!-- Main -->
    <el-row :gutter="20">
        <el-col :span="16">
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">

                <h2 class="font-bold">Thông tin chung</h2>

                <!-- Tiêu đề -->
                <div class="mt-4">
                    <h3 class="text-xs"><span class="text-red-600 mr-1">*</span>Tiêu đề</h3>
                    <el-input v-model="input1" size="large" class="w-full mt-2 !text-xs" placeholder="Nhập tiêu đề" />
                </div>

                <!-- Đường dẫn -->
                <div class="mt-4">
                    <h3 class="text-xs"><span class="text-red-600 mr-1">*</span>Đường dẫn</h3>
                    <el-input v-model="input1" size="large" class="w-full mt-2 !text-xs" placeholder="Nhập đường dẫn">
                        <template #prepend>Http://</template>
                    </el-input>
                </div>

                <!-- Mã sản phẩm -->
                <div class="mt-4">
                    <h3 class="text-xs"><span class="text-red-600 mr-1">*</span>Mã sản phẩm</h3>
                    <el-input v-model="input1" size="large" class="w-full mt-2" placeholder="" />
                </div>
            </div>

            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Nội dung</h2>
                <!-- Mô tả -->
                <div class="mt-4">
                    <h3 class="text-xs">Mô tả</h3>
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

                <!-- Nội dung -->
                <div class="mt-4">
                    <h3 class="text-xs">Nội dung</h3>
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

                <!-- <Variation /> -->
                <!-- <VariationCard /> -->
                <!-- <VariationEdit /> -->
                
            </div>

            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                 <CustomFields />
            </div>

            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <!-- <VariationDynamicMain /> -->
                <Variation/>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Cấu hình</h2>

                <!-- Danh mục chính -->
                <div class="mt-4">
                    <h3 class="text-xs"><span class="text-red-600 mr-1">*</span>Danh mục chính</h3>
                    <div class="mt-1">
                        <el-select class="!w-full !text-xs" multiple filterable allow-create default-first-option
                            :reserve-keyword="false" placeholder="Chọn danh mục">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </div>

                <!-- Danh mục phụ -->
                <div class="mt-4">
                    <h3 class="text-xs"><span class="text-red-600 mr-1">*</span>Danh mục phụ</h3>
                    <div class="mt-1">
                        <el-select class="!w-full" multiple filterable allow-create default-first-option
                            :reserve-keyword="false" placeholder="Chọn danh mục">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </div>
            </div>

            <!-- Thương hiệu -->
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Thương hiệu</h2>
                <div class="mt-4">
                    <el-input-tag v-model="branchs" clearable placeholder="Nhập thương hiệu" class="!text-xs" />
                </div>
            </div>

            <!-- Xuất bản -->
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Xuất bản</h2>
                <div class="mt-4">
                    <h3 class="text-xs"><span class="text-red-600 mr-1">*</span>Thời gian xuất bản</h3>
                    <div class="mt-1">
                        <el-date-picker class="!w-full !text-xs" v-model="value1" type="date"
                            placeholder="Chọn thời gian" size="default" />
                    </div>
                </div>

                <div class="mt-4">
                    <h3 class="text-xs"><span class="text-red-600 mr-1">*</span>Hiển thị</h3>
                    <div class="mt-1">
                        <el-radio v-for="item in optionsPublish" :key="item.id" :label="item.id"
                            style="--el-radio-font-size: 12px">
                            {{ item.name }}
                        </el-radio>
                    </div>
                </div>
            </div>

            <!-- Ảnh đại diện -->
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Ảnh đại diện</h2>
                <div class="mt-4">
                    <el-upload class="upload-demo" drag
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">
                                jpg/png files with a size less than 500kb
                            </div>
                        </template>
                    </el-upload>
                </div>
            </div>

            <!-- Tag -->
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Tags</h2>
                <div class="mt-4">
                    <el-input-tag v-model="tags" clearable placeholder="Nhập tags" class="!text-xs" />
                </div>
            </div>

            <!-- Albums -->
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold">Albums</h2>
                <div class="mt-4">
                    <el-upload v-model:file-list="fileList"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" list-type="picture-card"
                        :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <el-icon>
                            <Plus />
                        </el-icon>
                    </el-upload>

                    <el-dialog v-model="dialogVisible">
                        <img class="w-full" :src="dialogImageUrl" alt="Preview Image" />
                    </el-dialog>
                </div>
            </div>

        </el-col>
    </el-row>

</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, Plus, UploadFilled } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/admin/common/Breadcrumb.vue'
import Editor from "@tinymce/tinymce-vue";
import Variation from './Variation.vue'
import VariationCard from './VariationCard.vue'
import VariationEdit from './VariationEdit.vue'
import VariationDynamic from './VariationDynamic.vue'
import VariationDynamicMain from './VariationDynamicMain.vue'
import CustomFields from '@/components/custom_fields/CustomFields.vue'

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

// Tags
const tags = ref(['tag1', 'tag2', 'tag3'])

// Thương hiệu
const branchs = ref(['tag1', 'tag2', 'tag3'])

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
    width: calc(33.33% - 5px) !important;
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