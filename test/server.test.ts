import { createServer } from '../src/infrastructure/http/server'
import http from 'http'
import { FastifyInstance } from 'fastify'

const testServer = async () => {
  const server = await createServer()
  const address = server.server.address()
  const port = typeof address === 'string' ? address : address?.port

  return new Promise<void>((resolve, reject) => {
    http
      .get(`http://localhost:${port}/`, (res) => {
        let data = ''

        res.on('data', (chunk) => {
          data += chunk
        })

        res.on('end', () => {
          handleResponse(data, server, resolve, reject)
        })
      })
      .on('error', (err) => {
        handleError('HTTP request error', server, reject, err)
      })
  })
}

const handleResponse = (
  data: string,
  server: FastifyInstance,
  resolve: () => void,
  reject: (reason?: unknown) => void,
) => {
  try {
    const json = JSON.parse(data)
    if (json.message === 'Server is working...') {
      console.log('Test passed')
      resolve()
    } else {
      handleError('Unexpected response', server, reject)
    }
  } catch (err) {
    handleError('Invalid JSON response', server, reject, err)
  } finally {
    server.close()
  }
}

const handleError = (
  message: string,
  server: FastifyInstance,
  reject: (reason?: unknown) => void,
  error?: Error,
) => {
  console.error(`Test failed: ${message}`)
  if (error) {
    console.error(`Error details: ${error.message}`)
  }
  server.close()
  reject(new Error(message))
}

testServer().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
