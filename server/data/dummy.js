const CustomerList = [
	{
		id: 1,
		firstname: 'Emily',
		lastname: 'Johnson'
	},
    {
		id: 2,
		firstname: 'Michael',
		lastname: 'Williams'
	},
    {
		id: 3,
		firstname: 'Sophia',
		lastname: 'Brown'
	},
    {
		id: 4,
		firstname: 'James',
		lastname: 'Davis'
	},
    {
		id: 5,
		firstname: 'Emma',
		lastname: 'Miller'
	}
]

const ProductList = [
	{
        id: 1,
		title: 'Lemon',
        description: 'Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.',
		price: 100
	},
    {
        id: 2,
		title: 'Green Chili Peppe',
        description: 'Spicy green chili pepper, ideal for adding heat to your favorite recipes.',
		price: 200
    },
    {
        id: 3,
		title: 'Water',
        description: 'Pure and refreshing bottled water, essential for staying hydrated throughout the day.',
		price: 300
    },
    {
        id: 4,
		title: 'Green Bell Pepper',
        description: 'Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.',
		price: 400
    },
    {
        id: 5,
		title: 'Cucumber',
        description: 'Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.',
		price: 450
    }
]

const OrderList = [
	{
		id: 1,
		totalProduct: 1,
		orderDate: '20-09-2024',
		customerId: 1
	},
	{
		id: 2,
		totalProduct: 2,
		orderDate: '21-09-2024',
		customerId: 1
	},
	{
		id: 3,
		totalProduct: 2,
		orderDate: '21-09-2024',
		customerId: 2
	}      
]

const OrderLineList = [
	{
		id: 1,
        qty: 1,
		orderId: 1,
		productId: 1
	},
	{
		id: 2,
        qty: 1,
		orderId: 2,
		productId: 1
	},
	{
		id: 3,
        qty: 1,
		orderId: 2,
		productId: 2
	},
	{
		id: 4,
        qty: 1,
		orderId: 3,
		productId: 3
	}     
]

module.exports = {
	CustomerList,
	OrderList,
    ProductList,
    OrderLineList
}
