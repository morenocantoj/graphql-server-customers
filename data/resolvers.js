import mongoose from 'mongoose'
import { Customers } from './db'

// Customer class
class Customer {
  constructor(id, {name, surname, company, emails, age, type, orders}) {
    this.id = id
    this.name = name
    this.surname = surname
    this.company = company
    this.emails = emails
    this.age = age
    this.type = type
    this.orders = orders
  }
}

export const resolvers = {
  Query: {
    getCustomer: ({id}) => {
      return new Customer(id, customersDB[id])
    },
  },
  Mutation: {
    createCustomer: (root, {input}) => {
      const newCustomer = new Customers({
        name: input.name,
        surname: input.surname,
        company: input.company,
        emails: input.emails,
        age: input.age,
        type: input.type,
        orders: input.orders
      })
      newCustomer.id = newCustomer._id

      return new Promise((resolve, rejects) => {
        newCustomer.save((error) => {
          if (error) rejects(error)
          else resolve(newCustomer)
        })
      })
    },
    updateCustomer: (root, {input}) => {
      return new Promise((resolve, rejects) => {
        // If customer does not exist create a new one
        Customers.findOneAndUpdate({_id: input.id}, input, {new: true}, (error, customer) => {
          if (error) rejects(error)
          else resolve(customer)
        })
      })
    },
    deleteCustomer: (root, {id}) => {
      return new Promise((resolve, rejects) => {
        Customers.findOneAndRemove({_id: id}, (error) => {
          if (error) rejects(error)
          else resolve(true)
        })
      })
    }
  }
}
