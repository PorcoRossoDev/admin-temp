<template>
  <div class="mt-3">
    <h3 class="text-md font-semibold">{{ field.label }}</h3>

    <div
      v-for="(group, gIndex) in field.items"
      :key="gIndex"
      class="repeater-item mb-3"
    >
      <FieldRenderer
        v-for="sub in group"
        :key="sub.id"
        :field="sub"
        :component-map="componentMap"
      />

      <el-button type="danger" @click="removeGroup(gIndex)" class="mt-2 !text-xs">
        <el-icon class="mr-1"><DeleteFilled /></el-icon>
        Xóa nhóm
      </el-button>
    </div>

    <el-button type="primary" @click="addGroup" class="!text-xs">
      <el-icon class="mr-1"><CirclePlus /></el-icon>
      Thêm mục
    </el-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { DeleteFilled, CirclePlus } from "@element-plus/icons-vue";
import FieldRenderer from '@/components/custom_fields/fields/FieldRenderer.vue'

const props = defineProps({
  field: Object,
  componentMap: Object
})

const addGroup = () => {
  const first = props.field.items[0]
  props.field.items.push(
    first.map(f => ({ ...f, id: Date.now() + Math.random() }))
  )
}

const removeGroup = index => {
  props.field.items.splice(index, 1)
}
</script>