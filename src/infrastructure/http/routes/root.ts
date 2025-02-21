export default async function (app) {
  app.get('/', (request, reply) => {
    reply.send({ message: 'Server is working...' })
  })
}
