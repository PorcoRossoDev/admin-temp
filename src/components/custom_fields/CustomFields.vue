<template>
    <div>
        <h2 class="font-bold text-lg mb-4">Cấu hình Fields</h2>

        <FieldRenderer
            v-for="field in customFieldsType.meta_values"
            :key="field.id"
            :field="field"
            :component-map="componentMap"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import FieldRenderer from '@/components/custom_fields/fields/FieldRenderer.vue'
import componentMap from './componentMap.js'


const customFieldsType = ref({
    id: 1,
    meta_values: [
        { id: 1, type: 'text', label: 'Tiêu đề', data: 'Hello' },
        { id: 2, type: 'textarea', label: 'Mô tả', data: 'Nội dung...' },
        { id: 3, type: 'editor', label: 'Editor', data: '<p>Bài viết</p>' },
        { id: 4, type: 'select', label: 'Loại', data: 'a', options: ['a','b','c'] },
        { id: 5, type: 'checkbox', label: 'Kích hoạt', data: true },
        { id: 6, type: 'image', label: 'Ảnh đại diện', data: '' },
        {
            id: 7,
            type: 'group',
            label: 'Thông tin nhóm',
            fields: [
                { id: 8, type: 'text', label: 'Họ tên', data: '' },
                { id: 9, type: 'text', label: 'Điện thoại', data: '' }
            ]
        },
        {
            id: 10,
            type: 'repeater',
            label: 'Danh sách mục',
            items: [
                [
                    { id: 11, type: 'text', label: 'Tên mục', data: '' },
                    { id: 12, type: 'textarea', label: 'Mô tả', data: '' },
                ]
            ]
        }
    ]
})
</script>