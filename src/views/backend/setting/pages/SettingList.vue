<template>

    

    <el-row :gutter="20">
      <el-col :span="4">
        <!-- Anchor menu -->
        <el-anchor :offset="70" class="w-60 !sticky top-20" @change="scrollToSection">
          <el-anchor-link href="#section1" title="Section 1" />
          <el-anchor-link href="#section2" title="Section 2" />
          <el-anchor-link href="#section3" title="Section 3" />
        </el-anchor>
      </el-col>

      <el-col :span="18">
        <div class="scroll-container">
          <div id="section1" class="h-[500px] mb-10 p-6 bg-white rounded-xl">
            <h2 class="text-xl font-bold mb-4">Section 1</h2>
            <p>Nội dung section 1</p>
          </div>

          <div id="section2" class="h-[500px] border mb-10 p-6">
            <h2 class="text-xl font-bold mb-4">Section 2</h2>
            <p>Nội dung section 2</p>
          </div>

          <div id="section3" class="h-[500px] border mb-10 p-6">
            <h2 class="text-xl font-bold mb-4">Section 3</h2>
            <p>Nội dung section 3</p>
          </div>
        </div>
      </el-col>
    </el-row>

</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import { Tools, Right, Location, Apple, ArrowRight, Promotion } from '@element-plus/icons-vue'

import { computed } from 'vue'
const handleChange = (href) => {
  const el = document.querySelector(href)

  el?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}
</script>

<style scoped>
:deep(.el-card__header) {
    background: #dddddd6b;
}
.el-card__body {
    padding: 11px;
}
:deep(.el-main) {
  scroll-behavior: smooth;
}
</style>