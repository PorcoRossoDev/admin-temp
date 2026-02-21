<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Menu' />

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

                <!-- Thêm mới -->
                <el-button @click="drawer = true" type="primary" :dark="isDark" class="flex gap-x-3">
                    <span class="mr-1">
                        <el-icon :size="16"><CirclePlus /></el-icon>
                    </span>  
                    <span>Thêm mới</span>
                </el-button>
            </div>
            
        </div>

        <el-table :data="menus" stripe class="!w-full">
            <!-- Chọn hàng -->
            <el-table-column type="selection" width="30" />

            <!-- Tiêu đề -->
            <el-table-column label="Tiêu đề" width="" class-name="text-black font-medium text-left">
                <template #default="scope">
                    <span class="font-normal block py-2">
                        {{ scope.row.title }}
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
                    <el-button @click="$router.push({ name: 'admin.menu_edit', params: { id: scope.row.id } })" type="primary" circle size="small">
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

    <el-drawer v-model="drawer" :direction="rtl" size="40%" :with-header="false">
        <h2 class="font-bold !mb-1 text-xl border-b-[0.5px] border-gray-300 pb-4">
            <el-icon class="relative top-1"><Connection /></el-icon>
            Thêm menu mới
        </h2>
        <div>
            <div class="mt-4">
                <h3 class="text-sm">Tiêu đề <span class="text-red-600 mr-1">*</span></h3>
                <el-input size="large" class="w-full mt-2" placeholder="Nhập tiêu đề..." />
            </div>
            <div class="mt-4">
                <h3 class="text-sm">Từ khoá <span class="text-red-600 mr-1">*</span></h3>
                <el-input size="large" class="w-full mt-2" placeholder="Nhập từ khoá..." />
            </div>
            <div class="mt-4">
                <h3 class="text-sm">Xuất bản <span class="text-red-600 mr-1">*</span></h3>
                <el-radio-group v-model="publish">
                    <el-radio value="1" size="large">Xuất bản</el-radio>
                    <el-radio value="0" size="large">Không xuất bản</el-radio>
                </el-radio-group>
            </div>
            <div class="mt-4 text-right">
                <el-button type="primary">Cập nhật</el-button>
                <el-button @click="drawer = false" type="info">Huỷ</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { Search, EditPen, DeleteFilled, CirclePlus, Connection } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'

const menus = ref([
    {
        id: 1,
        title: 'Menu chính',
        status: true,
        author: 'Admin',
        created_at: '2023-01-01',
    },
    {
        id: 2,
        title: 'Menu phụ',
        status: false,
        author: 'User',
        created_at: '2023-01-02',
    },
    {
        id: 3,
        title: 'Menu footer',
        status: true,
        author: 'Admin',
        created_at: '2023-01-03',
    }
])

const value = ref('')
const publish = ref('1')
const drawer = ref(false)

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