<template>
  <section class="section">
    <div class="container-page">
      <div class="grid md:grid-cols-3 gap-10 items-start">
        <div class="md:col-span-1">
          <h2>{{ $t('journey.title') }}</h2>
          <p class="text-white/50 mt-2 text-sm">{{ $t('journey.subtitle') }}</p>
        </div>

        <div class="md:col-span-2 space-y-4">
          <p class="text-white/70 leading-relaxed">
            {{ $t('journey.p1') }}
          </p>
          <p class="text-white/70 leading-relaxed">
            {{ $t('journey.p2') }}
          </p>
          <p class="text-white/70 leading-relaxed">
            {{ $t('journey.p3') }}
          </p>

          <div class="pt-2 text-sm text-white/50">
            {{ $t('journey.meta') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
