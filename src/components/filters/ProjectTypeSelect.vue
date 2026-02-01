<template>
  <div class="mb-4 flex items-center gap-4 text-sm">
    <div class="text-white/50">{{ $t('projects.filter.label') }}</div>
    <div class="w-full max-w-md">
      <label
        class="relative inline-flex w-full items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70 focus-within:border-white/20 focus-within:bg-white/10"
      >
        <select
          class="w-full appearance-none bg-transparent pr-6 text-white/80 focus:outline-none"
          :value="modelValue"
          @change="
            $emit(
              'update:modelValue',
              ($event.target as HTMLSelectElement).value as 'all' | 'work' | 'personal',
            )
          "
        >
          <option value="all">{{ $t('projects.filter.all') }}</option>
          <option value="work">{{ $t('projects.filter.work') }}</option>
          <option value="personal">{{ $t('projects.filter.personal') }}</option>
        </select>
        <span class="pointer-events-none absolute right-4 text-white/40">▾</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: 'all' | 'work' | 'personal'
}>()

defineEmits<{
  (e: 'update:modelValue', value: 'all' | 'work' | 'personal'): void
}>()
</script>
