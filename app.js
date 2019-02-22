const express = require('express');
const GraphQLHttp = require('express-graphql');

const GraphQLSchema = require('./src/schema/schema')
const server = express();
const port = 3300;

// * Setup graphql route
server.use('/', GraphQLHttp({
  schema: GraphQLSchema,
  graphiql: true,
}));

// * Spinning server.
server.listen(port, function() {
  console.log(`Server listening on Port: ${port}`)
});