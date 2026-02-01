<template>
  <button
    type="button"
    class="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition"
    :class="
      active
        ? 'bg-white text-black'
        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
    "
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean
}>()
</script>
