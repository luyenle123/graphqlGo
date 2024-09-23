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
        <div className='font-bold'> Customer Detail:</div>

        <div className='flex w-full'>
            {data && data.customer &&
                <div className='m-1'>
                    <div key={data.customer.id} className='w-80 p-3 border border-dotted border-gray-300'>
                        <div className='text-gray-300'>{data.customer.id}</div>
                        <div>{data.customer.firstname} {data.customer.lastname}</div>

                        <div className='pt-3'>
                            Orders: <span className='font-bold'>{data.customer.orders?.length}</span>
                            {data.customer.orders.map((o, i) => (
                                <div className='flex' key={i}>
                                    <div className='w-10 mr-2 text-center'>{i+1}</div>
                                    <div className='w-10 mr-2 text-center'>{o.totalProduct}</div>
                                    <div className='w-10 mr-2 text-right'>{o.orderDate} $</div>
                                </div>
                            ))}                            
                        </div>
                    </div>
                </div>
            }
        </div>
        
    </>
  )
}

export { CustomerDetail }