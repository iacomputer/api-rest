import { FastifyInstance } from 'fastify'
import https from 'https'

import { serverController } from '../src/infrastructure/http/controllers/serverController'

const SUCCESS_MESSAGE = 'Server is working'

const testServer = async (): Promise<void> => {
  const server = await serverController()
  const address = server.server.address()
  const port = typeof address === 'string' ? address : address?.port

  if (!port) {
    throw new Error('Server address is not available')
  }

  try {
    const data = await makeHttpRequest(`https://localhost:${port}/`)
    handleResponse(data, server)
  } catch (err) {
    handleError('HTTP request error', server, err)
  }
}

const makeHttpRequest = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const options = {
      rejectUnauthorized: false
    }

    https
      .get(url, options, (res) => {
        let data = ''

        res.on('data', (chunk) => {
          data += chunk
        })

        res.on('end', () => {
          resolve(data)
        })
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}

const handleResponse = (data: string, server: FastifyInstance): void => {
  try {
    const json = JSON.parse(data)
    if (json.message === SUCCESS_MESSAGE) {
      console.log('\x1b[32m%s\x1b[0m', 'Test passed')
    } else {
      handleError('Unexpected response', server)
    }
  } catch (err) {
    handleError('Invalid JSON response', server, err)
  } finally {
    server.close()
  }
}

const handleError = (message: string, server: FastifyInstance, error?: Error): void => {
  console.error('\x1b[31m%s\x1b[0m', `Test failed: ${message}`)
  if (error) {
    console.error('\x1b[31m%s\x1b[0m', `Error details: ${error.message}`)
  }
  server.close()
}

testServer().catch((err) => {
  console.error('\x1b[31m%s\x1b[0m', err.message)
  process.exit(1)
})
