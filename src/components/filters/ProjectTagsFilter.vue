<template>
  <div class="mb-4 flex flex-col gap-3 text-sm sm:flex-row sm:items-start sm:gap-4">
    <div class="text-white/50">{{ $t('projects.tags.label') }}</div>
    <div class="scrollbar-subtle flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
      <TagPillButton
        v-for="tag in tags"
        :key="tag"
        :active="modelValue.includes(tag)"
        @click="$emit('update:modelValue', toggleTag(tag))"
      >
        {{ tag }}
      </TagPillButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import TagPillButton from './TagPillButton.vue'

const props = defineProps<{
  tags: string[]
  modelValue: string[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const toggleTag = (tag: string) => {
  if (props.modelValue.includes(tag)) {
    return props.modelValue.filter((t) => t !== tag)
  }
  return [...props.modelValue, tag]
}
</script>
