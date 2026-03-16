<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Danh sách đơn hàng' />

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
            <el-button @click="drawer = true" type="primary" :dark="isDark" class="flex gap-x-3">
                <span class="mr-1">
                    <el-icon :size="16"><CirclePlus /></el-icon>
                </span>  
                <span>Thêm mới</span>
            </el-button>
        </div>

        <el-table :data="OrderList" stripe class="!w-full">
            <!-- Chọn hàng -->
            <el-table-column type="selection" width="30" />

            <!-- Đơn hàng -->
            <el-table-column label="Đơn hàng" width="" class-name="text-black font-medium text-left" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-medium block py-2">
                        #{{ scope.row.order_id }}
                    </span>
                </template>
            </el-table-column>

            <!-- Khách hàng -->
            <el-table-column label="Khách hàng" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal">
                        {{ scope.row.customer_name }}
                    </span>
                </template>
            </el-table-column>

            <!-- Trạng thái -->
            <el-table-column label="Trạng thái" class-name="text-black font-medium">
                <template #default="scope">
                    <span :class="{
                        'text-yellow-500 bg-yellow-50': scope.row.status === 'pending',
                        'text-green-500 bg-emerald-50': scope.row.status === 'completed',
                        'text-red-500 bg-rose-50': scope.row.status === 'canceled',
                    }" class="font-normal text-xs px-2 py-1 rounded-md">
                        {{ scope.row.status }}
                    </span>
                </template>
            </el-table-column>

             <!-- Số lượng -->
             <el-table-column label="Số lượng" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal text-gray-600">
                        {{ scope.row.quantity }}
                    </span>
                </template>
            </el-table-column>

            <!-- Tổng tiền -->
            <el-table-column label="Tổng tiền" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal text-gray-600">
                        {{ scope.row.total_price }}
                    </span>
                </template> 
            </el-table-column>

            <!-- Thời gian -->
            <el-table-column label="Ngày tạo" class-name="text-black font-medium">
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

    <el-drawer v-model="drawer" :direction="rtl" size="40%" :with-header="false">
        <h2 class="font-bold mt-6 mb-4 text-xl">Thêm danh mục</h2>
        <div>
            <div class="mt-4">
                <h3 class="text-sm">Tiêu đề <span class="text-red-600 mr-1">*</span></h3>
                <el-input size="large" class="w-full mt-2" placeholder="" />
            </div>
            <el-row class="*:mt-4" :gutter="24">
                <el-col :span="12">
                    <h3 class="text-sm">Danh mục <span class="text-red-600 mr-1">*</span></h3>
                    <el-select v-model="value" size="large" placeholder="Select" class="w-full mt-2">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </el-col>
                <el-col :span="12">
                    <h3 class="text-sm">Kiểu hiển thị <span class="text-red-600 mr-1">*</span></h3>
                    <el-select v-model="value" size="large" placeholder="Select" class="w-full mt-2">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </el-col>
            </el-row>
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
import { Search, Document, EditPen, Sell, DeleteFilled, CirclePlus } from '@element-plus/icons-vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
const drawer = ref(false)

const OrderList = [
    {
        id: 1,
        order_id: 'DH001',
        title: 'Đơn hàng #1',
        customer_name: 'Nguyễn Văn A',
        status: 'pendding',
        quantity: 2,
        total_price: 500.000,
        payment: 'Chuyển khoản',
        created_at: '2024-06-01',
        updated_at: '2024-06-02',
    },
    {
        id: 2,
        order_id: 'DH002',
        title: 'Đơn hàng #2',
        customer_name: 'Trần Thị B',
        status: 'completed',
        quantity: 1,
        total_price: 300.000,
        payment: 'Tiền mặt',
        created_at: '2024-06-03',
        updated_at: '2024-06-04',
    },
    {
        id: 3,
        order_id: 'DH003',
        title: 'Đơn hàng #3',
        customer_name: 'Lê Văn C',
        status: 'canceled',
        quantity: 3,
        total_price: 900.000,
        payment: 'Chuyển khoản',
        created_at: '2024-06-05',
        updated_at: '2024-06-06',
    },
    {
        id: 4,
        order_id: 'DH004',
        title: 'Đơn hàng #4',
        customer_name: 'Nguyễn Văn D',
        status: 'completed',
        quantity: 1,
        total_price: 200.000,
        payment: 'Tiền mặt',
        created_at: '2024-06-07',
        updated_at: '2024-06-08',
    },
    {
        id: 5,
        order_id: 'DH005',
        title: 'Đơn hàng #5',
        customer_name: 'Trần Văn E',
        status: 'pending',
        quantity: 2,
        total_price: 500.000,
        payment: 'Chuyển khoản',
        created_at: '2024-06-09',
        updated_at: '2024-06-10',
    }

]

// Danh mục cho select
const value = ref('')
const publish = ref('1')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
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