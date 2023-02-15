import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const { makeExecutableSchema } = require('graphql-tools');

const schema1 = require("./schema")

const PORT = 4000

const schema = makeExecutableSchema({
    typeDefs: [schema1.typeDefs],
    resolvers: [schema1.resolvers],
  });
  
  const server = new ApolloServer({
    schema,
  });
  
const { url } = await startStandaloneServer(server);
console.log(`Server ready at ${url}`);