import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Customer {
      id: ID
      name: String
      surname: String
      company: String
      emails: [Email]
      age: Int
      type: CustomerType
      orders: [Order]
    }
    type Order {
      product: String
      price: Int
    }
    type Email {
      email: String
    }
    enum CustomerType {
      BASIC
      PREMIUM
    }
    type Query {
      getCustomer(id: ID): Customer
    }
    input OrderInput {
      product: String
      price: Int
    }
    input EmailInput {
      email: String
    }
    """ New Customer fields """
    input CustomerInput {
      id: ID
      name: String!
      surname: String!
      company: String!
      emails: [EmailInput]
      age: Int!
      type: CustomerType!
      orders: [OrderInput]
    }
    """ Mutations to create new Customers """
    type Mutation {
      # resolver's name, input with data and what it returns
      """ Creates a new customer and saves it in database """
      createCustomer(input: CustomerInput): Customer
    }
  `)

export default schema
