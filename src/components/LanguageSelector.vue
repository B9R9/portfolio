<template>
  <div
    class="relative hidden sm:block"
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

  <div class="relative sm:hidden">
    <button
      type="button"
      class="inline-flex h-8 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80"
      :aria-label="$t('languageSelector.aria')"
      @click="isMobileOpen = !isMobileOpen"
    >
      {{ currentLabel }}
      <span class="text-[10px] text-white/50">▾</span>
    </button>
    <div
      v-if="isMobileOpen"
      class="absolute right-0 mt-2 w-28 rounded-xl border border-white/10 bg-[#0b0b0b] p-1 shadow-xl"
    >
      <button
        v-for="option in localeOptions"
        :key="option"
        type="button"
        class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 hover:bg-white/10 hover:text-white"
        :class="locale === option ? 'bg-white/15 text-white' : ''"
        @click="setLocale(option)"
      >
        <span>{{ labels[option] }}</span>
        <span v-if="locale === option" class="text-[10px]">✓</span>
      </button>
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
const isMobileOpen = ref(false)

const currentLabel = computed(() => labels[locale.value as (typeof localeOptions)[number]])

const setLocale = (value: (typeof localeOptions)[number]) => {
  locale.value = value
  isExpanded.value = false
  isMobileOpen.value = false
}
</script>
