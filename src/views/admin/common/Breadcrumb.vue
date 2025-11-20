<template lang="">
    <div class="flex items-center justify-between">
        <h1 class="text-[20px] font-bold">{{title}}</h1>

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
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
})
</script>
<style lang="">
    
</style>
