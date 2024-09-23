// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import { CustomerList } from './components/customer/customerlist';

import { ApolloProvider,  ApolloClient, InMemoryCache } from '@apollo/client'
import { OrderList } from './components/order/orderlist';
import { ProductList } from './components/product/productlist';

const client = new ApolloClient(
  {
    uri : 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  }
);

function App() {
  const [type, setType] = useState('C');

  const handleClick = (type) => {
    setType(type);
  }  

  return (
    <div>
      <div className='text-center font-bold'>GraphQLGo Client</div>
      <div className='m-3'>
        <div className='w-2/12 h-svh float-left'>
          <div className='w-full h-auto grid'>
              <button className='button' onClick={() => handleClick('C')}>Customer</button>
              <button className='button' onClick={() => handleClick('O')}>Orders</button>
              <button className='button' onClick={() => handleClick('P')}>Product</button>              
            </div>
        </div>
        <div className='float-left w-10/12'>          
          <ApolloProvider client={client}>
            {type === 'C' && <CustomerList/> }

            {type === 'O' && <OrderList/> }

            {type === 'P' && <ProductList/> }
          </ApolloProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
