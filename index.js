import express from 'express'
// GraphQL
import graphqlHTTP from 'express-graphql'
import { schema } from './data/schema'

const app = express()

app.get('/', (req, resp) => {
  res.send('All ready')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(8000, () => {
  console.log('Server running...')
})
