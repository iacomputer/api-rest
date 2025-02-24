import { FastifyInstance } from 'fastify'
import i18next from './i18n'
import i18nextMiddleware from '../http/middlewares/i18nMiddleware'
import compress from '@fastify/compress'
import autoLoad from '@fastify/autoload'
import { join } from 'path'
import { gzip } from './gzip'

export const plugins = (server: FastifyInstance): void => {
  server.register(i18nextMiddleware, { i18next })

  server.register(compress, gzip)

  server.register(autoLoad, {
    dir: join(__dirname, '../http/routes'),
  })
}
