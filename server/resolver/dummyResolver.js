const {CustomerList, ProductList, OrderLineList, OrderList} = require('../data/dummy');

const resolvers = {
	// QUERY
    Query: {
        customers: () => CustomerList,
		orders: () => OrderList,		
		products: async(parent, args, context) => {
			//console.log(JSON.stringify(context))
			return await context.mongoDataMethods.getAllProducts()
		},
		orderLines: () => OrderLineList,

		orderOrderLines: (parent, { orderId }) => {
			//console.log('get orderline by orderId: ' + orderId );
			var results = OrderLineList.filter(o => o.orderId.toString() === orderId)
			return results;
		},
		customer(parent, { id }) {
			var fid = id ? id : '0';
			//console.log('get customer by Id: ' + id);
			return CustomerList.find(c => c.id.toString() === fid)
		},
		product: (parent, { id }) => ProductList.find(p => p.id.toString() === id),
		order: (parent, { id }) => OrderList.find(p => p.id.toString() === id)
    },

	Customer: {
		orders: (parent, args) => {
			//console.log(JSON.stringify(parent) + ' -- ' + JSON.stringify(args));
			return OrderList.filter(o => o.customerId === parent.id)
		}
	},

	Order: {
		orderLines: (parent, args) => {
			//console.log(JSON.stringify(parent) + ' -- ' + JSON.stringify(args));
			return OrderLineList.filter(ol => ol.orderId === parent.id)
		},
        customer: (parent, args) => {
            return CustomerList.find(c => c.id.toString() === parent.customerId)
        }
	},

	OrderLine: {
		product: (parent, args) => {
			return ProductList.find(p => p.id === parent.productId)
		}
	},

	Product: {
		orders: (parent, args) => {
			var existLines = OrderLineList.filter(ol => ol.productId === parent.id);
			if(existLines.length > 0){
				var orderIds = existLines.map(({ orderId }) => orderId)
				var results = OrderList.filter(o => orderIds.includes(o.id))
				return results;
			}

			return [];
		}
	}

}

module.exports = resolvers
