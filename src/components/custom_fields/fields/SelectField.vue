<template>
  <div>
    <label class="font-bold mb-1 block">{{ label }}</label>
    <el-select v-model="localData" @change="updateValue" placeholder="Chọn một mục" class="w-full">
      <el-option v-for="o in options" :key="o" :label="o" :value="o" />
    </el-select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: String,
  data: String,
  options: Array
})

const emit = defineEmits(['update:data'])
const localData = ref(props.data)

watch(() => props.data, val => localData.value = val)

const updateValue = val => emit('update:data', val)
</script>