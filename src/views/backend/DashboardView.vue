<template>

  <!-- Breadcrumb -->
  <Breadcrumb title='Dashboard' />

  <!-- Main -->
  <div>

    <!-- Thông số -->
     <el-row :gutter="20" class="mt-5">
      <el-col v-for="(item, index) in info" :span="6">
        <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200">
          <div class="flex gap-x-5 items-center">
            <span class="flex bg-[#e9ecef] w-10 h-10 justify-center items-center rounded-2xl"><el-icon><Sell :size="19" /></el-icon></span>
            <div class="">
              <h3 class="font-semibold text-md">Liên hệ</h3>
              <p class="text-xs"></p>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-x-5 bg-[#f8f9fa] rounded-xl p-4">
            <div class="w-[160px]">
              <ApexChart type="bar" :options="chartOptions" :series="series" height="50" width="160" />
            </div>
            <div class="text-xs flx-1">
              <div class="text-gray-500">Invoices Awaiting </div>
              <div class="font-bold mt-1">$3,020</div>
            </div>
            <!-- <el-progress :percentage="50" :show-text="false" :stroke-width="3" :color="item.color" class="mt-2" /> -->
          </div>
        </div>
      </el-col>
    </el-row>
     

    <!-- Biểu đồ -->
    <el-row :gutter="12" class="mt-5">
      <el-col :span="14">
        <!-- <el-card class="rounded-2xl mt-5 !shadow-amber-100" style="width:100%"> -->
          <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200">
            <OrderChart />
          </div>
        <!-- </el-card> -->
      </el-col>
      <el-col :span="10">
        <!-- <el-card class="rounded-2xl mt-5" style="width:100%">
          <VisitorChart />
        </el-card> -->
        <div class="bg-white shadow-amber-100 p-5 rounded-2xl border border-gray-200">
            <VisitorChart />
          </div>
      </el-col>
    </el-row>

    <!-- Đơn hàng -->
     <Order />

  </div>
</template>

<script setup>
import ApexChart from 'vue3-apexcharts'
import { ref } from 'vue'
import { Sell } from '@element-plus/icons-vue'
import Breadcrumb from '../backend/common/Breadcrumb.vue'
import OrderChart from '@/components/dashboard/OrderChart.vue'
import VisitorChart from '@/components/dashboard/VisitorChart.vue'
import Order from '@/components/dashboard/Order.vue'

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



// Start: Biểu đồ
const series = ref([
  { name: 'Doanh thu', data: [44, 55, 41, 67, 22, 43, 50, 60, 30, 10] }
])

const chartOptions = ref({
  chart: {
    id: 'bar',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },

  colors: ['#1e85ff'],

  plotOptions: {
    bar: {
      borderRadius: 2,
      borderRadiusApplication: 'end',
      horizontal: false,
      columnWidth: '70%' // 👈 đẹp hơn barHeight khi vertical
    }
  },

  dataLabels: {
    enabled: false
  },

  // 👇 TRỤC X
  xaxis: {
    categories: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    labels: {
      show: false // ❌ ẩn text dưới
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    title: {
      text: ''
    }
  },

  // 👇 TRỤC Y
  yaxis: {
    show: false // 🔥 ẩn luôn cả trục (mạnh nhất)
  },

  legend: {
    position: 'bottom'
  },

  grid: {
    borderColor: '#eee',
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false // ❌ tắt line ngang
      }
    }
  },

  tooltip: {
    theme: 'light',
    y: {
      formatter: (val) => {
        return val + ' đ' // 👈 format tiền (tuỳ bạn đổi)
      }
    }
  }
})
</script>

<style scoped>
:deep(.el-table__header thead tr th) {
    background-color: #eff2f7!important;
    padding-block: 14px!important;
}
</style>