<template>
  <draggable
    v-model="items"
    item-key="id"
    :group="{ name: 'menu' }"
    animation="200"
    handle=".drag-handle"
  >
    <template #item="{ element }">
      <div class="menu-item">
        
        <!-- Header -->
        <div class="menu-header">
          <div class="left">
            <el-icon class="drag-handle cursor-move">
              <Rank />
            </el-icon>

            <span>{{ element.title }}</span>
          </div>

          <div class="right">
            <el-button
              type="danger"
              size="small"
              circle
              @click="remove(element.id)"
            >
              <el-icon><Delete /></el-icon>
            </el-button>
          </div>
        </div>

        <!-- Edit -->
        <el-input
          v-model="element.title"
          size="small"
          class="mt-2"
        />

        <!-- Children -->
        <div
          v-if="element.children"
          class="children"
        >
          <MenuItem
            v-if="level < maxLevel"
            v-model="element.children"
            :level="level + 1"
          />
        </div>

      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { computed } from 'vue'
import { Rank, Delete } from '@element-plus/icons-vue'

const maxLevel = 3

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
</script>

<style scoped>
.menu-item {
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
}
</style>