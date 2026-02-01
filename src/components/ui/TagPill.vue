<template>
  <span
    class="inline-flex items-center rounded-full px-3 py-1 text-xs border border-white/10 bg-white/5 text-white/80"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>
