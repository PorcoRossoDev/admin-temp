<template>
    <el-container class="h-[100vh]">
        <!-- Sidebar -->
        <Aside />

        <!-- Content -->
        <div class="flex-1">
            <Header />

            <el-main>
                <RouterView />
            </el-main>
        </div>
    </el-container>
</template>

<script setup>
import Aside from '@/views/admin/common/Aside.vue';
import Header from '@/views/admin/common/Header.vue';
</script>