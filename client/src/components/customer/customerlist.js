import { useQuery } from '@apollo/client'
import { getAllCustomers } from '../../graphqlclient/queries'
import { useState } from 'react';
import { CustomerDetail } from './customerdetail';

const CustomerList = () => {
    const  [cusSelected, setCusSelected] = useState(null);
    const { loading, error, data } = useQuery(getAllCustomers);

    //console.log(JSON.stringify(data));

	if (loading) return <p>fetching customers ....</p>
	if (error) return <p>Error fetching customers!</p>

    const handleClick = (cusId) => {
        setCusSelected(cusId);
    }

  return (
    <>
        <div>
            Customers:

            <div className='flex w-full'>
                {data && data.customers && data.customers.map(c => (
                    <div className='m-1' key={c.id} >
                        <div className='w-80 p-3 border border-dotted border-gray-300 cursor-pointer' onClick={() => handleClick(c.id)}>
                            <div>{c.id}</div>
                        </div>
                    </div>
                ))}                
            </div>

            <div>
                { cusSelected && <CustomerDetail cusId={cusSelected}/> }
            </div>
        </div>
    </>
  )
}

export { CustomerList }