<template>

  <!-- Breadcrumb -->
  <Breadcrumb title='Dashboard' />

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
import Breadcrumb from './common/Breadcrumb.vue'
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
</script>