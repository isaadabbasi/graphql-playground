const GraphQL = require('graphql');
const Books = require('../mocks/books');

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema } = GraphQL;



const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: GraphQLString,
    name: GraphQLString,
    genre: GraphQLString,
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        console.log('args: ', args);
        return Books.find(book => book.id === args.id);
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
});