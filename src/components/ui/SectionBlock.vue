<template>
  <section class="space-y-3">
    <div class="flex items-baseline justify-between gap-6">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <div class="h-px flex-1 bg-white/10 max-w-[10rem]" />
    </div>

    <div class="card">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
