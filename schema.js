import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Customer {
      id: ID
      name: String
      surname: String
      company: String
      email: String
      age: Int
      type: CustomerType
      orders: [Order]
    }
    type Order {
      product: String
      price: Int
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
    input CustomerInput {
      id: ID
      name: String!
      surname: String!
      company: String!
      email: String!
      age: Int!
      type: CustomerType!
      orders: [OrderInput]
    }
    type Mutation {
      createCustomer(input: CustomerInput): Customer
    }
  `)

export default schema
