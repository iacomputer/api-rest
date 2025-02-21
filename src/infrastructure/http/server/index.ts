import fastify, { FastifyInstance } from 'fastify'
import autoLoad from '@fastify/autoload'
import { join } from 'path'

export const createServer = async (): Promise<FastifyInstance> => {
  const server = fastify()

  server.register(autoLoad, {
    dir: join(__dirname, '../routes'),
  })

  await server.listen({ host: '0.0.0.0', port: 3000 })
  return server
}
