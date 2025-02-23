import { serverService } from './application/services/serverService'

const server = async (): Promise<void> => {
  await serverService()
}

void server()
