import { Hono } from 'hono'

const app = new Hono()

app.all('/.well-known/atproto-did', (c) => {
  return c.text('did:plc:dkpxvoaxlc2jvyrlznzxijdx')
})

app.all('/*', (c) => {
  return c.redirect('https://lucaspardue.com', 301)
})

export default app
