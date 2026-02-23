<template>
    <draggable v-model="items" item-key="id" :group="{ name: 'menu' }" animation="200" handle=".drag-handle">
        <template #item="{ element }">
            <div class="menu-item mb-3 border-dashed border-gray-300 rounded-lg">

                <!-- Header -->
                <div class="border border-gray-300 flex items-center justify-between menu-header px-3 py-2" :class="{ 'bg-gray-100': openItems.has(element.id) }">
                    <div class="left flex items-center gap-2">
                        <el-icon class="drag-handle cursor-move">
                            <Rank />
                        </el-icon>
                        <span>{{ element.title }}</span>
                    </div>

                    <div class="right">
                        <!-- <el-button type="danger" size="small" circle @click="remove(element.id)">
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </el-button> -->
                        <el-button type="" size="small" circle @click="toggleOpen(element.id)">
                            <el-icon><ArrowDown /></el-icon>
                        </el-button>
                    </div>
                </div>

                <!-- Edit -->
                <div v-show="openItems.has(element.id)" class="drag-edit border border-gray-300 px-5 py-4 border-t-0">
                    <div>
                        <span class="text-sm font-semibold">Nhãn điều hướng:</span>
                        <el-input v-model="element.title" size="medium" class="mt-1" />
                    </div>
                    <div class="mt-3">
                        <span class="text-sm font-semibold">Đường dẫn:</span>
                        <el-input v-model="element.title" size="medium" class="mt-1" />
                    </div>
                    <div class="mt-3">
                        <span class="text-sm font-semibold">Hình ảnh:</span>
                        <el-upload action="#" list-type="picture-card" :auto-upload="false" class="mt-1">
                            <el-icon><Plus /></el-icon>

                            <template #file="{ file }">
                            <div>
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                <span class="el-upload-list__item-actions">
                                <span
                                    class="el-upload-list__item-preview"
                                    @click="handlePictureCardPreview(file)"
                                >
                                    <el-icon><zoom-in /></el-icon>
                                </span>
                                <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleDownload(file)"
                                >
                                    <el-icon><Download /></el-icon>
                                </span>
                                <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleRemove(file)"
                                >
                                    <el-icon><Delete /></el-icon>
                                </span>
                                </span>
                            </div>
                            </template>
                        </el-upload>

                        <el-dialog v-model="dialogVisible">
                            <img w-full :src="dialogImageUrl" alt="Preview Image" />
                        </el-dialog>
                    </div>
                    <div class="mt-3">
                        <el-checkbox v-model="checked1" label="Mở sang tab mới" size="" />
                    </div>
                    <div class="mt-1">
                        <el-checkbox v-model="checked2" label="Hiển thị" size="" />
                    </div>
                </div>

                <!-- Children -->
                <div v-if="element.children" class="children ml-7 mt-3">
                    <MenuItem v-if="level < maxLevel" v-model="element.children" :level="level + 1" />
                </div>
            </div>
        </template>
    </draggable>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { computed } from 'vue'
import { Rank, Delete, ArrowDown, Plus } from '@element-plus/icons-vue'

const maxLevel = 3
const openItems = ref(new Set())

const props = defineProps({
    modelValue: Array,
    level: Number
})

const emit = defineEmits(['update:modelValue'])

const items = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val)
})

const remove = (id) => {
    const index = items.value.findIndex(i => i.id === id)
    if (index !== -1) {
        items.value.splice(index, 1)
    }
}

const toggleOpen = (id) => {
    if (openItems.value.has(id)) {
        openItems.value.delete(id)
    } else {
        openItems.value.add(id)
    }
}
</script>

<style scoped>
/* .menu-item {
    border: 1px solid #ebeef5;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 10px;
    background: white;
}

.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
}

.children {
    margin-top: 10px;
    padding-left: 30px;
    border-left: 2px dashed #dcdfe6;
} */
</style>