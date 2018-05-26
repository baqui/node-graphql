import { graphqlExpress } from 'apollo-server-express';
import schema from './schema/index';
import resolvers from './resolvers/index';
import Course from './models/Course';
import courseMockDb from './mocks/courses';

const middleware = graphqlExpress(request => ({
  schema: schema(resolvers),
  context: {
    request,
    Course: new Course({ connector: courseMockDb })
  }
}));

export default middleware;
