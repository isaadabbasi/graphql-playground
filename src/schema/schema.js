const GraphQL = require('graphql');
const { Authors, Books } = require('../mocks');
const AuthorType = require('./author.typeDef');
const BookType = require('./book.typeDef');
const { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } = GraphQL;


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return Authors.find(author => author.id === args.id);
      }
    },

    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return Books.find(book => book.id === args.id);
      }
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Authors;
      }
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Books;
      }
    },

  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
});