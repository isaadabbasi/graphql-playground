const GraphQl = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = GraphQl;

const { Books } = require('../mocks');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(require('./book.typeDef')),
      resolve(parent, args) {
        return Books.filter(book => book.authorId === parent.id);
      }
    }
  }),
});

module.exports = AuthorType;