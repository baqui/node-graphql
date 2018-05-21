//index
import Course from './Course';

//find better way to do that
export default {
  Query: {
    ...Course.Query
  },
  Mutation: {
    ...Course.Mutation
  },
  Course: {
    ...Course.Course
  }
};
