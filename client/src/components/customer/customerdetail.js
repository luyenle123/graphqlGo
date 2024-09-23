import { useQuery } from '@apollo/client'
import { getCustomer } from '../../graphqlclient/queries'

const CustomerDetail = ({cusId}) => {
    const { loading, error, data } = useQuery(getCustomer, { 
        variables: {id: cusId}
    });

    //console.log(JSON.stringify(data));

	if (loading) return <></>
	if (error) return <></> //<p>Error fetching customer! [{error}]</p>    

  return (
    <>
        <div>
            Customer Detail:

            <div className='flex w-full'>
                {data && data.customer &&
                    <div className='m-1'>
                        <div key={data.customer.id} className='w-80 p-3 border border-dotted border-gray-300'>
                            <div>{data.customer.id}</div>
                            <div>{data.customer.firstname} {data.customer.lastname}</div>

                            <div>
                                Orders: {data.customer.orders?.length}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export { CustomerDetail }