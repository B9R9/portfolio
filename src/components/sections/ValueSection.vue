<template>
  <section class="section">
    <div class="container-page">
      <h2 class="mb-8">{{ $t('value.title') }}</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="card space-y-3">
          <h3 class="text-base font-semibold">{{ $t('value.items.maintainable.title') }}</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            {{ $t('value.items.maintainable.body') }}
          </p>
          <p class="text-white/50 text-sm">{{ $t('value.items.maintainable.meta') }}</p>
        </div>

        <div class="card space-y-3">
          <h3 class="text-base font-semibold">{{ $t('value.items.fullstack.title') }}</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            {{ $t('value.items.fullstack.body') }}
          </p>
          <p class="text-white/50 text-sm">{{ $t('value.items.fullstack.meta') }}</p>
        </div>

        <div class="card space-y-3">
          <h3 class="text-base font-semibold">{{ $t('value.items.problemSolving.title') }}</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            {{ $t('value.items.problemSolving.body') }}
          </p>
          <p class="text-white/50 text-sm">{{ $t('value.items.problemSolving.meta') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
