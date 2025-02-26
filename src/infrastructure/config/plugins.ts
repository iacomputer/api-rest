import autoLoad from '@fastify/autoload'
import compress from '@fastify/compress'
import cors from '@fastify/cors'
import { FastifyInstance } from 'fastify'
import { Http2SecureServer, Http2ServerRequest, Http2ServerResponse } from 'http2'
import { join } from 'path'

import i18nextMiddleware from '../http/middlewares/i18nMiddleware'
import { compressConfig } from './compress'
import { corsConfig } from './cors'
import i18next from './i18n'

export const plugins = (server: FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse>): void => {
  server.register(cors, corsConfig)

  server.register(i18nextMiddleware, { i18next })

  server.register(compress, compressConfig)

  server.register(autoLoad, {
    dir: join(__dirname, '../http/routes')
  })
}
