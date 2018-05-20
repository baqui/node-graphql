import { graphqlExpress } from 'apollo-server-express';
import schema from './schema/root';

const middleware = graphqlExpress( request => ({
  schema,
  context: {
    request
  }
}));

export default middleware;
