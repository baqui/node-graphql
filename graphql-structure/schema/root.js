import { makeExecutableSchema } from 'graphql-tools';
import Course from './Course/type';
import CourseMutations from './Course/mutations';
import CourseQuery from './Course/query';

const RootTypes = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default makeExecutableSchema({
  typeDefs: [RootTypes, CourseQuery, CourseMutations, Course],
  resolvers: {},
});
