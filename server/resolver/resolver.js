
const resolvers = {
	// QUERY
    Query: {
        customers: async (parent, args, context) => await context.dbMethods.getAllCustomers(),
		
		orders: async (parent, args, context) => await context.dbMethods.getAllOrders(),

		products: async (parent, args, context) => await context.dbMethods.getAllProducts(),

		orderLines: async (parent, args, context) => await context.dbMethods.getAllOrderLines(),

		orderOrderLines: async (parent, { orderId }, context) => await context.dbMethods.getOrderLines(orderId),

		customer: async (parent, { id }, context) => await context.dbMethods.getCustomer(id),

		product: async(parent, { id }, context) => await context.dbMethods.getProduct(id),

		order: async(parent, { id }, context) => await context.dbMethods.getOrder(id)
    },

	Customer: {
		orders: async ({ id }, args, context) => {
			return await context.dbMethods.getAllOrders({ customerId: id }) 
		}
	},

	Order: {
		orderLines: async ({id}, args, context) => {
			return await context.dbMethods.getAllOrderLines({ orderId: id })
		},
		customer: async (parent, args, context) => {
			return await context.dbMethods.getCustomer(parent.customerId)
		}
	},

	OrderLine: {
		product: async (parent, args, context) => {
			return await context.dbMethods.getProduct(parent.productId)
		}
	},

	Product: {
		orders: async (parent, args, context) => {
			return await context.dbMethods.getProductOrders(parent.id)
		}
	}
}

module.exports = resolvers
