<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Đơn hàng: #95954' />

    <!-- Main -->
    <el-row :gutter="20">
        <el-col :span="14">
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold text-lg">Sản phẩm</h2>

                <div class="mt-4">
                    <div v-for="item in products" :key="item.id">
                        <div class="flex items-center gap-x-3 bg-[#FAFAFA] px-2.5 py-2 rounded mb-3">
                            <img
                                :src="item.image"
                                alt="Product Image"
                                class="w-16 h-16 object-cover rounded"
                            />
                            <div class="flex items-center justify-between w-full">
                                <div>
                                    <p class="text-sm font-bold">{{ item.name }}</p>
                                    <p class="text-xs text-gray-500">
                                    Mã sản phẩm: {{ item.code }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-sm font-bold">{{ item.price.toLocaleString() }}đ</p>
                                    <p class="text-xs text-gray-500">
                                    Số lượng: {{ item.quantity }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold text-lg">Thanh toán</h2>

                <div class="mt-4">
                    <div class="flex justify-between">
                        <p class="text-sm font-bold text-gray-500">Tạm tính:</p>
                        <p class="text-xs text-gray-500">
                            {{ products.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString() }}đ
                        </p>
                    </div>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-bold text-gray-500">Phí vận chuyển:</p>
                        <p class="text-xs text-gray-500">
                            50,000đ
                        </p>
                    </div>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-bold text-gray-500">Thuế:</p>
                        <p class="text-xs text-gray-500">
                            50,000đ
                        </p>
                    </div>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-bold text-gray-500">Tổng:</p>
                        <p class="text-xs text-gray-500">
                            50,000đ
                        </p>
                    </div>
                    <hr class="my-2 border-gray-200">
                    <div class="flex justify-between">
                        <p class="text-sm font-bold">Tổng thanh toán:</p>
                        <p class="text-xs text-gray-500">
                            50,000đ
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold text-lg">Thông tin vận chuyển</h2>

                <div class="mt-4">
                    <el-timeline>
                        <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :hollow="activity.hollow"
                            :timestamp="activity.timestamp"
                        >
                            {{ activity.content }}
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </div>
        </el-col>
        <el-col :span="10">
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <h2 class="font-bold text-lg">Thông tin khách hàng</h2>
                <div class="mt-4">
                    <div class="flex items-center gap-x-3">
                        <el-avatar :icon="UserFilled" />
                        <p class="text-sm font-bold">Nguyễn Văn A</p>
                    </div>
                    <hr class="mt-3 mb-3 border-gray-200">

                    <div class="mt-4">
                        <div class="flex items-center gap-x-3 mt-2">
                            <el-icon :size="16"><Message /></el-icon>
                            <p class="">Email: nguyen.van.a@example.com</p>
                        </div>
                        <div class="flex items-center gap-x-3 mt-2">
                            <el-icon :size="16"><Cellphone /></el-icon>
                            <p class="">Hotline: 1900-123-456</p>
                        </div>
                        <div class="flex items-center gap-x-3 mt-2">
                            <el-icon :size="16"><MapLocation /></el-icon>
                            <p class="">Địa chỉ: 123 Đường ABC, Phường XYZ, Quận 1, TP. HCM</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
                <div class="">
                    <h2 class="font-bold text-lg">Ghi chú</h2>
                    <div class="bg-gray-50 p-3 rounded-xl mt-3">
                        <p class="">Ghi chú: Giao hàng vào buổi sáng</p>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>

</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, Plus, UploadFilled, Message, Cellphone, MapLocation } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import Editor from "@tinymce/tinymce-vue";
import Variation from '@/views/backend/product/components/Variation.vue'
import VariationCard from '@/views/backend/product/components/VariationCard.vue'
import VariationEdit from '@/views/backend/product/components/VariationEdit.vue'
import VariationDynamic from '@/views/backend/product/components/VariationDynamic.vue'
import VariationDynamicMain from '@/views/backend/product/components/VariationDynamicMain.vue'
import CustomFields from '@/components/custom_fields/CustomFields.vue'

const products = ref([
    {
        id: 1,
        name: 'Áo thun nam',
        price: 200000,
        quantity: 5,
        code: 'ATN001',
        image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        id: 2,
        name: 'Quần jean nữ',
        price: 350000,
        quantity: 3,
        code: 'QJN002',
        image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        id: 3,
        name: 'Giày thể thao',
        price: 500000,
        quantity: 2,
        code: 'GTT003',
        image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    }
]) 

const activities = ref([
    {
        content: 'Đơn hàng đã được tạo',
        timestamp: '2024-06-01 10:00',
        type: 'success',
        color: '#67C23A',
        size: 'large',
        hollow: false,
        icon: Sell
    },
    {
        content: 'Đơn hàng đã được xác nhận',
        timestamp: '2024-06-02 14:30',
        type: 'info',
        color: '#409EFF',
        size: 'large',
        hollow: false,
        icon: Sell
    },
    {
        content: 'Đơn hàng đã được giao cho đơn vị vận chuyển',
        timestamp: '2024-06-03 09:15',
        type: 'warning',
        color: '#E6A23C',
        size: 'large',
        hollow: false,
        icon: Sell
    },
    {
        content: 'Đơn hàng đã được giao thành công',
        timestamp: '2024-06-04 16:45',
        type: 'success',
        color: '#67C23A',
        size: 'large',
        hollow: false,
        icon: Sell
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