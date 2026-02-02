<template>
  <Transition name="page-fade" appear>
    <section v-if="isReady" class="section">
      <div class="container-page">
        <!-- Top nav -->
        <div class="flex items-center justify-between gap-4">
          <RouterLink
            to="/#projects"
            class="text-sm text-white/70 hover:text-white inline-flex items-center gap-2"
          >
            <span aria-hidden="true">←</span> {{ $t('projectDetail.back') }}
          </RouterLink>

          <div class="flex items-center gap-3">
            <a
              v-if="project?.repoUrl"
              class="btn-secondary text-sm"
              :href="project.repoUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ $t('projectDetail.links.repo') }}
            </a>
            <a
              v-if="project?.demoUrl"
              class="btn-primary text-sm"
              :href="project.demoUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ $t('projectDetail.links.demo') }}
            </a>
          </div>
        </div>

        <!-- Not found -->
        <div v-if="!project" class="mt-10 space-y-4">
          <h1>{{ $t('projectDetail.notFound.title') }}</h1>
          <p class="text-white/70">{{ $t('projectDetail.notFound.body') }}</p>
          <RouterLink to="/#projects" class="btn-primary w-fit">
            {{ $t('projectDetail.notFound.cta') }}
          </RouterLink>
        </div>

        <!-- Content -->
        <div v-else class="mt-10">
          <!-- Asymmetric grid -->
          <div class="grid lg:grid-cols-12 gap-10 items-start">
            <!-- LEFT (sticky summary) -->
            <aside class="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div class="space-y-3">
                <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
                  {{ projectTitle }}
                </h1>
                <p class="text-white/70 leading-relaxed">
                  {{ projectTagline }}
                </p>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <TagPill v-for="t in project.tags" :key="t" :label="t" />
              </div>

              <!-- Stack -->
              <div class="card space-y-3">
                <div>
                  <div class="text-xs uppercase tracking-wider text-white/50">
                    {{ $t('projectDetail.stack') }}
                  </div>
                  <p class="mt-2 text-sm text-white/80">
                    {{ project.stack.join(' · ') }}
                  </p>
                </div>

                <div class="h-px bg-white/10" />

                <div class="space-y-2">
                  <div class="text-xs uppercase tracking-wider text-white/50">
                    {{ $t('projectDetail.highlights') }}
                  </div>
                  <ul class="space-y-2 text-sm text-white/80 list-disc pl-5">
                    <li v-for="h in projectHighlights" :key="h">{{ h }}</li>
                  </ul>
                </div>
              </div>

              <!-- Quick actions -->
              <div class="flex flex-wrap gap-3">
                <a
                  v-if="project.repoUrl"
                  class="btn-secondary"
                  :href="project.repoUrl"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ $t('projectDetail.links.code') }}
                </a>

                <a
                  v-if="project.demoUrl"
                  class="btn-primary"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ $t('projectDetail.links.viewDemo') }}
                </a>

                <a
                  v-if="project.downloadUrl"
                  class="btn-secondary"
                  :href="project.downloadUrl"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ $t('projectDetail.links.download') }}
                </a>

                <a
                  v-if="!project.demoUrl && !project.downloadUrl"
                  class="btn-secondary"
                  href="/#contact"
                >
                  {{ $t('projectDetail.links.contact') }}
                </a>
              </div>
            </aside>

            <!-- RIGHT (story) -->
            <article class="lg:col-span-8 space-y-10">
              <!-- Images (optional) -->
              <div v-if="project.imageUrl?.length" class="space-y-3">
                <div class="text-xs uppercase tracking-wider text-white/50">
                  {{ $t('projectDetail.preview') }}
                </div>

                <div class="scrollbar-subtle flex gap-4 overflow-x-auto pb-2">
                  <figure
                    v-for="src in project.imageUrl.slice(1)"
                    :key="src"
                    class="shrink-0 rounded-lg overflow-hidden border border-white/10 bg-white/5 p-2"
                  >
                    <img
                      :src="src"
                      :alt="$t('projectDetail.imageAlt', { title: projectTitle })"
                      class="block h-auto max-h-56 w-auto max-w-[22rem]"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>

              <SectionBlock v-if="projectProblem" :title="$t('projectDetail.sections.problem')">
                <p class="text-white/70 leading-relaxed">{{ projectProblem }}</p>
              </SectionBlock>

              <SectionBlock v-if="projectSolution" :title="$t('projectDetail.sections.solution')">
                <p class="text-white/70 leading-relaxed">{{ projectSolution }}</p>
              </SectionBlock>

              <SectionBlock
                v-if="projectDescription.length"
                :title="$t('projectDetail.sections.details')"
              >
                <div class="space-y-4">
                  <p
                    v-for="(p, idx) in projectDescription"
                    :key="idx"
                    class="text-white/70 leading-relaxed"
                  >
                    {{ p }}
                  </p>
                </div>
              </SectionBlock>

              <SectionBlock
                v-if="projectLearnings.length"
                :title="$t('projectDetail.sections.learnings')"
              >
                <ul class="space-y-2 text-white/70 list-disc pl-5">
                  <li v-for="l in projectLearnings" :key="l">{{ l }}</li>
                </ul>
              </SectionBlock>

              <SectionBlock
                v-if="projectRoadmap.length"
                :title="$t('projectDetail.sections.roadmap')"
              >
                <ul class="space-y-2 text-white/70 list-disc pl-5">
                  <li v-for="r in projectRoadmap" :key="r">{{ r }}</li>
                </ul>
              </SectionBlock>

              <!-- CTA (asymmetric ending) -->
              <div class="card">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 class="text-base font-semibold">{{ $t('projectDetail.cta.title') }}</h3>
                    <p class="text-white/70 text-sm mt-1">
                      {{ $t('projectDetail.cta.body') }}
                    </p>
                  </div>
                  <a href="/#contact" class="btn-primary w-fit">
                    {{ $t('projectDetail.cta.button') }}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TagPill from '../components/ui/TagPill.vue'
import SectionBlock from '../components/ui/SectionBlock.vue'
import { PROJECTS } from '../content/projects'

const route = useRoute()
const { t, tm } = useI18n()
const slug = computed(() => String(route.params.slug ?? ''))

const project = computed(() => PROJECTS.find((p) => p.slug === slug.value))

const projectTitle = computed(() =>
  project.value?.titleKey ? t(project.value.titleKey) : (project.value?.title ?? ''),
)

const projectTagline = computed(() =>
  project.value?.taglineKey ? t(project.value.taglineKey) : (project.value?.tagline ?? ''),
)

const projectProblem = computed(() =>
  project.value?.problemKey ? t(project.value.problemKey) : (project.value?.problem ?? ''),
)

const projectSolution = computed(() =>
  project.value?.solutionKey ? t(project.value.solutionKey) : (project.value?.solution ?? ''),
)

const projectHighlights = computed<string[]>(() => {
  if (!project.value) return []
  if (project.value.highlightsKey) {
    const value = tm(project.value.highlightsKey)
    return Array.isArray(value) ? value : []
  }
  return project.value.highlights ?? []
})

const projectDescription = computed<string[]>(() => {
  if (!project.value) return []
  if (project.value.descriptionKey) {
    const value = tm(project.value.descriptionKey)
    return Array.isArray(value) ? value : []
  }
  return project.value.description ?? []
})

const projectLearnings = computed<string[]>(() => {
  if (!project.value) return []
  if (project.value.learningsKey) {
    const value = tm(project.value.learningsKey)
    return Array.isArray(value) ? value : []
  }
  return project.value.learnings ?? []
})

const projectRoadmap = computed<string[]>(() => {
  if (!project.value) return []
  if (project.value.roadmapKey) {
    const value = tm(project.value.roadmapKey)
    return Array.isArray(value) ? value : []
  }
  return project.value.roadmap ?? []
})

const isReady = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isReady.value = true
  })
})
</script>
