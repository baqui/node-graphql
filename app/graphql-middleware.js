import { graphqlExpress } from 'apollo-server-express';
import { MongoClient } from 'mongodb';
//import assert from 'assert';
import schema from './schema/index';
import resolvers from './resolvers/index';
import Course from './models/Course';
import courseMockDb from './mocks/courses';

//mongodb connection
const url = 'mongodb://localhost:27017';
const dbName = 'test';

let db = (async () => {
  try {
    const client = await MongoClient.connect(
      url,
      { useNewUrlParser: true }
    );
    db = await client.db(dbName);
  } catch (err) {
    console.log(err.stack);
  }
})();

const middleware = graphqlExpress(request => ({
  schema: schema(resolvers),
  context: {
    request,
    Course: new Course({ connector: db })
  }
}));

export default middleware;
