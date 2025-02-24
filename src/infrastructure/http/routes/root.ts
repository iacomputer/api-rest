export default async function (app) {
  app.get('/', (req, reply) => {
    const message = req.t('serverWorking')
    reply.send({ message })
  })
}
