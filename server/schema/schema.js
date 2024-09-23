const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Product{
		id: ID!
		title: String
		description: String
		price: Int
		thumbnail: String
		orders: [Order]
	}
	
	type Customer{
		id: ID!
		firstname: String
		lastname: String
		orders: [Order]
	}

	type Order{
		id: ID!
		totalProduct: Int
		orderDate: String
		orderLines: [OrderLine]
		customer: Customer
	}

	type OrderLine{
		id: ID!
		qty: Int
		order: Order
		product: Product
	}

	# ROOT TYPE
	type Query {
		customers: [Customer]
		orders: [Order]
		products: [Product]
		orderLines: [OrderLine]

		orderOrderLines(orderId: ID!): [OrderLine]
		customer(id: ID!): Customer
		order(id: ID!): Order
		product(id: ID!): Product
	}
`

module.exports = typeDefs
