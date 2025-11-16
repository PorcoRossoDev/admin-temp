<template lang="">
    <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200 mt-6">
        <div class="flex justify-between border-b border-gray-100 items-center pb-4 mb-4">
            <h3 class="uppercase font-bold w-2/3">Đơn hàng</h3>
            <div class="flex gap-x-3 flex-1">
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
                <el-select v-model="value" placeholder="Select" class="flex-1">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    size="small"
                    class="!text-[12px]"
                    />
                </el-select>
            </div>
        </div>

        <el-table :data="tableData" stripe class="!w-full">
            <!-- Chọn hàng -->
            <el-table-column type="selection" width="55" />

            <!-- Mã đơn hàng -->
            <el-table-column label="Mã đơn hàng" width="150" class-name="text-black font-medium">
            <template #default="scope">
                <span class="font-normal text-gray-600 !py-2 block">
                    #{{ scope.row.orderCode }}
                </span>
            </template>
            </el-table-column>

            <!-- Sản phẩm -->
            <el-table-column label="Sản phẩm" width="200" class-name="text-black font-medium" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-normal text-gray-600">
                        {{ scope.row.product }}
                    </span>
                </template>
            </el-table-column>

            <!-- Số lượng -->
            <el-table-column label="Số lượng" width="100" class-name="text-black font-medium">
                <template #default="scope">
                        <span class="font-normal text-gray-600">
                            {{ scope.row.quantity }}
                        </span>
                </template>
            </el-table-column>

            <!-- Giá -->
            <el-table-column label="Giá" width="120" class-name="text-black font-medium">
                <template #default="scope">
                    <span class="font-normal text-gray-600">
                        {{ scope.row.price }}
                    </span>
                </template>
            </el-table-column>

            <!-- Trạng thái -->
            <el-table-column label="Trạng thái" width="120" class-name="text-black font-medium">
                <template #default="scope">
                    <el-tag :type="statusType(scope.row.status)" effect="light">
                        <span class="font-normal">
                            {{ scope.row.status }}
                        </span>
                    </el-tag>
                </template>
            </el-table-column>

            <!-- Thời gian -->
            <el-table-column label="Thời gian" width="150" class-name="text-black font-medium">
                <template #default="scope">
                        <span class="font-normal text-gray-600">
                            {{ formatDate(scope.row.date) }}
                        </span>
                </template>
            </el-table-column>
            
            <!-- Action -->
            <el-table-column label="#" width="100" class-name="text-black font-medium">
                <template #default="scope">
                    <el-button type="primary" circle size="small">
                        <el-icon @click="handleDelete(scope.row)" class="cursor-pointer text-red-500">
                            <EditPen />
                        </el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination size="small" class="mt-5" background layout="prev, pager, next" :total="1000" />
        
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { Search, Document, EditPen } from '@element-plus/icons-vue'

// Lọc
const options = [
  {
    label: '7 ngày qua',
    value: 'Option1',
  },
  {
    label: 'Tháng này',
    value: 'Option2',
  },
  {
    label: 'Tháng trước',
    value: 'Option3',
  },
  {
    label: 'Năm nay',
    value: 'Option4',
  },
]

// Danh sách đơn hàng
const tableData = ref([
  {
    orderCode: 'DH001',
    product: 'Áo sơ mi nam',
    quantity: 2,
    price: 350000,
    status: 'Đã giao',
    date: '2025-11-16',
  },
  {
    orderCode: 'DH002',
    product: 'Quần jeans nữ',
    quantity: 1,
    price: 450000,
    status: 'Chưa giao',
    date: '2025-11-15',
  },
  {
    orderCode: 'DH003',
    product: 'Giày thể thao',
    quantity: 3,
    price: 1200000,
    status: 'Đang xử lý',
    date: '2025-11-14',
  },
])

const formatMoney = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}

const statusType = (status) => {
  switch (status) {
    case 'Đã giao': return 'success'
    case 'Chưa giao': return 'info'
    case 'Đang xử lý': return 'warning'
    default: return 'default'
  }
}
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