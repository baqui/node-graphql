import 'babel-polyfill';
import express from 'express';
import { graphiqlExpress } from 'apollo-server-express';
import graphqlMiddleware from './graphql-middleware';
import bodyParser from 'body-parser';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlMiddleware);
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
