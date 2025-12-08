<template>
  <div>
    <label class="font-bold block mb-2">{{ label }}</label>

    <el-upload
      class="upload-box"
      action=""
      :auto-upload="false"
      :show-file-list="false"
      :on-change="handleUpload"
    >
      <el-button type="primary">Chọn ảnh</el-button>
    </el-upload>

    <img v-if="localData" :src="localData" class="w-32 h-32 object-cover border rounded mt-3" />
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

const handleUpload = file => {
  const url = URL.createObjectURL(file.raw)
  localData.value = url
  emit('update:data', url)
}
</script>

<style scoped>
.upload-box { display: inline-block; }
</style>