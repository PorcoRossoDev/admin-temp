<template>
  <component
    :is="Component"
    :field="field"
    :component-map="componentMap"
  />
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  field: { type: Object, required: true },
  componentMap: { type: Object, required: true }
})

const Component = computed(() => props.componentMap[props.field.type])
</script>