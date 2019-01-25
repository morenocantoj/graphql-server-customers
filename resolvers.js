// Customer class
class Customer {
  constructor(id, {name, surname, company, email, age, type, orders}) {
    this.id = id
    this.name = name
    this.surname = surname
    this.company = company
    this.email = email
    this.age = age
    this.type = type
    this.orders = orders
  }
}

// Aux DB
const customersDB = {}

// GraphQL resolver
const resolvers = {
  getCustomer: ({id}) => {
    return new Customer(id, customersDB[id])
  },
  createCustomer: ({input}) => {
    const id = require('crypto').randomBytes(10).toString('hex')
    customersDB[id] = input;
    return new Customer(id, input)
  }
};

export default resolvers
