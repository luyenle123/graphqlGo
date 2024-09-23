import { useQuery } from '@apollo/client'
import { getOrder } from '../../graphqlclient/queries'

const OrderDetail = ({id}) => {
    const { loading, error, data } = useQuery(getOrder, { 
        variables: {id: id}
    });

    //console.log(JSON.stringify(data));

	if (loading) return <></>
	if (error) return <></> //<p>Error fetching customer! [{error}]</p>    

  return (
    <>
        <div className='font-bold mt-5'> Order Detail:</div>

        <div className='w-full'>
            {data && data.order &&
                <div className='m-1 w-full'>
                    <div key={data.order.id} className='w-full p-3 border border-dotted border-gray-300'>
                        <div className='text-gray-300'>{data.order.id}</div>
                        <div>{data.order.totalProduct}</div>
                        <div>{data.order.orderDate}</div>

                        <div className='w-full my-2'>
                            <div className='flex py-1 bg-gray-200'>
                                <div className='w-10 mr-2 line-item-col'>#</div>                                    
                                <div className='w-80 mr-2 line-item-col'>Title</div>
                                <div className='w-10 mr-2 line-item-col'>Qty</div>                                    
                                <div className='w-10 mr-2 line-item-col'>Price</div>
                                <div className='w-20 mr-2 line-item-col'>Sub Total</div>
                            </div>                                
                            {data.order.orderLines.map((o, i) => (
                                <div className='flex' key={i}>
                                    <div className='w-10 mr-2 text-center'>{i+1}</div>
                                    <div className='w-80 mr-2 text-left'>{o.product.title}</div>
                                    <div className='w-10 mr-2 text-center'>{o.qty}</div>
                                    <div className='w-10 mr-2 text-right'>{o.product.price} $</div>
                                    <div className='w-20 mr-2 text-right'>{o.product.price * o.qty} $</div>
                                </div>
                            ))}
                        </div>

                        <div className='w-full my-5'>
                            <div>Customer:</div>
                            <div>{data.order.customer.firstname} {data.order.customer.lastname}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
        
    </>
  )
}

export { OrderDetail }