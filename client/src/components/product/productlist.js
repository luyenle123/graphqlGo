import { useQuery } from '@apollo/client'
import { getAllProducts } from '../../graphqlclient/queries'
import { useState } from 'react';

const ProductList = () => {
    const  [idSelected, setIdSelected] = useState(null);
    const { loading, error, data } = useQuery(getAllProducts);

    //console.log(JSON.stringify(data));

	if (loading) return <p>fetching products ....</p>
	if (error) return <p>Error fetching products!</p>

    const handleClick = (id) => {
        setIdSelected(id);
    }

  return (
    <>
        <div>
            Products:

            <div className='flex w-full'>
                {data && data.products && data.products.map(c => (
                    <div className='m-1' key={c.id} >
                        <div className='w-80 p-3 border border-dotted border-gray-300 cursor-pointer' onClick={() => handleClick(c.id)}>
                            <div className='text-gray-300'>{c.id}</div>
                            <div className='font-bold text-xl my-3'>{c.title}</div>
                            <div>{c.description}</div>
                            <div className='text-right mt-3'>{c.price} $</div>
                        </div>
                    </div>
                ))}                
            </div>

            <div>
                <div className='text-gray-300'>{idSelected}</div>
            </div>
        </div>
    </>
  )
}

export { ProductList }