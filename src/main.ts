import { createServer } from './infrastructure/http/server'

const main = async (): Promise<void> => {
  const server = await createServer()
}

void main()
