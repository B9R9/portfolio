<template>
  <div v-if="project" @click="$router.push(`/projects/${project.slug}`)" class="cursor-pointer">
    <article
      class="col-span-4 flex flex-col md:col-span-2 lg:col-span-1 hover:scale-[1.02] transition-transform"
    >
      <div class="card flex h-full min-h-[300px] flex-col gap-4">
        <header class="text-sm font-semibold text-white">{{ projectTitle }}</header>
        <div class="relative overflow-hidden rounded-md border border-white/10 bg-white/5">
          <div class="relative h-48 overflow-hidden">
            <img
              v-if="project.imageUrl?.length"
              :src="project.imageUrl[0]"
              :alt="$t('projects.card.imageAlt', { title: projectTitle })"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div v-else class="absolute inset-0 flex items-center justify-center bg-white/5">
              <span class="text-5xl font-semibold text-white/70">{{ projectInitial }}</span>
            </div>
          </div>
          <div
            class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-3 text-xs text-white/80"
          >
            {{ projectTagline }}
          </div>
        </div>
        <div class="scrollbar-subtle mt-auto flex items-center gap-2 overflow-x-auto">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project } from '../content/projects'

const props = defineProps<{
  project: Project
}>()

const { t } = useI18n()

const projectTitle = computed(() =>
  props.project.titleKey ? t(props.project.titleKey) : props.project.title,
)

const projectInitial = computed(() => projectTitle.value.trim().charAt(0).toUpperCase())

const projectTagline = computed(() =>
  props.project.taglineKey ? t(props.project.taglineKey) : props.project.tagline,
)
</script>
