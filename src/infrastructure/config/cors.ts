import i18next from './i18n'

const allowedOrigins = process.env.CORS?.split(',') || []

export const corsConfig = {
  origin: (origin, callback) => {
    const hostname = origin ? new URL(origin).hostname : ''
    if (!hostname || allowedOrigins.includes(hostname)) {
      callback(null, true)
      return
    }
    callback(new Error(i18next.t('notAllowedByCors')), false)
  },
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
