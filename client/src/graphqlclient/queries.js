import { gql } from '@apollo/client'

const getAllCustomers = gql`
    query{
        customers {
            id
            firstname
            lastname
        }
    }
`

const getAllProducts = gql`
    query{
        products {
            id
            title
            description
        }
    }
`

const getAllOrders = gql`
    query{
        orders {
            id
            totalProduct
            orderDate
        }
    }
`

export { getAllCustomers, getAllOrders, getAllProducts }