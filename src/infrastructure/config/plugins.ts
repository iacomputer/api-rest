import autoLoad from '@fastify/autoload'
import compress from '@fastify/compress'
import { FastifyInstance } from 'fastify'
import { join } from 'path'

import i18nextMiddleware from '../http/middlewares/i18nMiddleware'
import { gzip } from './gzip'
import i18next from './i18n'

export const plugins = (server: FastifyInstance): void => {
  server.register(i18nextMiddleware, { i18next })

  server.register(compress, gzip)

  server.register(autoLoad, {
    dir: join(__dirname, '../http/routes'),
  })
}
