<template>
  <div>
    <h3>{{ field.label }}</h3>
    <el-checkbox v-model="localData" @change="updateValue">{{ label }}</el-checkbox>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: String,
  data: Boolean
})

const emit = defineEmits(['update:data'])
const localData = ref(props.data)

watch(() => props.data, val => localData.value = val)

const updateValue = val => emit('update:data', val)
</script>