import fastify, { FastifyInstance } from 'fastify'

import '../../config/dotenv'
import { https } from '../../config/https'
import { plugins } from '../../config/plugins'

export const serverController = async (): Promise<FastifyInstance> => {
  const server = fastify({
    https,
  })

  plugins(server)

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8443

  await server.listen({ host: '0.0.0.0', port })
  return server
}
