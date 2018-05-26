//resolver function signature
//fieldName(obj, args, context, info) { result }

export default {
  Query: {
    course: (obj, { id }, { Course }) => awaitCourse.getById(id),
    courses: (obj, { topic }, { Course }) => Course.getCourses()
  },
  Mutation: {
    updateCourseTopic: (obj, { id, topic }, { Course }) =>
      Course.updateCourse({ id, topic })
  },
  Course: {
    id: ({ id }) => id,
    title: ({ title }) => title,
    author: ({ author }) => author,
    description: ({ description }) => description,
    topic: ({ topic }) => topic,
    url: ({ url }) => url
  }
};
