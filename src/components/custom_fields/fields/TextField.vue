<template>
  <div>
    <label class="font-bold mb-1 block">{{ label }}</label>
    <el-input v-model="localData" @input="updateValue" placeholder="Nhập nội dung..." />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: String,
  data: String
})

const emit = defineEmits(['update:data'])
const localData = ref(props.data)

watch(() => props.data, val => localData.value = val)

const updateValue = val => emit('update:data', val)
</script>