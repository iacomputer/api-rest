import fastify, { FastifyInstance } from 'fastify'
import { Http2SecureServer, Http2ServerRequest, Http2ServerResponse } from 'http2'

import '../../config/dotenv'
import { https } from '../../config/https'
import { plugins } from '../../config/plugins'

export const serverController = async (): Promise<FastifyInstance<Http2SecureServer, Http2ServerRequest, Http2ServerResponse>> => {
  const server = fastify<Http2SecureServer, Http2ServerRequest, Http2ServerResponse>({
    http2: true,
    https
  })

  plugins(server)

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8443

  await server.listen({ host: '0.0.0.0', port })
  return server
}
