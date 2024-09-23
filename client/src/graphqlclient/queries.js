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
            price
            thumbnail
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

const getCustomer = gql`
    query($id: ID!){
        customer(id: $id) {
            id
            firstname
            lastname

            orders {
              id
              totalProduct
              orderDate
            }            
        }
    }
`

const getOrder = gql`
    query($id: ID!){
        order(id: $id) {
            id
            totalProduct
            orderDate

            customer {
                firstname
                lastname
            }            

            orderLines {
                id
                qty

                product {
                    id
                    title
                    price
                }
            }
        }
    }
`

export { getAllCustomers, getAllOrders, getAllProducts, getCustomer, getOrder }