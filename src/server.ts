import { createServer } from './infrastructure/http/server/controller'

const server = async (): Promise<void> => {
  await createServer()
}

void server()
