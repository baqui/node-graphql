import { makeExecutableSchema } from 'graphql-tools';
import fs from 'fs';
import glob from 'glob';

const typeDefs = glob
  .sync('**/*.gql')
  .map(path => fs.readFileSync(path, 'utf8'));

export default resolvers =>
  makeExecutableSchema({
    typeDefs,
    resolvers
  });
