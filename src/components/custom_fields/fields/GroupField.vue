<template>
  <div class="mt-3 bg-gray-50 p-3">
    <h3>{{ field.label }}</h3>

    <FieldRenderer
      v-for="item in field.fields"
      :key="item.id"
      :field="item"
      :component-map="componentMap"
    />
  </div>
</template>

<script setup>
import FieldRenderer from '@/components/custom_fields/fields/FieldRenderer.vue'

defineProps({
  field: Object,
  componentMap: Object
})
</script>