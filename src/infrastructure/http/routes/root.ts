export default async function (app, opts) {
  app.get('/', (request, reply) => {
    reply.send({ message: 'Server is working...' })
  })
}
