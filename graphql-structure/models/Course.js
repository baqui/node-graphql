export default class Course {
  constructor(db) {
    this.db = db.connector;
  }

  getCourses = topic =>
    topic
      ? this.db.allCourses.filter(course => course.topic === topic)
      : this.db.allCourses;

  getById = id => this.db.allCourses.filter(course => course.id === id)[0];

  updateCourse = ({ id, topic }) => {
    const course = this.db.allCourses.filter(c => c.id === id)[0];
    course.topic = topic;
    return course;
  };
}
