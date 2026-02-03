<template>
  <section id="projects" class="section">
    <div class="container-page">
      <h2 class="mb-8">{{ $t('projects.title') }}</h2>
      <!-- Filter -->
      <ProjectTypeSelect v-model="type" />
      <ProjectTagsFilter v-model="selectedTags" :tags="tags" class="hidden sm:block" />

      <div class="relative">
        <div
          class="scrollbar-subtle flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
          :class="{ 'opacity-40': isFiltering }"
        >
          <ProjectCard v-for="p in filtered" :key="p.slug" :project="p" />
        </div>
        <div
          v-if="isFiltering"
          class="absolute inset-0 flex items-center justify-center"
          aria-live="polite"
        >
          <span class="spinner" :aria-label="$t('common.loading')" />
        </div>
        <div
          v-else-if="filtered.length === 0"
          class="mt-6 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
        >
          {{ $t('projects.empty') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue'
import ProjectTagsFilter from '../filters/ProjectTagsFilter.vue'
import ProjectTypeSelect from '../filters/ProjectTypeSelect.vue'
import { PROJECTS } from '../../content/projects'
import { ref, computed, watch } from 'vue'

const type = ref<'all' | 'work' | 'personal'>('all')
const selectedTags = ref<string[]>([])

const filtered = computed(() => {
  return PROJECTS.filter((p) => {
    const matchesType = type.value === 'all' ? true : p.type === type.value
    const matchesTags = selectedTags.value.every((tag) => p.tags.includes(tag))
    return matchesType && matchesTags
  })
})

const tags = computed(() => {
  const tagSet = new Set<string>()
  PROJECTS.forEach((p) => {
    if (type.value === 'all' || p.type === type.value) {
      p.tags.forEach((t) => tagSet.add(t))
    }
  })
  return Array.from(tagSet).sort()
})

const isFiltering = ref(false)
let filterTimer: number | undefined

watch(type, () => {
  isFiltering.value = true
  if (filterTimer) window.clearTimeout(filterTimer)
  filterTimer = window.setTimeout(() => {
    isFiltering.value = false
  }, 1000)
})

watch(selectedTags, () => {
  isFiltering.value = true
  if (filterTimer) window.clearTimeout(filterTimer)
  filterTimer = window.setTimeout(() => {
    isFiltering.value = false
  }, 1000)
})

</script>
