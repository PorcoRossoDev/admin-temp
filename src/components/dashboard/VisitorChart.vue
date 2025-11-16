<template>
  <div>
    <div class="flex justify-between items-center">
      <h3 class="w-2/3 font-bold uppercase">Thống kê truy cập</h3>
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
    <ApexChart type="bar" :options="chartOptions" :series="series" height="350" />
  </div>

</template>

<script setup>
import ApexChart from 'vue3-apexcharts'
import { ref } from 'vue'
import { Sell } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

// Start: Biểu đồ
const series = ref([
  { name: 'Doanh thu', data: [44, 55, 41, 67, 22, 43, 50] }
])
const chartOptions = ref({
  chart: {
    id: 'bar', 
    toolbar: {
      show: false
    }
  },
  xaxis: { categories: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'] },
  // title: { text: 'TỔNG DOANH THU TRONG TUẦN', align: 'left' },
  colors: ['#1e85ff', '#3b82f6'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      borderRadiusApplication: 'end',
      horizontal: true,
      columnWidth: '10px'
    }
  },
  dataLabels: { enabled: false },
  yaxis: { title: { text: 'Triệu VNĐ' } },
  legend: { position: 'bottom' },
  grid: { borderColor: '#eee' },
  tooltip: { theme: 'light' },
})
// End: Biểu đồ

// Lọc theo thời gian
const value = ref('Option1')
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

const handleClear = () => {
  ElMessage.info(`The clear value is: ${value.value}`)
}
</script>

<style scoped>
:deep(.el-select__selected-item span) {
    font-size: 12px;
}
:deep(.el-select-dropdown__item span) {
    font-size: 12px!important;
}
</style>