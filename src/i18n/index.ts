import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fi from './locales/fi.json'
import fr from './locales/fr.json'
import sv from './locales/sv.json'

const messages = { en, fi, fr, sv }

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
