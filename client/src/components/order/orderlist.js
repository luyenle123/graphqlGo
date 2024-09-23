import { useQuery } from '@apollo/client'
import { getAllOrders } from '../../graphqlclient/queries'
import { useState } from 'react';
import { OrderDetail } from './orderdetail';

const OrderList = () => {
    const  [idSelected, setIdSelected] = useState(null);
    const { loading, error, data } = useQuery(getAllOrders);

    //console.log(JSON.stringify(data));

	if (loading) return <p>fetching orders ....</p>
	if (error) return <p>Error fetching orders!</p>

    const handleClick = (orderId) => {
        setIdSelected(orderId);
    }

  return (
    <>
        <div>
            Order List:

            <div className='flex w-full'>
                {data && data.orders && data.orders.map(c => (
                    <div className='m-1' key={c.id} >
                        <div className='w-80 p-3 border border-dotted border-gray-300 cursor-pointer' onClick={() => handleClick(c.id)}>
                            <div className='text-gray-300'>{c.id}</div>
                            <div>order date:{c.orderDate}</div>
                        </div>
                    </div>
                ))}                
            </div>

            <div>
                { idSelected && <OrderDetail id={idSelected}/> }
            </div>
        </div>
    </>
  )
}

export { OrderList }