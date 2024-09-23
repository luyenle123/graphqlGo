import { useQuery } from '@apollo/client'
import { getAllCustomers } from '../graphqlclient/queries'

const CustomerList = () => {
    const { loading, error, data } = useQuery(getAllCustomers);

    console.log(JSON.stringify(data));

	if (loading) return <p>fetching customers ....</p>
	if (error) return <p>Error fetching customers!</p>    

  return (
    <>
        <div>
            Customers:

            {data && data.customers && data.customers.map(c => (
                <div>
                    <div>{c.id}</div>
                    <div>{c.firstname}</div>
                    <div>{c.lastname}</div>
                </div>
            ))}
        </div>
    </>
  )
}

export { CustomerList }