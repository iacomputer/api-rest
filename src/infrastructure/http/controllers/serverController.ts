import fastify, { FastifyInstance } from 'fastify'
import autoLoad from '@fastify/autoload'
import { join } from 'path'
import i18next from '../../config/i18n'
import i18nextMiddleware from '../middlewares/i18nMiddleware'
import { https } from '../../config/https'
import '../../config/dotenv'

export const serverController = async (): Promise<FastifyInstance> => {
  const server = fastify({
    https,
  })

  server.register(i18nextMiddleware, { i18next })

  server.register(autoLoad, {
    dir: join(__dirname, '../routes'),
  })

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8443

  await server.listen({ host: '0.0.0.0', port })
  return server
}
