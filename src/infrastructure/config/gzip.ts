import { FastifyCompressOptions } from '@fastify/compress'

export const gzip: FastifyCompressOptions = {
  global: true,
  threshold: 0,
  encodings: ['gzip', 'deflate'],
}
