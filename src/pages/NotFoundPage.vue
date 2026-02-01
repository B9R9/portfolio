<template>
  <Transition name="page-fade" appear>
    <section v-if="isReady" class="section">
      <div class="container-page space-y-4">
        <h1>404</h1>
        <p class="text-white/70">{{ $t('notFound.message') }}</p>
        <RouterLink to="/" class="btn-primary w-fit">
          {{ $t('notFound.cta') }}
        </RouterLink>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isReady = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isReady.value = true
  })
})
</script>
