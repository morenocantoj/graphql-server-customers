import express from 'express'
// GraphQL
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.get('/', (req, resp) => {
  res.send('All ready')
})

// GraphQL resolver
const root = { customer: () => {
  return {
    "id": 192929292,
    "name": "John",
    "surname": "Doe",
    "company": "Farysoft",
    "email": "john.doe@example.com"
  }
}}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000, () => {
  console.log('Server running...')
})
