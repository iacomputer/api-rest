import fastify, { FastifyInstance } from 'fastify'
import autoLoad from '@fastify/autoload'
import { join } from 'path'
import dotenv from 'dotenv'

dotenv.config()

export const createServer = async (): Promise<FastifyInstance> => {
  const server = fastify()

  server.register(autoLoad, {
    dir: join(__dirname, '../routes'),
  })
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

  await server.listen({ host: '0.0.0.0', port })
  return server
}
