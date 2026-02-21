<template>
    <div class="bg-white shadow-amber-100">

        <el-table :data="permissions" class="mt-4">
            <el-table-column label="Danh sách phân quyền" width="500" class-name="text-black font-bold">
                <template #default="scope">
                    <span class="font-medium text-sm text-gray-600">
                        {{ scope.row.name }}
                    </span>
                </template>
            </el-table-column>

            <el-table-column label="Xem" width="100" class-name="text-black">
                <template #default="scope">
                    <span class="font-medium text-gray-500 text-md">
                        <el-checkbox v-model="scope.row.permission.view" label="" size="large" />
                    </span>
                </template>
            </el-table-column>
            
            <el-table-column label="Thêm" width="100" class-name="text-black">
                <template #default="scope">
                    <span class="font-medium text-gray-500 text-md">
                        <el-checkbox v-model="scope.row.permission.add" label="" size="large" />
                    </span>
                </template>
            </el-table-column>
            
            <el-table-column label="Sửa" width="100" class-name="text-black">
                <template #default="scope">
                    <span class="font-medium text-gray-500 text-md">
                        <el-checkbox v-model="scope.row.permission.edit" label="" size="large" />
                    </span>
                </template>
            </el-table-column>
            
            <el-table-column label="Xoá" width="100" class-name="text-black">
                <template #default="scope">
                    <span class="font-medium text-gray-500 text-md">
                        <el-checkbox v-model="scope.row.permission.delete" label="" size="large" />
                    </span>
                </template>
            </el-table-column>
            
        </el-table>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    setup() {
        const permissions = ref([
            {
                id: 1,
                name: "Thành viên",
                description: "Cho phép người dùng xem nội dung.",
                permission: {
                    view: true,
                    add: false,
                    edit: false,
                    delete: false
                }
            },
            {
                id: 1,
                name: "Nhóm thành viên",
                description: "Cho phép người dùng xem nội dung.",
                permission: {
                    view: false,
                    add: false,
                    edit: true,
                    delete: false
                }
            },
            {
                id: 2,
                name: "Khách hàng",
                description: "Cho phép người dùng chỉnh sửa nội dung.",
                permission: {
                    view: true,
                    add: true,
                    edit: false,
                    delete: false
                }
            },
            {
                id: 2,
                name: "Nhóm khách hàng",
                description: "Cho phép người dùng chỉnh sửa nội dung.",
                permission: {
                    view: true,
                    add: false,
                    edit: false,
                    delete: true
                }
            },
            {
                id: 3,
                name: "Bài viết",
                description: "Cho phép người dùng xóa nội dung.",
                permission: {
                    view: true,
                    add: true,
                    edit: false,
                    delete: false
                }
            },
            {
                id: 4,
                name: "Nhóm bài viết",
                description: "Cho phép người dùng xóa nội dung.",
                permission: {
                    view: false,
                    add: false,
                    edit: false,
                    delete: false
                }
            },
            {
                id: 5,
                name: "Sản phẩm",
                description: "Cho phép người dùng xóa nội dung.",
                permission: {
                    view: true,
                    add: true,
                    edit: false,
                    delete: false
                }
            },
            {
                id: 6,
                name: "Nhóm sản phẩm",
                description: "Cho phép người dùng xóa nội dung.",
                permission: {
                    view: false,
                    add: false,
                    edit: false,
                    delete: false
                }
            }
        ])

        return {
            permissions
        }
    }
}
</script>

<style scoped>
/* Kéo full width header wrapper */
:deep(.el-table__body td) {
    padding-block: 5px!important;
}
:deep(.el-table__header thead th:first-child .cell){
    font-weight: bold;
    text-transform: uppercase;
}
:deep(.el-table__header thead th:not(:first-child)) {
    text-align: right!important;
}
:deep(.el-table__body tbody td:not(:first-child)) {
    text-align: right!important;
}
</style>