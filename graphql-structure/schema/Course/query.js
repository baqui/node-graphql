export default `
  extend type Query {
      course(id: Int!): Course
      courses(topic: String): [Course]
  }
`;
