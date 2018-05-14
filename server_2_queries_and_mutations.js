//1
{
    message
}

//2
query getSingleCourse($courseID: Int!) {
    course(id: $courseID) {
        title
        author
        description
        topic
        url
    }
}
//query variables
{
    "courseID":1
}

//3
query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
      course1: course(id: $courseID1) {
             ...courseFields
      },
      course2: course(id: $courseID2) {
            ...courseFields
      }
}
fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
//query variables
{
    "courseID1":1,
    "courseID2":2
}

//4
fragment courseFields on Course {
  title
  author
  description
  topic
  url
}

mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ... courseFields
  }
}
//query variables
{
  "id": 1,
  "topic": "JavaScript"
}
