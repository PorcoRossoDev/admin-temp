<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Cấu hình chung' />

    <el-row :gutter="20" class="mt-6">
        <el-col :span="8">
            <el-card
                shadow="never"
                class="!rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200"
            >
                <!-- Header -->
                <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div
                    class="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center"
                    >
                    <el-icon size="26" class="text-indigo-600">
                        <Document />
                    </el-icon>
                    </div>

                    <h3 class="text-lg font-semibold text-gray-800">
                    Cấu hình chung
                    </h3>
                </div>

                <el-dropdown trigger="click">
                    <el-icon class="cursor-pointer text-gray-400 hover:text-gray-600">
                    <MoreFilled />
                    </el-icon>

                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Edit</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
                </div>

                <!-- Divider -->
                <div class="my-6 border-t border-gray-200"></div>

                <!-- Last invoice -->
                <div class="flex justify-between items-center mb-4">
                <span class="text-gray-400">Cấu hình thông tin cho website</span>
                </div>

                <!-- Amount -->
                <div class="flex justify-between items-center">
                <span class="text-gray-400">Xem thêm</span>

                
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import { ArrowRight, Setting, Box, User,
  Lock,
  Bell, Document, MoreFilled } from '@element-plus/icons-vue'

const pages = [
  {
    title: 'Profile',
    description: 'Update your personal information',
    path: '/settings/profile',
    icon: User
  },
  {
    title: 'Security',
    description: 'Change password & 2FA',
    path: '/settings/security',
    icon: Lock
  },
  {
    title: 'Notification',
    description: 'Manage your notifications',
    path: '/settings/notification',
    icon: Bell
  },
  {
    title: 'System',
    description: 'System configuration',
    path: '/settings/system',
    icon: Setting
  }
]
</script>

<style scoped>
:deep(.el-card__header) {
    background: #dddddd6b;
}
.el-card__body {
    padding: 11px;
}
</style>