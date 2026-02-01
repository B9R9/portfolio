<template>
  <section class="section">
    <div class="container-page">
      <h2 class="mb-8">{{ $t('skills.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="card space-y-4">
          <div>
            <h3 class="text-base font-semibold">{{ $t('skills.frontend.title') }}</h3>
            <p class="text-white/70 text-sm mt-1">{{ $t('skills.frontend.body') }}</p>
          </div>

          <div>
            <h3 class="text-base font-semibold">{{ $t('skills.backend.title') }}</h3>
            <p class="text-white/70 text-sm mt-1">{{ $t('skills.backend.body') }}</p>
          </div>
        </div>

        <div class="card space-y-4">
          <div>
            <h3 class="text-base font-semibold">{{ $t('skills.data.title') }}</h3>
            <p class="text-white/70 text-sm mt-1">{{ $t('skills.data.body') }}</p>
          </div>

          <div>
            <h3 class="text-base font-semibold">{{ $t('skills.tools.title') }}</h3>
            <p class="text-white/70 text-sm mt-1">{{ $t('skills.tools.body') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
