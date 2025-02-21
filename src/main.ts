import { createServer } from './infrastructure/http/server'

const main = async (): Promise<void> => {
  await createServer()
}

void main()
