<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Liên hệ' />

    <div class="bg-white shadow-amber-100 p-5 pt-3 rounded-2xl border border-gray-200 mt-6">

        <div class="flex justify-between border-b gap-x-3 border-gray-100 items-center mt-3 pb-4 mb-4">

            <div class="w-30">
                <el-select
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    :reserve-keyword="false"
                    placeholder="Hoạt động"
                >
                    <el-option
                    v-for="item in categories"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>

            <div class="flex gap-x-3 items-center">
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
                <div class="w-60">
                    <el-select
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        :reserve-keyword="false"
                        placeholder="Trạng thái"
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
            </div>
            
        </div>

        <el-tabs>
            <el-tab-pane label="Bình luận bài viết">
                <ArticlesComment />
            </el-tab-pane>
            <el-tab-pane label="Đánh giá sản phẩm">
                <ProductComment />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Document, EditPen, Sell, DeleteFilled, CirclePlus } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import ArticlesComment from '@/views/backend/comment/components/ArticleComment.vue'
import ProductComment from '@/views/backend/comment/components/ProductComment.vue'
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