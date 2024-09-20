var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(/* GraphQL */`
    input MessageInput {
      content: String
      author: String
    }
   
    type Message {
      id: ID!
      content: String
      author: String
    }
   
    type Query {
      getMessage(id: ID!): Message
      allMessage(limit:Int): [Message]
    }
  
    type Mutation {
      createMessage(input: MessageInput): Message
      updateMessage(id: ID!, input: MessageInput): Message
    }
  `)

  class Message {
    constructor(id, { content, author }) {
      this.id = id
      this.content = content
      this.author = author
    }
  }

// Maps username to content
var fakeDatabase = [
    {
        id: '1',
        content: 'content 1',
        author: 'author 1'
    },
    {
        id: '2',
        content: 'content 2',
        author: 'author 2'
    }    
];    
 
// The root provides a resolver function for each API endpoint
var root = {
    allMessage({limit}) {
        return fakeDatabase;
    },    
    getMessage({ id }) {
      if (!fakeDatabase[id]) {
        throw new Error("no message exists with id " + id)
      }
      return new Message(id, fakeDatabase[id])
    },
    createMessage({ input }) {
      // Create a random id for our "database".
      var id = require("crypto").randomBytes(10).toString("hex")
   
      fakeDatabase[id] = input
      return new Message(id, input)
    },
    updateMessage({ id, input }) {
      if (!fakeDatabase[id]) {
        throw new Error("no message exists with id " + id)
      }
      // This replaces all old data, but some apps might want partial update.
      fakeDatabase[id] = input
      return new Message(id, input)
    },
  }
 
var app = express()
 
// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)

// var { ruruHTML } = require("ruru/server")
// Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//     res.type("html")
//     res.end(ruruHTML({ endpoint: "/graphql" }))
//   })
 
// Start the server at port
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")