<template>
  <Transition name="page-fade" appear>
    <div v-if="isReady">
      <HeroSection />
      <ProjectsSection />
      <ValueSection />
      <JourneySection />
      <WorkStyleSection />
      <SkillsSection />
      <ContactSection />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '../components/sections/HeroSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import ValueSection from '../components/sections/ValueSection.vue'
import JourneySection from '../components/sections/JourneySection.vue'
import WorkStyleSection from '../components/sections/WorkStyleSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

const route = useRoute()
const isReady = ref(false)

const scrollToHash = async () => {
  if (!route.hash) return
  await nextTick()
  const target = document.querySelector(route.hash)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  requestAnimationFrame(() => {
    isReady.value = true
    scrollToHash()
  })
})

watch(
  () => route.hash,
  () => {
    if (isReady.value) scrollToHash()
  }
)
</script>
