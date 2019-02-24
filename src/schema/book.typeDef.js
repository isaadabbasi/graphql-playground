const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = GraphQL;
const Authors = require('../mocks/authors');
const AuthorType = require('./author.typeDef');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Authors.find(author => author.id === parent.authorId);
      }
    }
  }),
});

module.exports = BookType;