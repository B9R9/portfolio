<template>
  <div class="min-h-screen">
    <header class="border-b border-white/10">
      <div class="container-page h-16 flex items-center justify-between">
        <RouterLink to="/" class="font-semibold">Baptiste</RouterLink>

        <nav class="flex items-center gap-4 text-sm">
          <a href="/cv-baptiste-riffard.pdf" class="btn-secondary text-sm" download>
            {{ $t('nav.downloadCv') }}
          </a>

          <a href="/#projects" class="text-white/80 hover:text-white">{{ $t('nav.projects') }}</a>
          <a href="/#contact" class="text-white/80 hover:text-white">{{ $t('nav.contact') }}</a>
          <LanguageSelector class="ml-2" />
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="border-t border-white/10">
      <div class="container-page py-10 text-sm text-white/60">
        © {{ new Date().getFullYear() }} — {{ $t('footer.builtWith') }}
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>
