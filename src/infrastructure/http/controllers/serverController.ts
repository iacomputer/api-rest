import fastify, { FastifyInstance } from 'fastify'
import autoLoad from '@fastify/autoload'
import { join } from 'path'
import '../../config/dotenv'
import i18next from '../../config/i18n'
import i18nextMiddleware from '../middlewares/i18nMiddleware'

export const serverController = async (): Promise<FastifyInstance> => {
  const server = fastify()

  server.register(i18nextMiddleware, { i18next })

  server.register(autoLoad, {
    dir: join(__dirname, '../routes'),
  })

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

  await server.listen({ host: '0.0.0.0', port })
  return server
}
