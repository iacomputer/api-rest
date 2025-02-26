import { FastifyCompressOptions } from '@fastify/compress'

export const compressConfig: FastifyCompressOptions = {
  global: true,
  threshold: 0,
  encodings: ['gzip', 'deflate']
}
