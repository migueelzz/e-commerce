import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello World!'
})

app
  .listen({
    host: '0.0.0.0',
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server running on http://localhost:3333')
  })
