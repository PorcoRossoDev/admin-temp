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
            <el-table-column label="Mã đơn hàng" width="100" class-name="text-black font-medium">
            <template #default="scope">
                <span class="font-medium text-xs text-black !py-2 block">
                    #{{ scope.row.orderCode }}
                </span>
            </template>
            </el-table-column>
            
            <!-- Hình ảnh -->
            <el-table-column label="" width="100" class-name="text-black font-medium">
                <template #default="scope">
                    <div class="flex justify-center">
                        <div class="border border-gray-200 w-[55px] h-[55px] rounded-md">
                            <el-image :src="scope.row.image" class="" />
                        </div>
                    </div>
                </template>
            </el-table-column>

            <!-- Sản phẩm -->
            <el-table-column label="Sản phẩm" width="200" class-name="text-black font-medium" show-overflow-tooltip>
                <template #default="scope">
                    <span class="font-normal text-blue-600">
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
                    <span class="font-medium text-gray-900">
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
                        <el-icon @click="handleDelete(scope.row)" class="cursor-pointer">
                            <EditPen />
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
  { orderCode: 'DH001', product: 'Áo sơ mi nam', quantity: 2, price: 350000, status: 'Đã giao', date: '2025-11-16', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/1.png' },
  { orderCode: 'DH002', product: 'Quần jeans nữ', quantity: 1, price: 450000, status: 'Chưa giao', date: '2025-11-15', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/2.png' },
  { orderCode: 'DH003', product: 'Giày thể thao', quantity: 3, price: 1200000, status: 'Đang xử lý', date: '2025-11-14', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/3.png' },
  { orderCode: 'DH004', product: 'Áo khoác hoodie', quantity: 1, price: 550000, status: 'Đã giao', date: '2025-11-13', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/4.png' },
  { orderCode: 'DH005', product: 'Váy công sở', quantity: 2, price: 700000, status: 'Đang xử lý', date: '2025-11-12', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/5.png' },
  { orderCode: 'DH006', product: 'Giày sandal nữ', quantity: 1, price: 320000, status: 'Chưa giao', date: '2025-11-11', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/6.png' },
  { orderCode: 'DH007', product: 'Quần short nam', quantity: 3, price: 180000, status: 'Đã giao', date: '2025-11-10', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/7.png' },
  { orderCode: 'DH008', product: 'Áo thun Unisex', quantity: 2, price: 250000, status: 'Đã giao', date: '2025-11-09', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/8.png' },
  { orderCode: 'DH009', product: 'Túi tote canvas', quantity: 1, price: 120000, status: 'Chưa giao', date: '2025-11-08', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/9.png' },
  { orderCode: 'DH010', product: 'Nón bucket', quantity: 1, price: 150000, status: 'Đang xử lý', date: '2025-11-07', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/10.png' },

  { orderCode: 'DH011', product: 'Áo len cardigan', quantity: 1, price: 620000, status: 'Đã giao', date: '2025-11-06', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/11.png' },
  { orderCode: 'DH012', product: 'Giày boots nữ', quantity: 1, price: 980000, status: 'Đang xử lý', date: '2025-11-05', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/12.png' },
  { orderCode: 'DH013', product: 'Quần baggy', quantity: 2, price: 420000, status: 'Đã giao', date: '2025-11-04', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/13.png' },
  { orderCode: 'DH014', product: 'Áo polo nam', quantity: 2, price: 300000, status: 'Đã giao', date: '2025-11-03', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/14.png' },
  { orderCode: 'DH015', product: 'Chân váy chữ A', quantity: 1, price: 280000, status: 'Chưa giao', date: '2025-11-02', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/15.png' },
  { orderCode: 'DH016', product: 'Áo oversize nữ', quantity: 3, price: 270000, status: 'Đang xử lý', date: '2025-11-01', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/16.png' },
  { orderCode: 'DH017', product: 'Giày chạy bộ', quantity: 1, price: 1500000, status: 'Đã giao', date: '2025-10-30', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/17.png' },
  { orderCode: 'DH018', product: 'Áo sweater nỉ', quantity: 2, price: 410000, status: 'Chưa giao', date: '2025-10-29', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/18.png' },
  { orderCode: 'DH019', product: 'Túi đeo chéo', quantity: 1, price: 390000, status: 'Đang xử lý', date: '2025-10-28', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/19.png' },
  { orderCode: 'DH020', product: 'Quần tây nam', quantity: 2, price: 530000, status: 'Đã giao', date: '2025-10-27', image: 'https://prium.github.io/phoenix/v1.24.0/assets/img//products/20.png' },
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