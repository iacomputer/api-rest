import { serverController } from '../../infrastructure/http/controllers/serverController'

export const serverService = async (): Promise<void> => {
  await serverController()
}
