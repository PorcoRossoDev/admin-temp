<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Cấu hình chung' />

    <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6 h-full">
        <el-row :gutter="20" class="">
            <!-- <el-col :span="8" class="hidden">
                <el-card shadow="hover" class="!rounded-xl overflow-hidden">
                    <template #header class="!bg-gray-300">
                        <div class="flex items-center gap-3">
                            <el-icon size="22">
                            <Setting />
                            </el-icon>
                            <span class="text-md font-bold">
                                Cấu hình website
                            </span>
                        </div>
                    </template>

                    <p class="text-gray-500 text-sm mb-4">
                    Cài đặt thông tin cấu hình cho website.<br />
                    Đảm bảo rằng các thông tin như tên website, logo, mô tả, và các cài đặt liên quan.
                    </p>

                    <el-link type="primary" :underline="false" class="flex items-center !underline">
                    Chi tiết
                    <el-icon class="ml-1">
                        <ArrowRight />
                    </el-icon>
                    </el-link>
                </el-card>
            </el-col> -->
            <el-col :span="8">
                <el-card
                    shadow="hover"
                    class="!rounded-xl border border-gray-200 dark:border-gray-800
                        dark:bg-white/5 transition-all duration-300 mb-4"
                >
                    <div class="flex flex-col">

                    <!-- Icon -->
                    <div
                        class="mb-4 flex h-10 w-10 items-center justify-center
                            rounded-md bg-blue-100 text-primary
                            "
                    >
                        <el-icon :size="22">
                        <Setting />
                        </el-icon>
                    </div>

                    <!-- Title -->
                    <h4 class="mb-1 text-lg font-bold text-gray-800 dark:text-white/90">
                        Cấu hình website
                    </h4>

                    <!-- Description -->
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        Cài đặt thông tin cấu hình cho website
                        Đảm bảo rằng các thông tin như tên website, logo, mô tả...
                    </p>

                    <!-- Link -->
                    <el-link
                        type="primary"
                        :underline="false"
                        class="mt-4 inline-flex items-center !justify-start gap-1"
                    >
                        Chi tiết
                        <el-icon>
                        <ArrowRight />
                        </el-icon>
                    </el-link>

                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import { ArrowRight, Setting, Box } from '@element-plus/icons-vue'
</script>

<style scoped>
:deep(.el-card__header) {
    background: #dddddd6b;
}
</style>