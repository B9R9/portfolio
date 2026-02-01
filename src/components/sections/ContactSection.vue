<template>
  <section id="contact" class="section">
    <div class="container-page">
      <div class="card space-y-4">
        <h2>{{ $t('contact.title') }}</h2>
        <p class="text-white/70 max-w-2xl">
          {{ $t('contact.subtitle') }}
        </p>

        <div class="flex flex-wrap gap-3">
          <a class="btn-primary" href="mailto:baptiste.riffard@gmail.com">
            {{ $t('contact.cta.email') }}
          </a>
          <a class="btn-secondary" href="https://github.com/B9R9" target="_blank" rel="noreferrer"
            >{{ $t('contact.cta.github') }}</a
          >
          <!-- Mets ton LinkedIn ici -->
          <a class="btn-secondary" href="#" target="_blank" rel="noreferrer">
            {{ $t('contact.cta.linkedin') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
