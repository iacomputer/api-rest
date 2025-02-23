import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import * as i18nextMiddleware from 'i18next-http-middleware'
import { join } from 'path'

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    preload: ['en'],
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: join(__dirname, '../../../locales/{{lng}}.json'),
    },
    interpolation: { escapeValue: false },
  })

export default i18next
