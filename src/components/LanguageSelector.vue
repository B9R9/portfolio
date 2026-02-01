<template>
  <div
    class="relative"
    @mouseenter="isExpanded = true"
    @mouseleave="isExpanded = false"
  >
    <div
      class="inline-flex h-8 items-center gap-1 overflow-hidden rounded-full border border-white/15 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-1 text-[11px] font-semibold tracking-[0.2em] text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur transition-[width,box-shadow] duration-200"
      :class="isExpanded ? 'w-[12rem]' : 'w-[3.5rem]'"
      :aria-label="$t('languageSelector.aria')"
    >
      <div v-if="!isExpanded" class="flex h-6 w-full items-center justify-center leading-none">
        {{ currentLabel }}
      </div>
      <template v-if="isExpanded">
        <button
          v-for="option in localeOptions"
          :key="option"
          type="button"
          class="flex h-6 items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase leading-none tracking-[0.2em] transition text-white/60 hover:bg-white/10 hover:text-white"
          :class="[
            locale === option ? 'underline underline-offset-4 text-white' : '',
            isExpanded || option === locale ? 'opacity-100' : 'opacity-0 pointer-events-none',
          ]"
          @click="setLocale(option)"
        >
          {{ labels[option] }}
        </button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const localeOptions = ['fr', 'en', 'fi', 'sv'] as const
const labels: Record<(typeof localeOptions)[number], string> = {
  fr: 'FR',
  en: 'EN',
  fi: 'FI',
  sv: 'SV',
}

const isExpanded = ref(false)

const currentLabel = computed(() => labels[locale.value as (typeof localeOptions)[number]])

const setLocale = (value: (typeof localeOptions)[number]) => {
  locale.value = value
  isExpanded.value = false
}
</script>
