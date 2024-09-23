// import logo from './logo.svg';
import './App.css';
import { CustomerList } from './components/customerlist';

import { ApolloProvider,  ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient(
  {
    uri : 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  }
);

function App() {
  return (
    <ApolloProvider client={client}>
      <div>GraphQLGo Client</div>
      <div>
        <CustomerList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
