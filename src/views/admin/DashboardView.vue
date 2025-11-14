<template>

  <!-- Header -->
  <div class="flex items-center justify-between">
    <h1 class="text-[20px] font-bold">Dashboard</h1>

    <!-- Breadcrumb -->
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>

  <!-- Main -->
  <div>

    <!-- Thông số -->
     <el-row :gutter="20" class="mt-5">
      <el-col v-for="item in info" :span="6">
        <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200">
          <div class="flex gap-x-5">
            <span class="flex bg-[#e9ecef] w-12 h-12 justify-center items-center rounded-full"><el-icon><Sell /></el-icon></span>
            <div>
              <h3 class="font-semibold text-lg">45/76</h3>
              <p class="text-xs">Invoices Awaiting</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex justify-between items-center text-xs">
              <span class="text-gray-500">Invoices Awaiting </span>
              <san>$5,569 <span>(56%)</span></san>
            </div>
            <el-progress :percentage="50" :show-text="false" :stroke-width="3" :color="item.color" class="mt-2" />
          </div>
        </div>
      </el-col>
    </el-row>
     

    <!-- Biểu đồ -->
    <el-row :gutter="12">
      <el-col :span="16">
        <el-card class="rounded-2xl mt-5 !shadow-amber-100" style="width:100%">
          <ApexChart type="bar" :options="chartOptions" :series="series" height="350" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="rounded-2xl mt-5" style="width:100%">
          <ApexChart type="bar" :options="chartOptions" :series="series" height="350" />
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
import ApexChart from 'vue3-apexcharts'
import { ref } from 'vue'
import { Sell } from '@element-plus/icons-vue'

// Start: Biểu đồ
const series = ref([
  { name: 'Doanh thu', data: [44, 55, 41, 67, 22, 43, 50] }
])
const chartOptions = ref({
  chart: { id: 'basic-bar' },
  xaxis: { categories: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'] },
  title: { text: 'TỔNG DOANH THU TRONG TUẦN', align: 'left' },
  colors: ['#1e85ff', '#3b82f6'],
  plotOptions: { bar: { borderRadius: 6, columnWidth: '50%' } },
  dataLabels: { enabled: false },
  yaxis: { title: { text: 'Triệu VNĐ' } },
  legend: { position: 'bottom' },
  grid: { borderColor: '#eee' },
  tooltip: { theme: 'light' },
})
// End: Biểu đồ

// Start: Thông số
const info = ref([
  {
    title: '45/76',
    description: 'Invoices Awaiting',
    percent: '$5,569 (56%)',
    color: '#409eff'
  },
  {
    title: '45/76',
    description: 'Invoices Awaiting',
    percent: ' $5,569 (56%) ',
    color: '#ffa21d'
  },
  {
    title: '45/76',
    description: 'Invoices Awaiting',
    percent: ' $5,569 (56%) ',
    color: '#17c666'
  },
  {
    title: '45/76',
    description: 'Invoices Awaiting',
    percent: ' $5,569 (56%) ',
    color: '#ea4d4d'
  },
])
// End: Thông số
</script>