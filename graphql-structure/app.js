import express from 'express';
import { graphiqlExpress } from 'apollo-server-express';
import graphqlMiddleware from './graphql-middleware';
import bodyParser from 'body-parser';

const GRAPHQL_PORT = 4000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlMiddleware);
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);


//ARTICLE TO FOLLOW
//https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035?_ga=2.184308132.301971161.1526823665-1674861885.1524060418
//https://www.apollographql.com/docs/graphql-tools/generate-schema.html#modularizing
