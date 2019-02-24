const GraphQLSchema = require('graphql').GraphQLSchema;
const RootQuery = require('./queries');

module.exports = new GraphQLSchema({
  query: RootQuery
});