import express from 'express'
// GraphQL
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.get('/', (req, resp) => {
  res.send('All ready')
})

// Customer class
class Customer {
  constructor(id, {name, surname, company, email}) {
    this.id = id
    this.name = name
    this.company = company
    this.email = email
  }
}

// Aux DB
const customersDB = {}

// GraphQL resolver
const root = {
  customer: () => {
    return {
      "id": 192929292,
      "name": "John",
      "surname": "Doe",
      "company": "Farysoft",
      "email": "john.doe@example.com"
    }
  },
  createCustomer: ({input}) => {
    const id = require('crypto').randomBytes(10).toString('hex')
    customersDB[id] = input;
    return new Customer(id, input)
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000, () => {
  console.log('Server running...')
})
