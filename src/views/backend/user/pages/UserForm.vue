<template lang="">
    <!-- Breadcrumb -->
    <Breadcrumb title='Thêm thành viên' />

    <!-- Main -->
     <div class="bg-white shadow-amber-100 overflow-hidden p-5 border rounded-2xl border-gray-200 mt-6">

        <div class="">
            <h1 class="font-bold capitalize pb-4 border-b border-gray-200">Thông tin chung</h1>
        </div>

        <div class="mt-4">
            <div class="flex gap-4">
                <div class="w-[80px] h-[80px] items-center justify-center">
                    <el-image src="https://ui-avatars.com/api/?name=Xuân Bình" class="w-full h-full rounded-sm" />
                </div>
                <div class="flex flex-col">
                    <h2>Ảnh đại diện</h2>
                    <div class="my-auto">
                        <el-button type="primary" size="small">
                            <el-icon :size="16" class="mr-1"><Upload /></el-icon> Cập nhật
                        </el-button>
                        <el-button type="info" size="small">
                            <el-icon :size="12" class="mr-1"><DeleteFilled /></el-icon> Xoá
                        </el-button>
                    </div>
                    <p class="text-gray-400 text-[11px]">Use JPEG, PNG, or GIF. Best size: 100x100 pixels, không vượt quá 200Kb</p>
                </div>
            </div>

            <el-row :gutter="24" class="mt-2">
                <el-col :span="12">
                    <div class="mt-4">
                        <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Tên tài khoản</h3>
                        <el-input v-model="input1" class="w-full mt-2 !text-sm !h-[35px]" placeholder="Nhập tên tài khoản" />
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mt-4">
                        <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Mật khẩu</h3>
                        <el-input v-model="input1" class="w-full mt-2 !text-sm !h-[35px]" placeholder="Nhập mật khẩu" />
                    </div>
                </el-col>
                
                <el-col :span="6">
                    <div class="mt-4">
                        <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Email</h3>
                        <el-input v-model="input1" class="w-full mt-2 !text-sm !h-[35px]" placeholder="Nhập email" />
                    </div>
                </el-col>    

                <el-col :span="12">
                    <div class="mt-4">
                        <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Họ và tên</h3>
                        <el-input v-model="input1" class="w-full mt-2 !text-sm !h-[35px]" placeholder="Nhập họ và tên" />
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mt-4">
                        <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Số điện thoại</h3>
                        <el-input v-model="input1" class="w-full mt-2 !text-sm !h-[35px]" placeholder="Nhập số điện thoại" />
                    </div>
                </el-col> 
                <el-col :span="6">
                    <div class="mt-4">
                        <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Phân quyền</h3>
                        <el-select class="!w-full !text-sm mt-2" multiple filterable allow-create default-first-option
                            :reserve-keyword="false" placeholder="Chọn phân quyền">
                            <el-option v-for="item in roles" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </el-col>  
                
                <el-col :span="24">
                    <div class="mt-4">
                        <h3 class="text-sm"><span class="text-red-600 mr-1">*</span>Địa chỉ</h3>
                        <el-input v-model="input1" class="w-full mt-2 !text-sm" type="textarea" :autosize="{ minRows: 4, maxRows: 5 }" placeholder="Nhập điạ chỉ" />
                    </div>
                </el-col>       
            </el-row>
        </div>
        <div class="mt-4 text-right">
            <el-button type="primary">Cập nhật</el-button>
            <el-button type="info">Huỷ</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/views/backend/common/Breadcrumb.vue'
import { Upload, DeleteFilled } from '@element-plus/icons-vue'

// Phân quyền
const roles = ref([
    {
        id: 1,
        label: "Quản trị viên",
    },
    {
        id: 2,
        label: "Tác giả",
    },
    {
        id: 3,
        label: "Người biên tập",
    },
])

</script>

<style scoped>
:deep(.el-select__wrapper){
    height: 35px;
}
</style>