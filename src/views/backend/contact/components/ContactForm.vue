<template lang="">
    <div>
        <h2 class="font-bold mb-4 text-xl">Thông tin liên hệ tư vấn</h2>
        <el-row :gutter="24">
            <el-col :span="12">
                <div class="mt-4">
                    <h3 class="text-sm">Họ và tên:</h3>
                    <el-input size="large" class="w-full mt-2" placeholder="" value="Nguyễn Văn A" readonly />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="mt-4">
                    <h3 class="text-sm">Email:</h3>
                    <el-input size="large" class="w-full mt-2" placeholder="" value="nguyenvana@example.com" readonly />
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">Số điện thoại:</h3>
                    <el-input size="large" class="w-full mt-2" placeholder="" value="1900-123-456" readonly />
                </div>
            </el-col>
            <el-col :span="24">
                <div class="mt-4">
                    <h3 class="text-sm">Nội dung:</h3>
                    <el-mention size="large" type="textarea" class="w-full mt-2" :autosize="{ minRows: 10 }" placeholder="" value="Xin chào, tôi cần hỗ trợ về sản phẩm XYZ mà tôi đã mua. Sản phẩm không hoạt động như mong đợi và tôi muốn biết cách giải quyết vấn đề này." readonly />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="mt-4">
                    <h3 class="text-sm">Thời gian:</h3>
                    <el-input size="large" class="w-full mt-2" placeholder="" value="2023-10-01 12:00:00" readonly />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="mt-4">
                    <h3 class="text-sm">Trạng thái <span class="text-red-600 mr-1">*</span></h3>
                    <el-select v-model="value" size="large" placeholder="Select" class="w-full mt-2">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
            </el-col>
        </el-row>
        <div>
            
            <div class="mt-4 text-right">
                <el-button type="primary">Cập nhật</el-button>
                <el-button @click="drawer = false" type="info">Huỷ</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            options: [
                { value: 'category1', label: 'Danh mục 1' },
                { value: 'category2', label: 'Danh mục 2' },
                { value: 'category3', label: 'Danh mục 3' },
            ],
        }
    }
}
</script>