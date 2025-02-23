export default async function (app) {
  app.get('/', (req, reply) => {
    const message = req.i18n.t('serverWorking')
    reply.send({ message })
  })
}
