<template>
  <section class="section">
    <div class="container-page">
      <div class="max-w-3xl space-y-6">
        <h1>{{ $t('hero.title') }}</h1>

        <p class="text-white/70 text-lg leading-relaxed">
          {{ $t('hero.subtitle1') }}
        </p>

        <p class="text-white/70 max-w-2xl">
          {{ $t('hero.subtitle2') }}
        </p>
        <p class="text-white/70 max-w-2xl">
          {{ $t('hero.subtitle3') }}
        </p>

        <div class="flex flex-wrap gap-3 pt-2">
          <a href="#projects" class="btn-primary">{{ $t('hero.cta.projects') }}</a>
          <a href="#contact" class="btn-secondary">{{ $t('hero.cta.contact') }}</a>
        </div>

        <div class="flex flex-wrap gap-3 pt-3">
          <a href="/cv.pdf" class="btn-secondary text-sm" target="_blank" rel="noreferrer">
            {{ $t('hero.cv.view') }}
          </a>
          <a href="/cv.pdf" class="btn-secondary text-sm" download>
            {{ $t('hero.cv.download') }}
          </a>
        </div>

        <div class="pt-6 text-sm text-white/50">
          {{ $t('hero.meta') }}
        </div>
      </div>
    </div>
  </section>
</template>
