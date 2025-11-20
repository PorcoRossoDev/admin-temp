<template>
    <el-container class="h-screen">
        <!-- Sidebar -->
        <Aside class="h-full" />

        <!-- Content -->
        <div class="flex-1 h-full flex flex-col">
            <Header />

            <el-main class="flex-1 overflow-auto">
                <RouterView />
            </el-main>
        </div>
    </el-container>
</template>

<script setup>
import Aside from '@/views/admin/common/Aside.vue';
import Header from '@/views/admin/common/Header.vue';
</script>