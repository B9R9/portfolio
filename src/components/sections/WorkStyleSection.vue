<template>
  <section class="section">
    <div class="container-page">
      <h2 class="mb-8">{{ $t('workStyle.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="card space-y-2">
          <h3 class="text-base font-semibold">{{ $t('workStyle.items.quality.title') }}</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            {{ $t('workStyle.items.quality.body') }}
          </p>
        </div>

        <div class="card space-y-2">
          <h3 class="text-base font-semibold">{{ $t('workStyle.items.collaboration.title') }}</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            {{ $t('workStyle.items.collaboration.body') }}
          </p>
        </div>

        <div class="card space-y-2">
          <h3 class="text-base font-semibold">{{ $t('workStyle.items.improvement.title') }}</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            {{ $t('workStyle.items.improvement.body') }}
          </p>
        </div>

        <div class="card space-y-2">
          <h3 class="text-base font-semibold">{{ $t('workStyle.items.autonomy.title') }}</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            {{ $t('workStyle.items.autonomy.body') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
