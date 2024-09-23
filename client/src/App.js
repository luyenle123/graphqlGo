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
  const [type, setType] = useState(null);

  const handleClick = (type) => {
    setType(type);
  }  

  return (
      <div className='m-3'>
        <div>GraphQLGo Client</div>
        <div>
          <div className='w-full h-14'>
            <button className='button' onClick={() => handleClick('C')}>Customer</button>
            <button className='button' onClick={() => handleClick('P')}>Product</button>
            <button className='button' onClick={() => handleClick('O')}>Orders</button>
          </div>
          <ApolloProvider client={client}>
            {type === 'C' && <CustomerList/> }

            {type === 'O' && <OrderList/> }

            {type === 'P' && <ProductList/> }
          </ApolloProvider>
        </div>
      </div>
  );
}

export default App;
