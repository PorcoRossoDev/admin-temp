<template lang="">
    <div>
        <h2 class="font-bold !mb-1 text-xl border-b-[0.5px] border-gray-300 pb-4">
            <el-icon class="relative top-1"><ChatDotRound /></el-icon>
            Thông tin bình luận
        </h2>
        <el-row :gutter="24">
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-md">
                        <span class="font-bold"><el-icon class="relative top-0.5 text-red-500 mr-0.5"><Link /></el-icon>Chủ đề: </span> 
                        <span class="underline text-red-500">Yêu cầu hỗ trợ sản phẩm</span>
                    </h3>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">
                        <span class="font-bold">Họ và tên: </span> 
                        <span class="">Nguyễn Văn A</span>
                    </h3>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm flex items-center">
                        <span class="font-bold">Đánh giá: </span> 
                        <span class="ml-2 relative -top-0.5">
                              <el-rate allow-half />
                        </span>
                    </h3>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">
                        <span class="font-bold">Email: </span>
                        <span class="">nguyenvana@example.com</span>
                    </h3>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">
                        <span class="font-bold">Số điện thoại: </span>
                        <span class="">1900-123-456</span>
                    </h3>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">
                        <span class="font-bold">Thời gian: </span>
                        <span class="">2023-10-01 12:00:00</span>
                    </h3>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="mt-4 flex items-center">
                    <h3 class="text-sm"> 
                        <span class="font-bold">Trạng thái: </span>
                    </h3>
                    <el-switch v-model="publish" class="ml-2" />
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">
                        <span class="font-bold">Nội dung: </span>
                    </h3>
                    <el-mention size="large" type="textarea" class="w-full mt-2" :autosize="{ minRows: 5 }" placeholder="" value="Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này." readonly />
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">
                        <span class="font-bold">Trả lời: </span>
                    </h3>
                    <el-mention size="large" type="textarea" class="w-full mt-2" :autosize="{ minRows: 5 }" placeholder="@Nguyễn Văn A" />
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <el-upload
                        class="upload-demo"
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                    >
                        <el-icon><Plus /></el-icon>
                    </el-upload>

                    <!-- Dialog preview -->
                    <el-dialog v-model="dialogVisible">
                        <img w-full :src="dialogImageUrl" alt="Preview" />
                    </el-dialog>
                </div>
            </el-col>
        </el-row>
        <div>
            <div class="mt-4 text-right">
                <el-button type="primary">Trả lời</el-button>
                <el-button @click="drawer = false" type="info">Huỷ</el-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ChatDotRound, Link, Plus } from '@element-plus/icons-vue';
import { UploadFilled } from '@element-plus/icons-vue'

const value = ref('')
const publish = ref('1')
const fileList = ref([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handlePreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleRemove = (file) => {
  console.log('Removed:', file)
}
</script>