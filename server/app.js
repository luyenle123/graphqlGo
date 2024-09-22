const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

// Load schema & resolvers

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const mongoDataMethods = require('./data/mongoDb')

const connectDb = async() => {
    try{
        var connectionString = 'mongodb+srv://graphqlgo:graphqlgo123@cluster0.sptpx.mongodb.net/GraphQLGo?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(connectionString);
        console.log('mongodb connected')
    }catch(error){
        console.log(error);
    }
}
connectDb();

const server = new ApolloServer({
	typeDefs,
	resolvers,
    context: () => ({mongoDataMethods})
})


const main = async () => {
    const app = express();
    await server.start();
    server.applyMiddleware({ app });
  
    app.listen({ port: 4000 }, () =>
      console.log("Now browse to http://localhost:4000" + server.graphqlPath)
    );
  };
  
  main();