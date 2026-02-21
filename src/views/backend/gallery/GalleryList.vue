<template>

    <!-- Breadcrumb -->
    <Breadcrumb title='Media' />

    <!-- Main -->
    <div class="bg-white shadow-amber-100 p-5 pt-3 rounded-2xl border border-gray-200 mt-6">
        <div class="flex justify-between items-center mt-4 mb-4">
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
            <el-button @click="$router.push({ name: 'admin.product_add' })" type="primary" :dark="isDark" class="flex gap-x-3">
                <el-icon :size="17"><CirclePlus /></el-icon>
                <span>Thêm mới</span>
            </el-button>
        </div>

        <el-tabs v-model="activeName">
            <el-tab-pane label="All" name="first">
                <div class="grid grid-cols-4 gap-7 mt-3">
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Hình ảnh" name="second">
                <div class="grid grid-cols-4 gap-7 mt-4">
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Video" name="third">
                <div class="grid grid-cols-4 gap-7 mt-4">
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                    <div>
                        <div class="photo-stack relative">
                            <div class="rounded-xl overflow-hidden relative z-10"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/109.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute z-9 w-[92%] left-[50%] translate-x-[-50%] h-full -bottom-1.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/77.png" alt=""></div>
                            <div class="rounded-xl overflow-hidden absolute w-[84%] left-[50%] translate-x-[-50%] h-full -bottom-3.5"><img class="object-fit-cover" src="https://prium.github.io/phoenix/v1.24.0/assets/img/gallery/78.png" alt=""></div>
                        </div>
                        <h3 class="font-bold text-md mt-7">Slide trang chủ</h3>
                        <span class="text-xs text-gray-600">45 Items</span>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import { Search, CirclePlus } from '@element-plus/icons-vue'

const activeName = ref('first')

</script>

<style>
.el-tabs__nav-wrap::after {
    display: none;
}
</style>